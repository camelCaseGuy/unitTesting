const capitalize = function (string) {
  for (let i = 0; i <= string.length; i++) {
    const charCode = string.charCodeAt(i);
    if (charCode > 96 && charCode < 123) {
      return String.fromCharCode(charCode - 32) + string.slice(1);
    } else {
      return string;
    }
  };
}

console.log('capitalize: 12@#abcd@#34:', capitalize('12@#abcd@#34?'));

export { capitalize };