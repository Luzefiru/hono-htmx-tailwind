import path from 'path';
import pages from '@hono/vite-cloudflare-pages';
import devServer from '@hono/vite-dev-server';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const globalConfig = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };

  if (mode === 'bundle') {
    return {
      ...globalConfig,
      build: {
        rollupOptions: {
          input: ['./src/bundle.ts', './src/style.css'],
          output: {
            entryFileNames: 'static/bundle.js',
            assetFileNames: 'static/[name].[ext]',
          },
        },
      },
    };
  } else {
    return {
      ...globalConfig,
      plugins: [
        pages(),
        devServer({
          entry: 'src/index.tsx',
        }),
      ],
    };
  }
});
