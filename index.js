import { capitalize } from './capitalize.js';
import { reverseString } from './reverseString.js';
import { analyzeArray } from './analyzeArray.js';
import { caesarCipher } from './caesarCipher.js';


console.log('capitalize: 12@#abcd@#34:', capitalize('12@#abcd@#34?'));


console.log('reverseString: Fine, thanks for asking!:', reverseString('Fine, thanks for asking!'))

const calc = (function () {
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const multiply = (x, y) => x * y;
  const divide = (x, y) => x / y;
  return ({ add, subtract, multiply, divide })
})()

console.log('calc add, subtract, multiply, divide:')
console.log('add:', `10 + 4 = ${calc.add(10, 4)}`);
console.log('subtract:', `10 - 4 = ${calc.subtract(10, 4)}`);
console.log('multiply:', `10 * 4 = ${calc.multiply(10, 4)}`);
console.log('divide:', `10 / 4 = ${calc.divide(10, 4)}`);

// // need to deal with letter overflow issues
// const coded = caesarCipher.encode(1, 'Attack at dawn.');
// console.log('caesarCipher coded:', coded);
// const decoded = caesarCipher.decode(1, coded);
// console.log('caesarCipher decoded:', decoded);

// console.log('analyzeArray [-1, 0, 1, 2, 3, 4]:');
// console.log('average', analyzeArray.average([-1, 0, 1, 2, 3, 4]));
// console.log('min', analyzeArray.min([-1, 0, 1, 2, 3, 4]));
// console.log('max', analyzeArray.max([-1, 0, 1, 2, 3, 4]));
// console.log('length', analyzeArray.length([-1, 0, 1, 2, 3, 4]));
