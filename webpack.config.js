var path=require('path');
module.exports={
  context: __dirname + path.sep + "src",
  entry: {
    desert:"."+path.sep+"index-desert"
  },
  output:{
    filename:"[name].js",
    path:__dirname+path.sep+"build"
  },
  devtool:"source-map",
  mode:"production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
      },
      {
        test: /\.(frag|vert)$/,
        loader: 'webpack-glsl-loader'
      }
    ],
  }
}
