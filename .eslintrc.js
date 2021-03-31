module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: ['babel-eslint', '@typescript-eslint/parser'],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    strict: [2, 'never'],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'max-len': 'off',
  },
  ecmaFeatures: {
    jsx: true,
    modules: true,
  },
};
