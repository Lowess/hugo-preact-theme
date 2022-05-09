/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { PluginOption } from 'vite';
import { sync as getFilesSync } from 'fast-glob';
import { parse } from 'toml'
import { readFileSync } from 'fs';

/**
 * Linting important hugo config.
 */
type LintHugoConfigProperties = {
    defaultContentLanguage?: string
}

function getHugoConfig(appDir: string): LintHugoConfigProperties {
    const tomlStr = readFileSync(resolve(appDir, 'config.toml'), 'utf-8');

    return parse(tomlStr);
}

function getHtmlPages(pagesDir: string, ignore: string[]) {
    const path = resolve(pagesDir, '**', '*.html')
    const pages = getFilesSync(path, {
        ignore
    })
    const inputs = {};

    pages.forEach((input) => {
        const key = input.replace(pagesDir, '').substring(1);
        inputs[key] = input;
    })

    return inputs;
}

type Options = {
    /**
     * Output path to hugo build directory.
     */
    hugoOutDir: string

    /**
     * Root directory of an application.
     */
    appDir: string
}

/**
 * Pre-configures vite to make hugo work out of the box.
 */
function hugoPreact({ hugoOutDir, appDir }: Options): PluginOption {
    const hugoConfig = getHugoConfig(appDir);

    const ignoreBuildPaths = [];

    // Ignore default content language as hugo build it into out dir instead of language dir.
    if (hugoConfig.defaultContentLanguage) {
        ignoreBuildPaths.push(resolve(hugoOutDir, hugoConfig.defaultContentLanguage));
    }

    return {
        name: 'hugo-preact',
        config: () => ({
            root: hugoOutDir,
            resolve: {
                // Resolve hugo specific aliases.
                alias: {
                    // Resolving path in imports.
                    js: resolve(appDir, 'assets', 'js'),
                    '/assets': resolve(appDir, 'assets'),
                    '/plugins': resolve(hugoOutDir, 'plugins')
                }
            },
            build: {
                // Same dir as hugo
                outDir: hugoOutDir,
                // Vite will build app on top of the files that hugo built (excluding assets)
                emptyOutDir: false,
                rollupOptions: {
                    input: getHtmlPages(hugoOutDir, ignoreBuildPaths)
                }
            }
        })
    };
}

export default hugoPreact;
