module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
