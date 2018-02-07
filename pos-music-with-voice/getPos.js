var pos = require('pos');

function getPOS(wordText) {
	var words = new pos.Lexer().lex(wordText);

	var tagger = new pos.Tagger();
	var taggedWords = tagger.tag(words);

	var wordObj = [];

	for (i in taggedWords) {
		var taggedWord = taggedWords[i];
		var word = taggedWord[0];
		var tag = taggedWord[1];
		wordObj.push({word: word, tag: tag});
	}

	return wordObj;
}

module.exports = getPOS