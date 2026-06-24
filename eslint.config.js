import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist', 'storybook-static', 'coverage', 'node_modules'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: { ...globals.browser },
    },
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{test,spec}.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  ...storybook.configs['flat/recommended'],
  prettier
);
