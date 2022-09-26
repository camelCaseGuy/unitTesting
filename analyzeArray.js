const analyzeArray = function () {
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
}

export { analyzeArray };