const countWordOccurrences = (sentence: string, word: string): number => {
  const words = sentence.toLowerCase().split(" ");
  const target = word.toLowerCase();
  return words.filter(w => w === target).length;
};

console.log(countWordOccurrences("I love typescript", "typescript")); 
