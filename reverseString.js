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

export { reverseString };