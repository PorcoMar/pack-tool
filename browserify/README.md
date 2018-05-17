# Browserify 的使用
## 特性
可以将 Node 上的模块一直到浏览器上使用，或者说，可以将 CommonJS 规范的模块转换成浏览器认识的模块。
## 安装
1. 全局安装
```
npm install browserify -g
yarn global add browserify
```
1. 在项目中安装
```
npm install browserify -D
yarn add browserify -D
```
## 使用
1. 使用 Browserify 进行转换
```
browserify src/main.js -o build/bundle.js
```
2. 浏览器模块化
```
browserify -r ./src/main.js:main -r ./src/test.js:custom-test > build/bundle.js
```
通过 ```文件名:模块名``` 指定导出的模块名。
然后可以在浏览器端通过 ```require``` 方法导入模块：
```
<script>
    const main = require("main")
    const test = require("custom-test")
    main()
    test()
</script>
```
通过 ```-r``` 参数，我们让浏览器具备了使用 ```require``` 方法导入模块的能力。


后面是我自己改的：
1. 使用 Browserify 进行转换
browserify src/main.js -o build/bundle.js
2. 浏览器模块化
browserify -r ./src/*.js > build/bundle.js
这样做除了main.js 叫路径名外其他模块名都是1 2 3 4这样的排序
