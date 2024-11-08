function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, curr) => sum + curr, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
