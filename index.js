const capitalize = function (string) {
  const charCode = string.charCodeAt(0);
  if (charCode > 96 && charCode < 123) {
    return String.fromCharCode(charCode - 32) + string.slice(1);
  } else {
    return 'First character must be a lowercased letter.'
  }
}

console.log('capitalize: hello, how are you?:', capitalize('hello, how are you?'));

const reverseString = (string) => {
  const chars = string.split('');
  const reverseChars = (arr) => {
    let reversed = [];
    for (let i = arr.length; i > 0; i--) {
      reversed.push(arr[i - 1]);
    }
    return reversed;
  }
  const reverseString = reverseChars(chars).join('');
  return reverseString;
}

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

const caesarCipher = (function () {
  const encode = (cipher, string) => {
    const stringCharArr = string.split('');
    const encodedCharArr = [];
    stringCharArr.forEach(char => {
      if ((char.charCodeAt() > 64 && char.charCodeAt() < 91)
        || (char.charCodeAt() > 96 && char.charCodeAt() < 123)) {
        const enCodeChar = String.fromCharCode(char.charCodeAt() + cipher);
        encodedCharArr.push(enCodeChar);
      } else {
        encodedCharArr.push(char)
      }
    });
    return encodedCharArr.join('');
  }
  const decode = (cipher, string) => {
    const stringCharArr = string.split('');
    const decodedCharArr = [];
    stringCharArr.forEach(char => {
      if ((char.charCodeAt() > 64 && char.charCodeAt() < 91)
        || (char.charCodeAt() > 96 && char.charCodeAt() < 123)) {
        const deCodeChar = String.fromCharCode(char.charCodeAt() - cipher);
        decodedCharArr.push(deCodeChar);
      } else {
        decodedCharArr.push(char)
      }
    });
    return decodedCharArr.join('');
  }
  return ({ encode, decode });
})();

// need to deal with letter overflow issues
const coded = caesarCipher.encode(1, 'Attack at dawn.');
console.log('caesarCipher coded:', coded);
const decoded = caesarCipher.decode(1, coded);
console.log('caesarCipher decoded:', decoded);

const analyzeArray = (function () {
  const average = (array) => {
    let sum = 0;
    array.forEach(item => sum += item);
    return sum / array.length;
  };
  const min = (array) => {
    let min = array[0];
    array.forEach(item => {
      if (item < min) min = item;
    });
    return min;
  };
  const max = (array) => {
    let max = array[0];
    array.forEach(item => {
      if (item > max) max = item;
    });
    return max;
  };
  const length = array => array.length;
  return { average, min, max, length };
})();

console.log('analyzeArray [-1, 0, 1, 2, 3, 4]:');
console.log('average', analyzeArray.average([-1, 0, 1, 2, 3, 4]));
console.log('min', analyzeArray.min([-1, 0, 1, 2, 3, 4]));
console.log('max', analyzeArray.max([-1, 0, 1, 2, 3, 4]));
console.log('length', analyzeArray.length([-1, 0, 1, 2, 3, 4]));
