module.exports = {
    root: true,
    env: {
        "browser": true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
        project: ['./tsconfig.json'],
        sourceType: "module",
        extraFileExtensions: ['.vue'],
        ecmaVersion: 2020
    },
    ignorePatterns: [
        ".eslintrc.js",
        "webpack.config.js",
    ],
    plugins: [
        'eslint-plugin-vue'
    ],
    extends: [
    ],
    rules: {
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        "no-console": "warn",
    }
}
