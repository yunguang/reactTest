/**
 * Created by zhouyg on 2017/3/21.
 */
module.exports={
    entry:'./src/index.js',
    output:{
        //把打包编译后的文件保存在哪个目录下
        path:'./build',
        //保存的文件名是什么
        filename:'bundle.js'
    }
};