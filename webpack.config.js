/*
* @Author: Issac
* @Date:   2017-08-11 09:25:40
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-11 14:38:34
*/

'use strict';
var webpack           = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
//环境变量的配置,dev/online
var WEBPACK_ENV       = process.env.WEBPACK_ENV || 'dev';

//获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name){
    return {
           template : './src/view/'+name+'.html',
           filename : 'view/'+name+'.html',
           inject   : true,
           hash     : true,
           chunks   : ['common' , name]
    };
};
//webpack config
var config  = {
    entry     : {
        'common' : './src/page/common/index.js',
        'index'  : './src/page/index/index.js',
    },
    output    : {
        path       : __dirname+'/dist',
        publicPath : '/dist',
        filename   : 'js/[name].js'
    },
    externals : {
        'jquery' : 'window.jQuery'
    },
    module    : {
        rules : [
         {
            test : /\.css$/,
            use  : ExtractTextPlugin.extract({
                fallback : "style-loader",
                use      : "css-loader"
            })
         },
         {
            test : /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
            use  : [
                {
                    loader  : 'url-loader',
                    options : {
                        limit : 100,
                        name  : 'resource/[name].[ext]'
                    }
                }
            ]
         },
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                    loader: 'babel-loader',
                    options: {
                        presets : ['react','es2015'],
                        plugins : ['react-html-attrs']
                  }
          }   
        }
       ]
    },
    plugins   : [
        //独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name     : 'common',
            filename : 'js/base.js'
        }),
        //把css单独打包到文件里
        new ExtractTextPlugin({
            filename  : 'css/[name].css',
            allChunks : true
        }),
        //html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index')),  
    ]
};
if('dev'=== WEBPACK_ENV){
    var arr = [];
    arr.push(config.entry.common,'webpack-dev-server/client?http://localhost:8080/');
    config.entry.common = arr;
}
module.exports = config;