{
  "env": {
      "es6": true
  },
  "extends": [
      "plugin:react/recommended",
      "airbnb",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly",
      "__DEV__": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint",
      "react-hooks",
      "prettier"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "@typescript-eslint/ban-types": "off",
    "react/jsx-props-no-spreading": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
}
