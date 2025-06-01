import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginNuxt from 'eslint-plugin-nuxt'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
    {
        ignores: ['.nuxt/**/*', 'node_modules/**/*', 'dist/**/*', 'app.vue']
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsParser, // Vue parser использует TS как под-парсер
                ecmaVersion: 'latest',
                sourceType: 'module'
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
        }
    },
    {
        files: ['**/*.{ts,js}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint
        },
        rules: {}
    }
]