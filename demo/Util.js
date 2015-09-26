Array.prototype.strip = function() {
	if (this && Array.isArray(this)) {
	    var i, len, map = {};
	    for (i = this.length; i >= 0; --i) {
	        if (this[i] in map) {
	            this.splice(i, 1);
	        } else {
	            map[this[i]] = true;
	        }
	    }
	}
	return this;
}
var arr=['abc',85,'abc',85,8,8,1,2,5,4,7,8];
console.log(arr.strip());
