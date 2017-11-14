exports.config = {
  bundles: [
    { components: ['mdc-button'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  sassConfig: {
    includePaths: ['node_modules']
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
