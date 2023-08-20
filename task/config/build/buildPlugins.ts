import HtmlWebpackPlugin from 'html-webpack-plugin';
import {WebpackPluginInstance} from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import {BuildOption} from './types/config';

function buildPlugins({paths}: BuildOption): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.template,
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
      analyzerMode: 'server',
      reportFilename: paths.analyzer,
    }),
  ];
}

export default buildPlugins;
