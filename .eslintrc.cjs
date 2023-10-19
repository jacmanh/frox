module.exports = {
  root: true,
  env: {
    browser: true,
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
  plugins: ['react-refresh', 'import', 'prettier'],
  rules: {
    "import/no-internal-modules": [ "error", {
      "forbid": ["@frox/**/*"]
    }],
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
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
