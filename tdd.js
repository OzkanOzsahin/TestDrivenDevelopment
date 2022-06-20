const addOne = function(numbers) {
   //function comes here..
   
   return numbers.map(number => number + 1);
   
   
};

module.exports = addOne;


const getWordLengths = function(someWords) {
    //Write your function...
    return someWords.map(word => word.length);
};

module.exports = getWordLengths;

const findNeedle = function(words, wordToBeFound) {
    // Write the function here...
    return words.indexOf(wordToBeFound);
  };

  module.exports = findNeedle;