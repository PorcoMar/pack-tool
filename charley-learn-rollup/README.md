# Rollup 的使用
## 特性
1. 下一代 JavaScript 打包工具
2. Tree Shaking
## 安装
1. 全局安装
```
npm install rollup -g
yarn global add rollup
```
2. 在项目中安装
```
npm install rollup -D
yarn add rollup -D
```
## 指定打包的规范
Rollup 支持以下模块化规范：
- AMD
- CommonJS
- ES6 Modules
- IIFE
- UMD

通过 ```-f``` 指令可以指定打包的规范，```-f``` 指令是 ```--output.format``` 的缩写。
```
rollup main.js -f amd|cjs|es|iife|umd
```
## 配置文件
在命令行指定参数太麻烦，因此可以写在一个配置文件中。通过 ```-c``` 或者 ```--config``` 指令可以指定配置文件，默认使用 rollup.config.js 作为配置文件。
Rollup 在打包时会自行处理配置文件，因此在 rollup.config.js 中可以使用 ```export default``` 导出配置项。
使用 ```rollup -c``` 可以进行打包。
## 其他特性
Rollup 还有其他的一些特性，譬如插件机制，以及更详细的 API 使用，这方面的内容可以到 Rollup 的[官网](https://rollupjs.org/)或者[中文文档](http://www.rollupjs.com/)去查看。
## 常用用途
Rollup 打包后的代码更为纯粹，没有太多多余的东西，因此我常将 Rollup 用于 Node 代码中，其 Tree Shaking 特性可以帮助我们去除很多冗余代码，一般和 Gulp 和 Babel 结合使用。