function heggeleggleggo(word){
	var aVowel = ['a','e','i','o','u'];
	var re = /a|e|i|o|u/i;
	var aWord = word.split('');
	for (var i = 0; i < word.length; i++) {
		if (!re.test(word[i]) && !/\s/.test(word[i])) {
			var len = aWord.length - word.length;
			var j = i + len + 1;
			aWord.splice(j,0,'egg');
		}
	};
	return aWord.join('');
}

var heggeleggleggo = w => w.replace(/([^aeiou ])/gi, "$1egg");
var heggeleggleggo = word => word.replace(/([^aeiou\s])/gi, "$1egg");

console.log(heggeleggleggo("eggy breadaaa"));
