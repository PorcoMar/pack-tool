require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = function test(){
    console.log("Test")
}
},{}],2:[function(require,module,exports){
module.exports = function test2(){
  console.log("卧槽 太牛逼了这是Test2")
  console.log('browserify -r ./src/main.js:main -r ./src/test.js:custom-test -r ./src/test2.js:custom-test2 > build/bundle.js')
}
},{}],3:[function(require,module,exports){
module.exports = function test(){
  console.log("----this is Test3")
}
},{}],"/src/main.js":[function(require,module,exports){
module.exports = function main(){
    console.log("Main")
}
},{}]},{},[1,2,3]);
