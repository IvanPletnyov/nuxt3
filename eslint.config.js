import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginNuxt from 'eslint-plugin-nuxt'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
    {
        ignores: ['.nuxt/**/*', 'node_modules/**/*', 'dist/**/*', 'app.vue']
    },
    {
        files: ['**/*.{ts,js,vue}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json'
            }
        },
        plugins: {
            vue: eslintPluginVue,
            nuxt: eslintPluginNuxt,
            '@typescript-eslint': tseslint
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'nuxt/no-cjs-in-config': 'off'
        },
    }
]