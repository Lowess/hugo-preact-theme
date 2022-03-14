module.exports = {
    env: {
        es6: true,
        browser: true,
        jasmine: true,
        node: true,
        jest: true,
    },
    settings: {
        react: {
            pragma: 'h',
            version: 'detect',
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'airbnb',
    ],
    rules: {
        // Indent with 4 spaces
        indent: ['error', 4],
        // Indent JSX with 4 spaces
        'react/jsx-indent': ['error', 4],
        // Indent props with 4 spaces
        'react/jsx-indent-props': ['error', 4],
        'no-console': 'warn',
        'no-debugger': 'off',
        'no-else-return': 'error',
        'no-self-compare': 'error',
        'no-void': 'error',
        'no-var': 'error',
        'no-lonely-if': 'error',
        'prefer-const': 'error',
        'import/extensions': 0,
        // Trust typescript with imports.
        'import/no-unresolved': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'jsx-a11y/label-has-associated-control': 0,
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            { accessibility: 'no-public' },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react/no-unknown-property': [
            'error',
            { ignore: ['class'] },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
};
