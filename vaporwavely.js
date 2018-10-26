var vaporize = function (entryText) {
	var vaporCoeff = 'Ａ'.charCodeAt(0) - 'A'.charCodeAt(0);
	var returnText = '';
	var currentChar;

	for(var i = 0; i < entryText.length; i++) {
		currentChar = entryText[i].charCodeAt(0);
		if('!'.charCodeAt(0) <= currentChar && currentChar <= '~'.charCodeAt(0)) {
			currentChar += vaporCoeff;
		}
		returnText += String.fromCharCode(currentChar);
	}
	return returnText;
};
