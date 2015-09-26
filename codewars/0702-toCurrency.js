function toCurrency(price) {
  String.prototype.reverse = function() {
    return this.split("").reverse().join("");
  }
  Number.prototype.toCurrency = function() {
    var x = 3;
    var y = parseInt(this).toString().reverse();
    while (x < y.length) {
      y = y.substring(0, x) + "," + y.substring(x);
      x += 4;
    }
    return y.reverse();
  }
  return price.toCurrency();
}

function toCurrency(price) {
  return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

function toCurrency(price) {
  return ("" + price).split('').reverse().map(function(v, i) {
    return i % 3 == 0 && i > 0 ? v + ',' : v;
  }).reverse().join('');
}

function toCurrency(price) {
  var price = price.toString().split('');

  for (var i = price.length - 3; i > 0; i -= 3) {
    price.splice(i, 0, ',');
  }

  return price.join('');
}
console.log(toCurrency(1231321));
