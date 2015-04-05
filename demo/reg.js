/*
正则学习
正则的方法：
test：正则去匹配字符串，匹配成功返回真， or 假

写法： 正则.test(str)
*/

try {

    var str = 'adsafa';

    var re = /b/;

    console.log(re.test(str));


} catch (e) {

}

try {
    var str = '4646789456t416546';
    var re = /t/;
    if (re.test(str)) {
        console.log('不全是数字');
    } else {
        console.log('全是数字');
    };
} catch (e) {

}
// 转义字符
/*
\s :  空格
\d : 数字
\w : 字符（字母。数字，下划线）
大写的是否定
*/
try {
    var str = '4646789456t416546';
    var re = /\D/;
    if (re.test(str)) {
        console.log('不全是数字');
    } else {
        console.log('全是数字');
    };
} catch (e) {

}

/*
search:匹配成功，返回匹配成功的位置，失败返回 -1

写法： 字符串.search(正则)

正则默认区分大小写
不区分大小写，正则最后加 i
or new RegExp('B','i')
*/

try {
    var str = 'abcdfe';
    // var re = /b/;
    var re = /B/i;
    console.log(str.search(re));
} catch (e) {

}


/*
match:匹配成功，返回成功的数组，不成功null
写法： 字符串.match(正则)
正则默认：正则匹配成功就会结束，不会继续匹配
如果想要全部查找，就要加标识 g （全局匹配）

量词： 匹配不确定的位置
+ ：至少出现一次
*/
try {
    var str = 'dFFSDA1231FDASFDASfdsaf13213fafds123fdas';
    var re = /\d/g;
    console.log(str.match(re));
} catch (e) {

}
try {
    var str = 'dFFSDA1231FDASFDASfdsaf13213fafds123fdas';
    var re = /\d\d/g;
    console.log(str.match(re));
} catch (e) {

}
try {
    var str = 'dFFSDA1231FDASFDASfdsaf13213fafds123fdas';
    var re = /\d\d\d/g;
    console.log(str.match(re));
} catch (e) {

}
try {
    var str = 'dFFSDA1231FDASFDASfdsaf13213fafds123fdas';
    var re = /\d+/g;
    console.log(str.match(re));
} catch (e) {

}


/*
replace： 替换操作，匹配成功替换成新的字符串

写法： 字符串.replace(正则,新的字符串)

|：或的意思

第二个参数，可以是字符串，也可以是函数
*/

try {
    var str = 'aaa';
    var re = /a+/g;
    console.log(str.replace(re, 'b'));
} catch (e) {

}

//敏感词替换
try {
    var str = '的的阿飞挖坟分啊威风啊我发 分啊无坟挖法违法';
    console.log(str);
    var re = /挖坟|违法/g;
    console.log(str.replace(re, function(str) {
        // 函数的第一个参数，就是匹配成功的字符
        // console.log(str);
        var result = '';
        for (var i = 0; i < str.length; i++) {
            result += '*';
        };
        return result;
    }));
} catch (e) {

}

/*
匹配子项： 小括号(),还有另外一个意思,分组操作
1+1*2
(1+1)*2

把正则的整体叫做（母体）
左边第一个小括号里面的正则，叫第一个子项
第二个小括号，是第二个子项
*/
try {
    var str = '2015-4-5';
    var re = /(\d+)(-)/g;
    console.log(str.replace(re, function($0, $1, $2) {
        // 第一个参数，母体
        // 第二个参数，第一个子体
        // 第三个参数，第二个字体
        console.log($2);
        return $1 + '.';
        // return $0 + '.';
    }));
} catch (e) {

}
/*
match 不加g的时候才可以获取到子项的集合
*/
try {
    var str = 'abc';
    var re = /(a)(b)(c)/;
    console.log(str.match(re));
} catch (e) {

}

/*
字符类：一组相似的元素  []  中括号的整体代表一个
*/

try {
    // var str = 'adc';
    var str = 'abdc';
    var re = /a[bde]c/;
    console.log(str.match(re));
} catch (e) {

}
/*
排除： ^写在[]里面的话，是排除的意思
*/
try {
    // var str = 'adc';
    var str = 'adc';
    var re = /a[^bde]c/;
    console.log(str.match(re));
} catch (e) {

}

/*
范围：[a-z0-9A-Z]
*/
try {
    // var str = 'adc';
    var str = 'adc';
    var re = /a[a-z0-9A-Z]+c/;
    console.log(str.match(re));
} catch (e) {

}

/*
过滤标签
*/

try {
    var str = '<h2>Hello world</h2>daedaf';
    // var re = /<\w+>/;
    var re = /<[^>]+>/g;
    console.log(str.replace(re, ""));
} catch (e) {

}

/*
转义字符：
. : 任意字符
\. : 真正的点
\b : 独立的部分[起始、结束、空格]


\s :  空格
\d : 数字
\w : 字符（字母。数字，下划线）
大写的是否定

*/
try {
    var str = 'a.c';
    // var re = /<\w+>/;
    var re = /a\.c/;
    console.log(str.match(re));
} catch (e) {

}
try {
    var str = 'onetwo';
    var re = /\bone/;
    console.log(re.test(str));
} catch (e) {}
try {
    var str = 'onetwo';
    var re = /one\b/;
    console.log(re.test(str));
} catch (e) {}

/*
获取class
正则传参必须用 new RegExp()
*/
try {
    var str = ['box1', 'box1box2', 'box1 box2'];

    function getClass(str, sClass) {
        var re = new RegExp('\\b' + sClass + '\\b');
        for (var i = 0; i < str.length; i++) {
            console.log(re.test(str[i]));
        };

    }
    getClass(str, 'box1')
} catch (e) {}


/*
/1 ： 重复的子项

var re = /\w\w/;  c9
var re = /(\w)\1/;  cc  99
*/
try {
    var str = 'abca';
    var re = /(a)(b)(c)/;
    console.log(re.test(str));
} catch (e) {}

try {
    var str = 'abcb';
    var re = /(a)(b)(c)\2/;
    console.log(re.test(str));
} catch (e) {}


/*
一个字符串中出现最多的字符，以及出现的次数
*/

try{
	var str = 'aasssasadadjdasjllfawejfdksafja';
	var arr = str.split('');
	str = arr.sort().join('');
	var re = /(\w)\1+/g;
	var value = '';
	var index = 0;
	str.replace(re,function($0,$1) {
		// console.log($0);
		if (index < $0.length) {
			index = $0.length;
			value = $0;
		};
	})
	console.log(index +" "+value);
} catch (e){}

/*
量词：不确定的字符的个数 {}
{4,7}： 最少出现四次，最多出现7次
{4,} : 最少出现4次
{4} : 刚好4次
+ ：{1,}
? : {0,1}
* : {0,}


*/
try {
    var str = 'abc';
    var re = /ab*/;
    console.log(re.test(str));
} catch (e) {}

/*
判断是不是QQ号
^：正则最开始的位置代表起始
$: 代表结束
*/
try {
    var str = '448548';
    var re = /^[1-9]\d{4,11}$/;
    if (re.test(str)) {
    	console.log("是QQ号");
    } else{
    	console.log("不是");
    };
} catch (e) {}

/*
去掉前后空格


*/
try {
    var str = '   a   bc   ';
    console.log(trim(str));
    function trim(str) {
    	var re = /^\s+|\s+$/g;
    	return str.replace(re,'');
    }


} catch (e) {}

var re = {
	qq: /[1-9][0-9]{4,9}/,
	email: /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/,
	number: /\d+/
}
