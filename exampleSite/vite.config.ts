/* eslint-disable import/no-extraneous-dependencies */
import { PluginOption, defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';
import hugoPreact from './vite/hugo-preact';

const appDir = __dirname;
const hugoOutDir = resolve(appDir, 'public');

// This is workaround to replace import.meta.url with the file url path
// The path contains parameter mount_at which can be used to mount the component
// This needs some more testing to make sure it doesn't break anything
const replaceImportMetaUrlPlugin = {
    name: 'replace-import-meta-url',
    transform(code, id) {
        const url = `${id.startsWith('/')}` ? `file:${id}` : `file:./${id}`;
        return code.replace(/import\.meta\.url/g, `'${url}'`);
    }
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        preact(),
        hugoPreact({ appDir, hugoOutDir }),
        replaceImportMetaUrlPlugin
    ]
});
