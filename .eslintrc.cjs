module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // Disable the rule that requires React to be in scope
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};

// module.exports = {
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   settings: {
//     react: {
//       version: "detect",
//     },
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:prettier/recommended",
//   ],
//   rules: {
//     "prettier/prettier": "error",
//     "react/prop-types": "off",
//     "@typescript-eslint/explicit-module-boundary-types": "off",
//   },
// };
//
// // module.exports = {
// //   root: true,
// //   env: { browser: true, es2020: true },
// //   extends: [
// //     'eslint:recommended',
// //     'plugin:@typescript-eslint/recommended',
// //     'plugin:react-hooks/recommended',
// //   ],
// //   ignorePatterns: ['dist', '.eslintrc.cjs'],
// //   parser: '@typescript-eslint/parser',
// //   plugins: ['react-refresh'],
// //   rules: {
// //     'react-refresh/only-export-components': [
// //       'warn',
// //       { allowConstantExport: true },
// //     ],
// //   },
// // }
