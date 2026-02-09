import { defineConfig } from 'tsup';

export default defineConfig([
  // Main entry point
  {
    entry: ['src/index.ts'],
    outDir: 'dist',
    format: ['cjs', 'esm'],
    dts: {
      compilerOptions: {
        skipLibCheck: true,
      },
    },
    sourcemap: true,
    clean: true,
    splitting: false,
    treeshake: true,
    target: 'es2022',
  },
  // Client subpath entry point
  {
    entry: ['src/client/index.ts'],
    outDir: 'dist/client',
    format: ['cjs', 'esm'],
    dts: {
      compilerOptions: {
        skipLibCheck: true,
      },
    },
    sourcemap: true,
    splitting: false,
    treeshake: true,
    target: 'es2022',
  },
]);
