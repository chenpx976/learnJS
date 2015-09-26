function vowel2index (str) {
	var aVowel = ['a','e','i','o','u'];
	for (var i = 0; i < aVowel.length; i++) {
		var j = i;
		while(str.indexOf(aVowel[i],j) !== -1){
			j = str.indexOf(aVowel[i]) + 1;
			str = str.replace(aVowel[i],j);
		}
	}
	return str;
}

console.log(vowel2index('Im very miss you'));
