import path from 'path';

import buildWebpackConfig from './config/build/buildWebpackConfig';
import {BuildPaths} from './config/build/types/config';

const paths: BuildPaths = {
  entry: path.join(__dirname, 'src/index.tsx'),
  output: path.join(__dirname, 'build'),
  template: path.join(__dirname, 'public/index.html'),
  analyzer: path.join(__dirname, 'dist/bundle-analysis.html'),
  tsconfigPath: path.join(__dirname, 'tsconfig.json'),
};

const mode = 'development';
const isDev = mode === 'development';
const config = buildWebpackConfig({
  paths,
  isDev,
});

export default config;
