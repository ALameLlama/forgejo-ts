#!/usr/bin/env bash

# Manual release script for publishing client revisions
# Usage:
#   ./scripts/manual-release.sh v14 14.0.2-1 latest
#   ./scripts/manual-release.sh v11 11.0.10-1 lts

set -e

BRANCH=$1
VERSION=$2
NPM_TAG=$3

if [ -z "$BRANCH" ] || [ -z "$VERSION" ] || [ -z "$NPM_TAG" ]; then
	echo "Usage: $0 <branch> <version> <npm-tag>"
	echo "Example: $0 v14 14.0.2-1 latest"
	echo "Example: $0 v11 11.0.10-1 lts"
	exit 1
fi

# Extract Forgejo version (everything before the dash)
FORGEJO_VERSION="${VERSION%-*}"

echo "=== Manual Release ==="
echo "Branch: $BRANCH"
echo "Version: $VERSION"
echo "Forgejo Version: $FORGEJO_VERSION"
echo "NPM Tag: $NPM_TAG"
echo ""

# Start from master (like the CI workflow)
echo ">>> Checking out master..."
git checkout master
git pull origin master

# Setup version branch (matching CI workflow logic)
echo ">>> Setting up $BRANCH..."
if git ls-remote --heads origin "$BRANCH" | grep -q "$BRANCH"; then
	echo "Branch $BRANCH exists, resetting to master..."
	git checkout -B "$BRANCH" master
else
	echo "Branch $BRANCH does not exist, creating from master..."
	git checkout -b "$BRANCH"
fi

# Install dependencies
echo ">>> Installing dependencies..."
npm ci

# Generate client
echo ">>> Generating client for Forgejo $FORGEJO_VERSION..."
FORGEJO_VERSION="$FORGEJO_VERSION" npm run generate

# Build
echo ">>> Building..."
npm run build

# Set version
echo ">>> Setting version to $VERSION..."
npm version "$VERSION" --no-git-tag-version

# Commit changes
echo ">>> Committing changes..."
git add -A
git commit -m "chore: client revision $VERSION"

# Create and push tag
echo ">>> Creating and pushing tag v$VERSION..."
git tag "v$VERSION"
git push origin "$BRANCH" --force
git push origin "v$VERSION"

# Publish to npm
echo ">>> Publishing to npm with tag $NPM_TAG..."
npm publish --tag "$NPM_TAG"

# Create GitHub release
echo ">>> Creating GitHub release..."
RELEASE_TYPE="Latest"
if [ "$NPM_TAG" = "lts" ]; then
	RELEASE_TYPE="LTS"
fi

gh release create "v$VERSION" --title "v$VERSION" --notes "## Forgejo TypeScript Client v$VERSION

**Release type:** $RELEASE_TYPE
**Branch:** \`$BRANCH\`
**Client revision:** updated code generation

\`\`\`bash
npm install @llamaduck/forgejo-ts@$VERSION
\`\`\`"

echo ""
echo "=== Release complete! ==="
echo "Published @llamaduck/forgejo-ts@$VERSION with tag $NPM_TAG"
