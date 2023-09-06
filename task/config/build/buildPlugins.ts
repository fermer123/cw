import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {WebpackPluginInstance} from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import {BuildOption} from './types/config';

function buildPlugins({paths, isDev}: BuildOption): WebpackPluginInstance[] {
  return [
    isDev
      ? new HtmlWebpackPlugin({
          template: paths.template,
        })
      : undefined,
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
      analyzerMode: 'server',
      reportFilename: paths.analyzer,
    }),
    new webpack.DefinePlugin({
      isDev: JSON.stringify(isDev),
      baseURL: JSON.stringify('http://localhost:3000/'),
    }),
    isDev ? new webpack.HotModuleReplacementPlugin() : undefined,
  ];
}

export default buildPlugins;
