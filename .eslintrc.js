const prettierSettings = require('./.prettierrc.js');

module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json'],
   },
   plugins: ['@typescript-eslint', 'prettier'],
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'prettier',
   ],
   rules: {
      'eqeqeq': 'error',
      'prettier/prettier': [
         'error',
         {
            ...prettierSettings,
         },
      ],
   },
};
