exports.config = {
  namespace: 'mdc-material',
  generateDistribution: true,
  bundles: [
    { components: ['mdc-material'] }
  ],
  sassConfig: {
    includePaths: ['node_modules']
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
