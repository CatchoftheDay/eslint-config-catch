module.exports = {
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'consistent-return': 'warn',
    'curly': ['error', 'all'],
    'default-case': 'warn',
    'import/prefer-default-export': 'warn',
    'max-len': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-prototype-builtins': 'off',
    'prefer-destructuring': 'warn',
    'quote-props': ['warn', 'consistent-as-needed'],
    'radix': ['error', 'as-needed'],
  },
};
