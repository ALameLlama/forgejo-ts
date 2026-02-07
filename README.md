# @llamaduck/forgejo-ts

Auto-generated, fully typed TypeScript client for the [Forgejo](https://forgejo.org/) API.

This package is automatically updated daily to track the latest Forgejo releases.

## Installation

```bash
npm install @llamaduck/forgejo-ts
# or
yarn add @llamaduck/forgejo-ts
# or
pnpm add @llamaduck/forgejo-ts
```

## Usage

### Basic Usage

Create a client and start making API calls:

```typescript
import { createClient, createConfig, getVersion, repoSearch } from '@llamaduck/forgejo-ts';

// Create a client
const client = createClient(createConfig({
  baseUrl: 'https://codeberg.org/api/v1',
  headers: { Authorization: 'token your-api-token' }
}));

// Make API calls - pass the client in options
const version = await getVersion({ client });
console.log('Server version:', version.data?.version);

const repos = await repoSearch({ query: { q: 'typescript', limit: 10 } }, { client });
console.log('Found repos:', repos.data);
```

### Multiple Clients

You can create multiple independent client instances:

```typescript
import { createClient, createConfig, repoSearch } from '@llamaduck/forgejo-ts';

const clientA = createClient(createConfig({
  baseUrl: 'https://codeberg.org/api/v1',
  headers: { Authorization: 'token token-a' }
}));

const clientB = createClient(createConfig({
  baseUrl: 'https://gitea.com/api/v1',
  headers: { Authorization: 'token token-b' }
}));

// Use different clients for different requests
const reposA = await repoSearch({ query: { q: 'test' } }, { client: clientA });
const reposB = await repoSearch({ query: { q: 'test' } }, { client: clientB });
```

### Authentication

```typescript
import { createClient, createConfig } from '@llamaduck/forgejo-ts';

// Token authentication (recommended)
const client = createClient(createConfig({
  baseUrl: 'https://codeberg.org/api/v1',
  headers: { Authorization: 'token your-personal-access-token' }
}));

// Basic authentication
const auth = btoa('username:password');
const client = createClient(createConfig({
  baseUrl: 'https://codeberg.org/api/v1',
  headers: { Authorization: `Basic ${auth}` }
}));
```

## API Reference

All API functions are exported directly from the package:

```typescript
import {
  // Repositories
  repoSearch,
  repoGet,
  userListRepos,
  
  // Users
  userGetCurrent,
  userGet,
  
  // Issues
  issueSearch,
  issueCreateIssue,
  
  // Organizations
  orgGet,
  
  // And many more...
} from '@llamaduck/forgejo-ts';
```

Each function accepts:
1. **Data/params** - The request data (path params, query params, body)
2. **Options** (optional) - Request options including the `client` instance

Example:
```typescript
// Search repositories
const repos = await repoSearch(
  { query: { q: 'typescript', limit: 10 } },
  { client }
);

// Get a specific repository
const repo = await repoGet(
  { path: { owner: 'forgejo', repo: 'forgejo' } },
  { client }
);

// Create an issue
const issue = await issueCreateIssue(
  { path: { owner: 'user', repo: 'repo' } },
  { body: { title: 'Bug report', body: 'Description' } },
  { client }
);
```

### Error Handling

```typescript
import { repoGet } from '@llamaduck/forgejo-ts';

try {
  const repo = await repoGet(
    { path: { owner: 'user', repo: 'nonexistent' } },
    { client }
  );
} catch (error) {
  if (error.status === 404) {
    console.error('Repository not found');
  } else {
    console.error('API Error:', error);
  }
}
```

## Version Information

```typescript
import { FORGEJO_API_VERSION, GENERATED_AT } from '@llamaduck/forgejo-ts';

console.log('API Version:', FORGEJO_API_VERSION);
console.log('Generated:', GENERATED_AT);
```

## Automatic Updates

This package is automatically updated via GitHub Actions:

- **Daily checks**: Runs every day at 6:00 AM UTC to check for new Forgejo versions
- **Automatic generation**: When a new version is detected, the client is regenerated from the Forgejo API spec
- **Automatic publishing**: New versions are automatically published to npm

The package version matches the Forgejo version it was generated from.

## Manual Generation

To generate the client locally:

```bash
# Clone the repository
git clone https://github.com/your-username/forgejo-ts.git
cd forgejo-ts

# Install dependencies
npm install

# Generate client for a specific Forgejo version
FORGEJO_VERSION=14.0.2 npm run generate

# Build
npm run build
```

## Configuration

The `config.json` file specifies which major versions to track:

```json
{
  "latest": 14,
  "lts": 11
}
```

When Forgejo releases a new major version (e.g., v15), update this file to change the tracked versions.

## Contributing

Contributions are welcome! Please note that the `src/generated/` directory is auto-generated and should not be manually edited.

## License

MIT
