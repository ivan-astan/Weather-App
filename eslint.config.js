import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import ESLint from 'eslint';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

export default {
    ignores: ['dist'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
    },
    plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        'react': pluginReact,
        '@typescript-eslint': typescriptEslint,
        'prettier': eslintPluginPrettier,
    },
    rules: {
        ...typescriptEslint.configs['recommended'].rules,
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/prop-types': 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-console': 'warn',
        ...js.configs.recommended.rules,
    },
};