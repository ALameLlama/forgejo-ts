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

### Basic Configuration

```typescript
import { configure, RepositoryService, UserService } from '@llamaduck/forgejo-ts';

// Configure the client
configure({
  baseUrl: 'https://your-forgejo-instance.com/api/v1',
  token: 'your-api-token', // Optional: for authenticated requests
});

// Now use any service
const repos = await RepositoryService.repoSearch({ q: 'hello' });
console.log(repos);
```

### Authentication Options

```typescript
import { configure } from '@llamaduck/forgejo-ts';

// Token authentication (recommended)
configure({
  baseUrl: 'https://your-forgejo-instance.com/api/v1',
  token: 'your-personal-access-token',
});

// Basic authentication
configure({
  baseUrl: 'https://your-forgejo-instance.com/api/v1',
  username: 'your-username',
  password: 'your-password',
});
```

### Direct OpenAPI Configuration

For more control, you can configure the OpenAPI object directly:

```typescript
import { OpenAPI } from '@llamaduck/forgejo-ts';

OpenAPI.BASE = 'https://your-forgejo-instance.com/api/v1';
OpenAPI.TOKEN = 'your-api-token';

// Or use a function for dynamic token retrieval
OpenAPI.TOKEN = async () => {
  return getTokenFromSomewhere();
};
```

### Using Services

All API endpoints are organized into services:

```typescript
import {
  RepositoryService,
  UserService,
  OrganizationService,
  IssueService,
  AdminService,
  // ... and more
} from '@llamaduck/forgejo-ts';

// Get current user
const user = await UserService.userGetCurrent();

// List repositories
const repos = await RepositoryService.repoSearch({
  q: 'typescript',
  limit: 10,
});

// Create an issue
const issue = await IssueService.issueCreateIssue({
  owner: 'username',
  repo: 'repo-name',
  body: {
    title: 'Bug report',
    body: 'Description of the bug',
  },
});
```

### Error Handling

```typescript
import { ApiError, RepositoryService } from '@llamaduck/forgejo-ts';

try {
  const repo = await RepositoryService.repoGet({
    owner: 'user',
    repo: 'nonexistent',
  });
} catch (error) {
  if (error instanceof ApiError) {
    console.error('API Error:', error.status, error.message);
    console.error('Response body:', error.body);
  }
}
```

### Canceling Requests

```typescript
import { RepositoryService, CancelError } from '@llamaduck/forgejo-ts';

const request = RepositoryService.repoSearch({ q: 'test' });

// Cancel the request
request.cancel();

try {
  await request;
} catch (error) {
  if (error instanceof CancelError) {
    console.log('Request was canceled');
  }
}
```

## Available Services

- `ActivitypubService` - ActivityPub federation endpoints
- `AdminService` - Administration endpoints (requires admin access)
- `IssueService` - Issues and pull requests
- `MiscellaneousService` - Miscellaneous endpoints (version, settings, etc.)
- `NotificationService` - User notifications
- `OrganizationService` - Organizations and teams
- `PackageService` - Package registry
- `RepositoryService` - Repositories, branches, commits, files
- `SettingsService` - Instance settings
- `UserService` - Users, followers, tokens, keys

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

The script fetches the Swagger spec directly from Codeberg. 

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
