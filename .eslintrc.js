module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential", 
    "eslint:recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
  },  
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
