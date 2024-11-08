"use strict";
function sumArray(numbers) {
    return numbers.reduce(function (sum, curr) { return sum + curr; }, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
