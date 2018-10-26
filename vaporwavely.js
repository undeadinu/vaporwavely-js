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

var vaporipsum = function (numParagraphs = 1) {
	var paragraph;
	var paragraphFinal = '';
	for(var i = 0; i < (dictionary.length * numParagraphs); i++){
		paragraph = Math.floor((Math.random() * dictionary.length));
		paragraphFinal += dictionary[paragraph] + ' ';
	}
	return paragraphFinal;
};

dictionary = ['vaporwave',
'aesthetic',
'1999',
'relax',
'bedroom',
'ecstasy',
'nostalgic',
'euphoric',
'glue',
'glow',
'rainbow as',
'coloured with',
'everything will be ok',
'sleeping in',
'meme',
'you\'ve got mail',
'regular scheduled programming',
'nintendo',
'dreamcast',
'playstation',
'nightdrive',
'snick',
'slowed',
'japanese',
'corporate',
'wave',
'nostalgia',
'pizza',
'tassoni',
'pippo baudo',
'italia',
'sicilia',
'cannolo',
'powerglove',
'lost cartridge',
'infinite reverie',
'new game',
'aol',
'ultra 64',
'commodore',
'vhs',
'rgb split',
'atari',
'vcr',
'remember summer days',
'mallsoft',
'the future is now',
'crystal pepsi',
'where am i',
'im dreaming',
'where are you going',
'satisfaction guaranteed',
'sciare'];