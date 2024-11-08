function removeDuplicates(numbers: number[]): number[] {
    var uniqueNum: number[] = [];
    for (var i = 0; i < numbers.length; i++) {
      if (uniqueNum.indexOf(numbers[i]) === -1) {
        uniqueNum.push(numbers[i]);
      }
    }
    return uniqueNum;
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  

  