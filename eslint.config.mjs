import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    // ✅ إضافة تعريف بيئة Cypress هنا
    files: ['cypress/**/*.cy.js', '**/*.test.js'],  // إضافة ملفات الاختبار الخاصة بك
    languageOptions: {
      globals: {
        ...globals.browser,
        cy: 'readonly',    // إضافة cy كمتغير ثابت (readonly)
        ...globals.mocha,  // تم إضافة Mocha
        ...globals.cypress, // تم إضافة Cypress
      },
    },
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.parcel-cache/',
      '.env',
      '.DS_Store',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'Thumbs.db',
    ],
  },
]);
