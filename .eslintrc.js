module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint",
        sourceType: 'module'
    },
    env: {
        "es6": true,
        "browser": true
    },
    extends: [
        'standard',
        'plugin:vue/recommended'
    ],
    rules: {
        "no-console": "off",
        "linebreak-style": "off",
        'eol-last': 'off',
        'indent': 'off',
        'vue/html-indent': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    }
};