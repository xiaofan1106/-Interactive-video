module.exports = {
  lintOnSave: false,
  css: {
    extract: {
      filename: 'css/[name].[hash:6].css?max_age=7776000',
      chunkFilename: 'css/[name].[hash:6].css?max_age=7776000',
    },
  },
};
