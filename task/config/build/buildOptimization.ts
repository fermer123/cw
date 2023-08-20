function buildOptimization() {
  return {
    chunkIds: 'named' as const,
    usedExports: true,
    minimize: true,
    splitChunks: {
      chunks: 'all' as const,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all' as const,
          enforce: true,
        },
      },
    },
  };
}
export default buildOptimization;
