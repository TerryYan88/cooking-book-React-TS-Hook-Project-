const {override,fixBabelImports, addWebpackAlias,addWebpackResolve} = require('customize-cra');
const path = require('path');
module.exports = override(
    //ui modle config 按需加载
    fixBabelImports('imports',{
        libraryName: 'antd-mobile',
        style:'css',
    }),
    //path config
    addWebpackAlias({
        '@':path.resolve(__dirname,"./src"),
        "@components":path.resolve(__dirname,"./src/components"),
        '@utils':path.resolve(__dirname,"./src/utils"),
        '@pages':path.resolve(__dirname,"./src/pages")
    }),
    //config resolve
    addWebpackResolve({
        extensions:[".tsx",".ts",".js"],
    })
)