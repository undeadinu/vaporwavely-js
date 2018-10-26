import { dictionary } from './utils'

/**
 * @param entryText
 * @returns {string}
 */
export function vaporize(entryText) {
	let vaporCoeff = 'Ａ'.charCodeAt(0) - 'A'.charCodeAt(0);
	let returnText = '';
	let currentChar;

	for(let i = 0; i < entryText.length; i++) {
		currentChar = entryText[i].charCodeAt(0);
		if('!'.charCodeAt(0) <= currentChar && currentChar <= '~'.charCodeAt(0)) {
			currentChar += vaporCoeff;
		}
		returnText += String.fromCharCode(currentChar);
	}

	return returnText;
}

/**
 * @param numParagraphs
 * @returns {string}
 */
export function vaporipsum(numParagraphs = 1) {
	let paragraph;
	let paragraphFinal = '';

	for(let i = 0; i < (dictionary.length * numParagraphs); i++){
		paragraph = Math.floor((Math.random() * dictionary.length));
		paragraphFinal += dictionary[paragraph] + ' ';
	}

	return paragraphFinal;
}
