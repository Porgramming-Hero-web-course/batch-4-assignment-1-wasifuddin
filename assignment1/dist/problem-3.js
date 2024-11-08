"use strict";
var countWordOccurrences = function (sentence, word) {
    var words = sentence.toLowerCase().split(" ");
    var target = word.toLowerCase();
    return words.filter(function (w) { return w === target; }).length;
};
console.log(countWordOccurrences("I love typescript", "typescript"));
