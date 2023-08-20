import {RuleSetRule} from 'webpack';

function buildLoaders(): RuleSetRule[] {
  // const imageLodaer = {
  //   test: /\.(png|jpg|jpeg|gif)$/i,
  //   type: 'asset/resource',
  //   generator: {
  //     filename: 'assets/image/[name][ext]',
  //   },
  // };

  // const fontsLoader = {
  //   test: /\.(woff2?|eot|ttf|otf)$/i,
  //   type: 'asset/resource',
  //   generator: {
  //     filename: 'assets/fonts/[name][ext]',
  //   },
  // };

  // const cssLoader = {
  //   test: /\.s[ac]ss$/i,
  //   use: [
  //     options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  //     'css-loader',
  //     'sass-loader',
  //   ],
  // };

  const typescriptLoader = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
    },
    exclude: /node_modules/,
  };

  return [typescriptLoader];
}

export default buildLoaders;
