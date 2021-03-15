
exports.min = function min(array) {
  array = Array.isArray(array) ? array : arguments;
  if (array.length === 0) return 0;
  const sorted = [...array].sort((a, b) => a - b);
  return sorted[0];
}

exports.max = function max(array) {
  array = Array.isArray(array) ? array : arguments;
  if (array.length === 0) return 0;
  const sorted = [...array].sort((a, b) => a - b);
  return sorted[sorted.length - 1];
}

exports.avg = function avg(array) {
  array = Array.isArray(array) ? array : arguments;
  if(array.length === 0) return 0;
  let sum = 0;
  array.forEach(el => sum += el);
  return (sum / array.length);
}
