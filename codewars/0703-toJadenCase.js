/**
 * [toJadenCase description]
 * \w : 字符（字母。数字，下划线）
 * |：或的意思
 * \s :  空格
 * ^：正则最开始的位置代表起始
 * $: 代表结束
 * @return {[type]} [description]
 */
String.prototype.toJadenCase = function () {
  var re = /^\w|\s\w/g;
  return this.replace(re,function (str) {
  	console.log(str.toUpperCase());
  	return str.toUpperCase();
  });
};

String.prototype.toJadenCase = function () {
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};
var str = "how can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
