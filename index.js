const _ = {};

_.identity = function(input) {
  return input;
};

_.first = function(arr, n = 1) {
  if (arr === null) return undefined;
  if (!Array.isArray(arr) && typeof arr !== 'string') return [];
  if (n === 1) return arr[0];
  if (typeof arr === 'string') return arr.split('').slice(0, n);
  return arr.slice(0, n);
};

_.last = function(arr, n = 1) {
  if (arr === null) return undefined;
  if (!Array.isArray(arr) && typeof arr !== 'string') return [];
  if (n === 1) return arr[arr.length - 1];
  if (typeof arr === 'string') return arr.split('').slice(-n);
  return arr.slice(-n);
};

module.exports = _;
