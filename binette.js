/**
 * binette.js - very simple smiley to unicode emoji library
 * 
 * "static-class-like" utility to replace emoticon-looking character sequences
 * like ":'(" or ":P"
 * 
 * @author Tela Botanica <http://www.tela-botanica.org> - 2016-01-06
 * @licence : GPLv3
 */

// pseudo "static class"
function Binette() {
}

/**
 * binettes are character sequences looking like an emoticon (smiley)
 * > add your own here !
 */
Binette.binettes = {
	":D": "U+1F603",
	":-D": "U+1F603",
	"XD": "U+1F606",
	";)": "U+1F609",
	";-)": "U+1F609",
	"B)": "U+1F60E",
	"B-)": "U+1F60E",
	":|": "U+1F610",
	":-|": "U+1F610",
	":/": "U+1F615",
	":-/": "U+1F615",
	":\\": "U+1F615",
	":-\\": "U+1F615",
	":p": "U+1F61B",
	":-p": "U+1F61B",
	":P": "U+1F61B",
	":-P": "U+1F61B",
	";p": "U+1F61C",
	";-p": "U+1F61C",
	";P": "U+1F61C",
	";-P": "U+1F61C",
	":@": "U+1F620",
	":-@": "U+1F620",
	":'(": "U+1F622",
	"X(": "U+1F623",
	"><": "U+1F623",
	":o": "U+1F62E",
	":-o": "U+1F62E",
	":O": "U+1F62E",
	":-O": "U+1F62E",
	":(": "U+1F641",
	":-(": "U+1F641",
	":)": "U+1F642",
	":-)": "U+1F642"
};

/**
 * Unicode emoji characters by code 
 * This is NOT an exhaustive list - il only aims at covering the "smileys" and
 * a few largely used glyphs (for ex. "<3")
 */
Binette.emoji = {
	"U+1F603": {
		hex: "\uD83D\uDE03",
		char: "😃",
		name: "SMILING FACE WITH OPEN MOUTH"
	},
	"U+1F606": {
		hex: "\uD83D\uDE06",
		char: "😆",
		name: "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"
	},
	"U+1F609": {
		hex: "\uD83D\uDE09",
		char: "😉",
		name: "WINKING FACE"
	},
	"U+1F60E": {
		hex: "\uD83D\uDE0E",
		char: "😎",
		name: "SMILING FACE WITH SUNGLASSES"
	},
	"U+1F610": {
		hex: "\uD83D\uDE10",
		char: "😐",
		name: "NEUTRAL FACE"
	},
	"U+1F615": {
		hex: "\uD83D\uDE15",
		char: "😕",
		name: "CONFUSED FACE"
	},
	"U+1F61B": {
		hex: "\uD83D\uDE1B",
		char: "😛",
		name: "FACE WITH STUCK-OUT TONGUE"
	},
	"U+1F61C": {
		hex: "\uD83D\uDE1C",
		char: "😜",
		name: "FACE WITH STUCK-OUT TONGUE AND WINKING EYE"
	},
	"U+1F620": {
		hex: "\uD83D\uDE20",
		char: "😠",
		name: "ANGRY FACE"
	},
	"U+1F622": {
		hex: "\uD83D\uDE22",
		char: "😢",
		name: "CRYING FACE"
	},
	"U+1F623": {
		hex: "\uD83D\uDE23",
		char: "😣",
		name: "PERSEVERING FACE"
	},
	"U+1F62E": {
		hex: "\uD83D\uDE2E",
		char: "😮",
		name: "FACE WITH OPEN MOUTH"
	},
	"U+1F641": {
		hex: "\uD83D\uDE41",
		char: "🙁",
		name: "SLIGHTLY FROWNING FACE"
	},
	"U+1F642": {
		hex: "\uD83D\uDE42",
		char: "🙂",
		name: "SLIGHTLY SMILING FACE"
	}
};

Binette.escapeSpecialChars = function(regex) {
	return regex.replace(/([()[{*+.$^\\|?])/g, '\\$1');
};

/**
 * Given a text, replaces every occurrence of any emoticon-looking characters
 * sequence (ie. ":'(" ) with the corresponding unicode character (emoji); 
 * returns the modified text
 */
Binette.binettize = function(text) {
	for (var i in Binette.binettes) {
		var regex = new RegExp(' ' + Binette.escapeSpecialChars(i) + ' ', 'gim');
		text = text.replace(regex, ' ' + Binette.emoji[Binette.binettes[i]].char + ' ');
	}
	return text;
};
