module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-use-v-if-with-v-for': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-side-effects-in-computed-properties': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
