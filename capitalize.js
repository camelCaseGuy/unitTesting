const capitalize = function (string) {
  const charCode = string.charCodeAt(0);
  if (charCode > 96 && charCode < 123) {
    return String.fromCharCode(charCode - 32) + string.slice(1);
  } else {
    return string;
  }
}

// console.log('capitalize: hello, how are you?:', capitalize('hello, how are you?'));

export default capitalize;