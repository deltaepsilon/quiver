exports.config = {
  namespace: 'firebase-authentication',
  generateDistribution: true,
  bundles: [{ components: ['firebase-authentication'] }],
  collections: [{ name: '@quiver/mdc-button' }, { name: '@quiver/mdc-material' }, { name: '@quiver/mdc-text-field' }],
  copy: [
    { src: 'assets' }
  ],
  sassConfig: {
    includePaths: ['node_modules'],
  },
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
