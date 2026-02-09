#!/usr/bin/env node

/**
 * Code generation script for Forgejo TypeScript client
 *
 * This script:
 * 1. Fetches the Swagger spec template directly from Forgejo's source on Codeberg
 * 2. Processes the Go template variables to produce valid JSON
 * 3. Generates TypeScript client code using @hey-api/openapi-ts
 * 4. Creates an axios-based client with full type safety
 *
 * Usage:
 *   FORGEJO_VERSION=14.0.2 npm run generate
 *
 * The script fetches the swagger template from:
 *   https://codeberg.org/forgejo/forgejo/raw/tag/v{version}/templates/swagger/v1_json.tmpl
 */

import { createClient } from "@hey-api/openapi-ts";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, "..");
const SRC_DIR = join(ROOT_DIR, "src");

// FORGEJO_VERSION must be provided via environment variable
const FORGEJO_VERSION = process.env.FORGEJO_VERSION;

if (!FORGEJO_VERSION) {
  console.error("Error: FORGEJO_VERSION environment variable is required\n");
  console.error("Usage:");
  console.error("  FORGEJO_VERSION=14.0.2 npm run generate\n");
  console.error("This will fetch the swagger spec directly from Codeberg.");
  process.exit(1);
}

/**
 * Sleep for a given number of milliseconds
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch the swagger template from Codeberg with retry logic
 */
async function fetchSwaggerSpec(version, retries = 3) {
  const templateUrl = `https://codeberg.org/forgejo/forgejo/raw/tag/v${version}/templates/swagger/v1_json.tmpl`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    console.log(
      `Fetching Swagger template from: ${templateUrl} (attempt ${attempt}/${retries})`,
    );

    try {
      const response = await fetch(templateUrl);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Swagger template: ${response.status} ${response.statusText}\n` +
          `URL: ${templateUrl}\n` +
          `Make sure version v${version} exists on Codeberg.`,
        );
      }

      let template = await response.text();

      // Process Go template variables
      // Replace {{AppVer | JSEscape}} with the actual version
      template = template.replace(/\{\{AppVer \| JSEscape\}\}/g, version);

      // Replace {{AppSubUrl | JSEscape}} with empty string
      template = template.replace(/\{\{AppSubUrl \| JSEscape\}\}/g, "");

      // Parse to validate it's valid JSON
      try {
        return JSON.parse(template);
      } catch (error) {
        throw new Error(
          `Failed to parse swagger template as JSON: ${error.message}\n` +
          `There may be unhandled template variables in the spec.`,
        );
      }
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }
      console.log(`  Fetch failed, retrying in 2 seconds...`);
      await sleep(2000);
    }
  }
}

async function generate() {
  console.log("Starting Forgejo TypeScript client generation...\n");
  console.log(`Target version: ${FORGEJO_VERSION}`);

  // Fetch and process the swagger spec
  const spec = await fetchSwaggerSpec(FORGEJO_VERSION);
  const version = spec.info?.version || FORGEJO_VERSION;
  console.log(`API version from spec: ${version}`);

  // Update package.json version to match the API version
  const packageJsonPath = join(ROOT_DIR, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
  packageJson.version = version;
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
  console.log(`Updated package.json version to: ${version}`);

  // Clean src directory except we'll regenerate everything there
  // Remove all .ts files in src to ensure clean generation
  const srcFiles = existsSync(SRC_DIR) ? readdirSync(SRC_DIR) : [];
  for (const file of srcFiles) {
    if (file.endsWith(".ts")) {
      rmSync(join(SRC_DIR, file), { recursive: true });
    }
  }
  mkdirSync(SRC_DIR, { recursive: true });

  // Save the spec for reference
  const specPath = join(ROOT_DIR, "swagger.json");
  writeFileSync(specPath, JSON.stringify(spec, null, 2));
  console.log(`Saved Swagger spec to: swagger.json`);

  // Generate the client using @hey-api/openapi-ts
  console.log("\nGenerating TypeScript client with @hey-api/openapi-ts...");

  try {
    await createClient({
      config: join(ROOT_DIR, "openapi-ts.config.ts"),
    });
    console.log("Client generation successful!");
  } catch (error) {
    console.error("Error generating client:", error);
    process.exit(1);
  }

  console.log("\nClient generated directly to src/");

  // Save version metadata for tracking
  const versionMeta = {
    forgejoApiVersion: version,
    generatedAt: new Date().toISOString(),
    source: `https://codeberg.org/forgejo/forgejo/raw/tag/v${FORGEJO_VERSION}/templates/swagger/v1_json.tmpl`,
  };
  writeFileSync(
    join(ROOT_DIR, "version.json"),
    JSON.stringify(versionMeta, null, 2),
  );
  console.log("Saved version.json");

  console.log("\n✓ Generation complete!");
  console.log(`  API Version: ${version}`);
  console.log(`  Output: ${SRC_DIR} (direct, no generated/ subdir)`);
}

generate().catch((error) => {
  console.error("Generation failed:", error);
  process.exit(1);
});
