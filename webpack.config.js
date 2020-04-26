const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
//vue-loader@^12以上伴生的插件，要加载进来才能看到效果
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
        {test:/\.css$/,use:['style-loader','css-loader']},
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
        {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7632&name=[hash:4]-[name].[ext]'},
        {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
        {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
        {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    // resolve:{
    //     alias:{
    //         "vue$":"vue/dist/vue.js"
    //     }
    // }
}