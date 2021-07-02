module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
        files: ["*.ts", "*.tsx"],
    },
    plugins: ["react", "@typescript-eslint", "react-hooks", "react-native"],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        // Due to conflict with Prettier (and I like Prettier more)
        indent: "off",
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-raw-text": "off",
        "react-native/no-single-element-style-arrays": 2,
        "react/display-name": "off",
        "react/prop-types": 0,
        "react/boolean-prop-naming": ["error"],
        "@typescript-eslint/restrict-plus-operands": "off",
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/jsx-boolean-value": ["error", "never"],
        "@typescript-eslint/no-empty-function": "off",
    },
};
