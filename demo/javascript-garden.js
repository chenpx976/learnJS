// 译者注：来自 Nettuts+ 的一段代码，生动的阐述了 JavaScript 中变量声明提升规则
var myvar = 'my value';
/**/
(function() {
    console.log(myvar); // undefined
    var myvar = 'local value';
})();
/**/
function Dog(){
  this.tail = true;
}
console.log(Dog.prototype.constructor);//[Function: Dog]

function parseQuery(query) {
    var result = {};

    // 如果不是字符串返回空对象
    if (typeof query !== 'string') {
        return result;
    }

    // 去掉字符串开头可能带的?
    if (query.charAt(0) === '?') {
        query = query.substring(1);
    }

    var pairs = query.split('&');
    var pair;
    var key, value;
    var i, len;

    for (i = 0, len = pairs.length; i < len; ++i) {
        pair = pairs[i].split('=');
        // application/x-www-form-urlencoded编码会将' '转换为+
        key = decodeURIComponent(pair[0]).replace(/\+/g, ' ');
        value = decodeURIComponent(pair[1]).replace(/\+/g, ' ');

        // 如果是新key，直接添加
        if (!(key in result)) {
            result[key] = value;
        }
        // 如果key已经出现一次以上，直接向数组添加value
        else if (isArray(result[key])) {
            result[key].push(value);
        }
        // key第二次出现，将结果改为数组
        else {
            var arr = [result[key]];
            arr.push(value);
            result[key] = arr;
        } // end if-else
    } // end for

    return result;
}
console.log(parseQuery('test=212&name=chen'));

var url = 'www.baidu.com?name=&age=23&sex=1';
function parseURL (url) {
	var result = {};
	if (typeof url !== 'string') {
		return result;
	};
	var pairs = url.split('?')[1].split('&');
	pairs.forEach(function(elem) {
		var pair = elem.split('=');

		return result[pair[0]] = pair[1];
	});
	return result;
}
console.log(parseURL(url));
