var homoglyphSearch = require('homoglyph-search');

// var bannedWords = ['credit'];
var bannedWords = ['hoge'];
var textToSearch = 'Get free ϲrеdiᴛ';

var results = homoglyphSearch.search(textToSearch, bannedWords);

console.log(results)
