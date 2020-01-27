module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
  ],
  env: { browser: true, node: true, es6: true },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { 'code': 80, 'tabWidth': 2 }],
    'quotes': ['error', 'single'],
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    'vue/max-attributes-per-line': ["error", {
      'singleline': 2,
      'multiline': {
         'max': 1,
         'allowFirstLine': false
       }
    }],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
