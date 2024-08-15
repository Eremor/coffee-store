import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic
  ],
  files: ['**/*.{ts,tsx}'],
  ignores: [
    'dist',
    '**/*.test.{ts,tsx}',
    '**/*.d.ts'
  ],
  languageOptions: {
    ecmaVersion: 2023,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    '@stylistic': stylistic
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...stylistic.configs['recommended-flat'].rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': [
      'error',
      "always",
      { 'omitLastInOneLineBlock': true }
    ],
    '@stylistic/max-len': [
      'error',
      {
        'ignoreComments': true,
        'ignoreUrls': true,
        'code': 100,
        "tabWidth": 2
      }
    ],
    '@stylistic/jsx-max-props-per-line': [
      'warn',
      { 'maximum': 1 }
    ],
    '@stylistic/jsx-quotes': 'error'
  },
})
