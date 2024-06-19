// eslint.config.js
export default [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      plugins: {
        react: require('eslint-plugin-react'),
        'react-hooks': require('eslint-plugin-react-hooks'),
        import: require('eslint-plugin-import'),
        node: require('eslint-plugin-node'),
        promise: require('eslint-plugin-promise'),
        standard: require('eslint-plugin-standard'),
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'standard',
      ],
      rules: {
        // Add your custom rules here
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ];
  