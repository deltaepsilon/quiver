exports.config = {
  bundles: [{ components: ['mdl-material'] }, { components: ['firebase-authentication'] }],
  collections: [{ name: '@stencil/router' }],
  sassConfig: {
    includePaths: ['node_modules'],
  },
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
