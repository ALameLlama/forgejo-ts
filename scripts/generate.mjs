#!/usr/bin/env node

/**
 * Code generation script for Forgejo TypeScript client
 *
 * This script:
 * 1. Fetches the Swagger spec template directly from Forgejo's source on Codeberg
 * 2. Processes the Go template variables to produce valid JSON
 * 3. Generates TypeScript client code using openapi-typescript-codegen
 * 4. Creates an axios-based client with full type safety
 *
 * Usage:
 *   FORGEJO_VERSION=14.0.2 npm run generate
 *
 * The script fetches the swagger template from:
 *   https://codeberg.org/forgejo/forgejo/raw/tag/v{version}/templates/swagger/v1_json.tmpl
 */

import { execSync } from "child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, "..");
const SRC_DIR = join(ROOT_DIR, "src");
const GENERATED_DIR = join(SRC_DIR, "generated");

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
 * Fetch the swagger template from Codeberg and process it into valid JSON
 */
async function fetchSwaggerSpec(version) {
  const templateUrl = `https://codeberg.org/forgejo/forgejo/raw/tag/v${version}/templates/swagger/v1_json.tmpl`;
  
  console.log(`Fetching Swagger template from: ${templateUrl}`);
  
  const response = await fetch(templateUrl);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch Swagger template: ${response.status} ${response.statusText}\n` +
      `URL: ${templateUrl}\n` +
      `Make sure version v${version} exists on Codeberg.`
    );
  }
  
  let template = await response.text();
  
  // Process Go template variables
  // Replace {{AppVer | JSEscape}} with the actual version
  template = template.replace(/\{\{AppVer \| JSEscape\}\}/g, version);
  
  // Replace {{AppSubUrl | JSEscape}} with empty string (we'll use base URL in client config)
  template = template.replace(/\{\{AppSubUrl \| JSEscape\}\}/g, "");
  
  // Parse to validate it's valid JSON
  try {
    return JSON.parse(template);
  } catch (error) {
    throw new Error(
      `Failed to parse swagger template as JSON: ${error.message}\n` +
      `There may be unhandled template variables in the spec.`
    );
  }
}

async function generate() {
  console.log("Starting Forgejo TypeScript client generation...\n");
  console.log(`Target version: ${FORGEJO_VERSION}`);

  // Fetch and process the swagger spec
  const spec = await fetchSwaggerSpec(FORGEJO_VERSION);
  const version = spec.info?.version || FORGEJO_VERSION;
  console.log(`API version from spec: ${version}`);

  // Clean and create directories
  if (existsSync(GENERATED_DIR)) {
    rmSync(GENERATED_DIR, { recursive: true });
  }
  mkdirSync(GENERATED_DIR, { recursive: true });

  // Save the spec for reference
  const specPath = join(ROOT_DIR, "swagger.json");
  writeFileSync(specPath, JSON.stringify(spec, null, 2));
  console.log(`Saved Swagger spec to: swagger.json`);

  // Generate the client using openapi-typescript-codegen
  console.log("\nGenerating TypeScript client...");

  try {
    execSync(
      `npx openapi-typescript-codegen --input ${specPath} --output ${GENERATED_DIR} --client axios --useOptions --useUnionTypes`,
      { stdio: "inherit", cwd: ROOT_DIR },
    );
  } catch (error) {
    console.error("Error generating client:", error);
    process.exit(1);
  }

  // Create the main index.ts that exports everything with a nice API
  const indexContent = `/**
 * Forgejo TypeScript Client
 * 
 * Auto-generated from Forgejo API specification
 * API Version: ${version}
 * Generated: ${new Date().toISOString()}
 */

// Re-export everything from the generated client
export * from './generated';

// Import OpenAPI config for the configure function
import { OpenAPI } from './generated';

// Export a convenience function to configure the client
export function configure(options: {
  baseUrl?: string;
  token?: string;
  username?: string;
  password?: string;
}): void {
  if (options.baseUrl) {
    OpenAPI.BASE = options.baseUrl.replace(/\\/$/, ''); // Remove trailing slash
  }
  
  if (options.token) {
    OpenAPI.TOKEN = options.token;
  }
  
  if (options.username && options.password) {
    OpenAPI.USERNAME = options.username;
    OpenAPI.PASSWORD = options.password;
  }
}

// Export metadata about this build
export const FORGEJO_API_VERSION = '${version}';
export const GENERATED_AT = '${new Date().toISOString()}';
`;

  writeFileSync(join(SRC_DIR, "index.ts"), indexContent);
  console.log("\nCreated src/index.ts");

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
  console.log(`  Output: ${SRC_DIR}`);
}

generate().catch((error) => {
  console.error("Generation failed:", error);
  process.exit(1);
});
