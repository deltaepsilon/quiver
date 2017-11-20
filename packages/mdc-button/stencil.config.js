exports.config = {
  namespace: 'mdc-button',
  generateDistribution: true,
  bundles: [{ components: ['mdc-button'] }],
  copy: [{ src: 'assets' }],
  sassConfig: {
    includePaths: ['node_modules'],
  },
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
