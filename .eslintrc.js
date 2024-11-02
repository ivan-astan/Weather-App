module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        jsx: true,
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off', // For React 17 and later
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
