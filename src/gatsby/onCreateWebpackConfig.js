import path from 'path';

/**
 * When called, allows modifying the default webpack config using webpack-merge.
 * API docs: https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
 */
const onCreateWebpackConfig = ({ actions, stage }) => {
  // If production JavaScript build, turn off source maps, otherwise use defaults
  const devtool = stage === 'develop'
    ? 'cheap-module-source-map'
    : stage === 'build-javascript'
      ? false
      : 'source-map';
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../../src'), 'node_modules'],
    },
    devtool,
  });
};

export default onCreateWebpackConfig;
