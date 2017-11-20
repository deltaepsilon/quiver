exports.config = {
  namespace: 'mdc-text-field',
  generateDistribution: true,
  bundles: [
    { components: ['mdc-text-field'] }
  ],
  sassConfig: {
    includePaths: ['node_modules']
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
