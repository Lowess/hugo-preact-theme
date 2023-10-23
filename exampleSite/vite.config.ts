/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';
import hugoPreact from './vite/hugo-preact';

const appDir = __dirname;
const hugoOutDir = resolve(appDir, 'public');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), hugoPreact({ appDir, hugoOutDir })],
});
