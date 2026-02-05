#!/usr/bin/env node

/**
 * Check for new Forgejo versions
 *
 * This script:
 * 1. Reads config.json to get the major versions to track (latest & lts)
 * 2. Fetches releases from Codeberg API
 * 3. Finds the highest patch version for each configured major version
 * 4. Compares against .latest-version and .lts-version files to detect new releases
 */

import { readFileSync, existsSync, appendFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, "..");
const CONFIG_FILE = join(ROOT_DIR, "config.json");
const LATEST_VERSION_FILE = join(ROOT_DIR, ".latest-version");
const LTS_VERSION_FILE = join(ROOT_DIR, ".lts-version");

// Forgejo releases API on Codeberg
const FORGEJO_RELEASES_API =
  "https://codeberg.org/api/v1/repos/forgejo/forgejo/releases";

function loadConfig() {
  if (!existsSync(CONFIG_FILE)) {
    throw new Error(
      'config.json not found. Please create it with { "latest": <major>, "lts": <major> }',
    );
  }

  const config = JSON.parse(readFileSync(CONFIG_FILE, "utf-8"));

  if (typeof config.latest !== "number" || typeof config.lts !== "number") {
    throw new Error(
      'config.json must have "latest" and "lts" as numbers (major versions)',
    );
  }

  return config;
}

async function fetchReleases() {
  console.log("Fetching Forgejo releases from Codeberg...");

  const response = await fetch(`${FORGEJO_RELEASES_API}?limit=100`);
  if (!response.ok) {
    throw new Error(`Failed to fetch releases: ${response.status}`);
  }

  return response.json();
}

function parseVersion(tag) {
  // Match semantic version tags like "v1.22.0", "v10.0.0", "v9.0.3"
  const match = tag.match(/^v?(\d+)\.(\d+)\.(\d+)$/);
  if (!match) return null;

  return {
    major: parseInt(match[1], 10),
    minor: parseInt(match[2], 10),
    patch: parseInt(match[3], 10),
    tag: `${match[1]}.${match[2]}.${match[3]}`, // Normalized without 'v'
  };
}

function compareVersions(a, b) {
  if (a.major !== b.major) return b.major - a.major;
  if (a.minor !== b.minor) return b.minor - a.minor;
  return b.patch - a.patch;
}

function findLatestForMajor(releases, majorVersion) {
  // Filter out prereleases and drafts, then find versions matching the major
  const stableReleases = releases.filter((r) => !r.prerelease && !r.draft);

  const versions = stableReleases
    .map((r) => parseVersion(r.tag_name))
    .filter((v) => v !== null && v.major === majorVersion)
    .sort(compareVersions);

  return versions.length > 0 ? versions[0] : null;
}

function loadTrackedVersion(file) {
  if (!existsSync(file)) {
    return null;
  }
  return readFileSync(file, "utf-8").trim() || null;
}

async function main() {
  const args = process.argv.slice(2);
  const outputGithub = args.includes("--github-output");

  try {
    // Load configuration
    const config = loadConfig();
    console.log(`Config: latest=v${config.latest}.x, lts=v${config.lts}.x`);

    // Fetch releases
    const releases = await fetchReleases();
    console.log(`Found ${releases.length} releases`);

    // Find latest patch version for each configured major
    const latestVersion = findLatestForMajor(releases, config.latest);
    const ltsVersion = findLatestForMajor(releases, config.lts);

    if (!latestVersion) {
      throw new Error(`No releases found for major version ${config.latest}`);
    }
    if (!ltsVersion) {
      throw new Error(`No releases found for major version ${config.lts}`);
    }

    console.log(`\nLatest (v${config.latest}.x): ${latestVersion.tag}`);
    console.log(`LTS (v${config.lts}.x): ${ltsVersion.tag}`);

    // Load tracked versions and compare
    const trackedLatest = loadTrackedVersion(LATEST_VERSION_FILE);
    const trackedLts = loadTrackedVersion(LTS_VERSION_FILE);

    console.log(`\nCurrently tracked:`);
    console.log(`  Latest: ${trackedLatest || "none"}`);
    console.log(`  LTS: ${trackedLts || "none"}`);

    const needsUpdate = {
      latest: trackedLatest !== latestVersion.tag,
      lts: trackedLts !== ltsVersion.tag,
    };

    console.log(`\nNeeds update:`);
    console.log(`  Latest: ${needsUpdate.latest ? "YES" : "no"}`);
    console.log(`  LTS: ${needsUpdate.lts ? "YES" : "no"}`);

    // Output for GitHub Actions
    if (outputGithub) {
      const githubOutput = process.env.GITHUB_OUTPUT;
      if (githubOutput) {
        const outputs = [
          `latest_version=${latestVersion.tag}`,
          `lts_version=${ltsVersion.tag}`,
          `latest_major=${config.latest}`,
          `lts_major=${config.lts}`,
          `latest_needs_update=${needsUpdate.latest}`,
          `lts_needs_update=${needsUpdate.lts}`,
          `any_needs_update=${needsUpdate.latest || needsUpdate.lts}`,
        ];

        appendFileSync(githubOutput, outputs.join("\n") + "\n");
      }
    }

    // Return results as JSON for scripting
    const result = {
      config: {
        latestMajor: config.latest,
        ltsMajor: config.lts,
      },
      latest: {
        version: latestVersion.tag,
        needsUpdate: needsUpdate.latest,
      },
      lts: {
        version: ltsVersion.tag,
        needsUpdate: needsUpdate.lts,
      },
    };

    console.log("\n" + JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
