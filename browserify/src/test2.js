module.exports = function test2(){
  console.log("卧槽 太牛逼了这是Test2")
  console.log('browserify -r ./src/main.js:main -r ./src/test.js:custom-test -r ./src/test2.js:custom-test2 > build/bundle.js')
}