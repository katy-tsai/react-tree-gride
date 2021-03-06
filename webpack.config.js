var path = require('path');
module.exports = {
  entry:{
    index:'./public/js/index',
    form:'./public/js/form',
    fileSystem:'./public/js/fileSystem'
  },
  output:{
    path:path.join(__dirname,'public/build'),
    filename:'bundle-[name].js',
    publicPath:'/build/'
  },
  resolve:{
    extensions: ['', '.jsx', '.less', '.js', '.json']
  },
  module:{
  loaders:[
    {test:/\.css$/,loader:'style-loader!css-loader'},
    {test: /\.less$/,loaders: ['style', 'css', 'less']},
    { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
    {test:/\.js[x]?$/,exclude:/node_modules/,loader:'babel-loader',
    query: {
          optional: ['runtime']
        }}
  ]
}
}
