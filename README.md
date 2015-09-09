#学习JS期间的代码整理


`demo` 存放的是:
##看《JavaScript高级程序设计》记录的代码
##学习JS的代码。

目前有：


 - 跨浏览器的事件处理
 - 拖拽组件
 - 弹窗
 - 正则表达式
 - [Zepto.js 源码注释](http://www.cnblogs.com/sky000/archive/2013/03/29/2988952.html)【未读】
 - [Solving IE7 & IE8 PNG Opacity Problems](http://www.jacklmoore.com/notes/ie-transparency-problems/)
 - [Sticky Footer](https://css-tricks.com/snippets/css/sticky-footer/)
 - [Sticky Footer中文](http://www.cssstickyfooter.com/cn/using-sticky-footer-code.html)


### tricks

#### null和undefined

 - null：表示没有对象，即该处不应该有值。
     1. 作为函数的参数，表示该函数的参数不是对象
     2. 作为对象原型链的终点
 - undefined：表示缺少值，此处应该有一个值，但是还没有定义。
     1. 变量被声明了，但没有赋值。
     2. 调用函数时，应该提供的参数没有提供，该参数等于undefined。
     3. 对象没有赋值的属性，该属性的值为undefined。
     4. 函数没有返回值，默认返回undefined。

```javascript

Object.getPrototypeOf(Object.prototype)

var i;
i // undefined

function f(x){console.log(x)}
f() // undefined

var  o = new Object();
o.p // undefined

var x = f();
x // undefined
```
