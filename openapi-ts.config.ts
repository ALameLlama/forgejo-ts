import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "swagger.json",
  output: {
    path: "src",
  },
  plugins: [
    "@hey-api/client-axios",
    {
      name: "@hey-api/sdk",
      exportFrom: {
        client: true,
      },
    },
    "@hey-api/typescript",
  ],
});
