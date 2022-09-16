const capitalize = function (string) {
  const charCode = string.charCodeAt(0);
  if (charCode > 96 && charCode < 123) {
    return String.fromCharCode(charCode - 32) + string.slice(1);
  } else {
    return 'First character must be a lowercased letter.'
  }
}

// console.log(capitalize('abc'));

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

// console.log(reverseString('abc'))

const calc = (function () {
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const multiply = (x, y) => x * y;
  const divide = (x, y) => x / y;
  return ({ add, subtract, multiply, divide })
})()

// console.log(`10 + 4 = ${calc.add(10,4)}`);
// console.log(`10 - 4 = ${calc.subtract(10,4)}`);
// console.log(`10 * 4 = ${calc.multiply(10,4)}`);
// console.log(`10 / 4 = ${calc.divide(10,4)}`);

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

const coded = caesarCipher.encode(1, 'xyz');
console.log(coded);
const decoded = caesarCipher.decode(1, coded);
console.log(decoded);
