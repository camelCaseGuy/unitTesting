const caesarCipher = function () {
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
}

export { caesarCipher };