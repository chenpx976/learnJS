#学习JS期间的代码整理


知识点整理

##面向对象学习

工厂方法：构造函数

基本类型：赋值的时候是值得复制

对象类型：赋值是引用的传递

判断相等：

 - 对象：值和引用[地址]
 - 基本：值


###原型

改写对象下面公用的方法或者属性，让公用的只存在一份，提高性能。


 - 原型：CSS中的class
 - 普通方法：CSS中的style


`Array.prototype.Fn`

原型的优先级比普通方法低


```
function 构造函数() {
	this.属性
}

构造函数.原型.方法 = function(){};

var 对象1 = new 构造函数();

对象1.方法();

```


 - 全局变量就是属性
 - 函数就是方法
 - onload创建对象


###this指向

函数调用来改变this指向

```
oDiv.onclick = function(){
    this: oDiv
};

---

oDiv.onclick = show;
function show(){
    this: oDiv
}

---

oDiv.onclick = function(){
    show();
};
function show(){
    this: window
}
```
###选项卡

###拖拽

###包装对象

系统对象是基于原型的程序

基本类型都有自己对应的包装对象，对应的方法挂载在包装对象上

###原型链

实例对象与原型之间的连接

_proto_

原型链的最外层是Object.prototype

