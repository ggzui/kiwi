import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    ignores: ['**/coverage', '**/public', '**/assets'],
  },
  {
    rules: {
      'react-refresh/only-export-components': 'off',
      'react/no-unstable-context-value': 'off',
    },
  },
)
