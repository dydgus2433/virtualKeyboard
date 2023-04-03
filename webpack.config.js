const path = require("path");
const TerserWebpackPlugin = require('terser-webpack-plugin')
const HtmlWebpckPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin=  require('css-minimizer-webpack-plugin')
module.exports = {
    entry : "./src/js/index.js",
    output : {
        filename : "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean  : true
    },
    devtool : "source-map",
    mode : "development",
    devServer:{
        host:"localhost",
        port:8080,
        open:true,
        watchFiles: 'index.html'
    },
    plugins: [
        new HtmlWebpckPlugin({
            title:"keyboard",
            template:"./index.html",
            inject:"body",
            favicon:"./favicon.ico"
        }),
        new MiniCssPlugin({filename:"style.css"})
    ],
    module : {
        rules:[
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    optimization : {
        minimizer : [
           new  TerserWebpackPlugin(),
           new CssMinimizerPlugin()
         ]
    }

}