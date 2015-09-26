　　
function extend(Child, Parent) {

  　　　　
  var F = function() {};　　　　
  F.prototype = Parent.prototype;　　　　
  Child.prototype = new F();　　　　
  Child.prototype.constructor = Child;　　　　
  Child.uber = Parent.prototype;　　
}

　　function extend2(Child, Parent) {
　　　　var p = Parent.prototype;
　　　　var c = Child.prototype;
　　　　for (var i in p) {
　　　　　　c[i] = p[i];
　　　　　　}
　　　　c.uber = p;
　　}
