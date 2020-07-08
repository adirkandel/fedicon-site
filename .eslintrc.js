module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
    ],
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always', { omitLastInOneLineBlock: true }],
        quotes: ['error', 'single'],
        'prefer-template': 'error',
        'no-console': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'vue/html-indent': ['warn', 4],
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
    },
};
