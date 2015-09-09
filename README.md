## JS和CSS相关整理

### css-tricks

 - [Solving IE7 & IE8 PNG Opacity Problems](http://www.jacklmoore.com/notes/ie-transparency-problems/)
 - [Sticky Footer](https://css-tricks.com/snippets/css/sticky-footer/)
 - [Sticky Footer中文](http://www.cssstickyfooter.com/cn/using-sticky-footer-code.html)


### javascript-tricks

#### [null和undefined](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

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
