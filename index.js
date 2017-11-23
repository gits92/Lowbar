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

_.each = function(list, iteratee, context) {
  let func = iteratee.bind(context);
  if (Array.isArray(list)) {
    for (var index = 0; index < list.length; index++) {
      func(list[index], index, list);
    }
    return list;
  }
  for (var key in list) {
    func(list[key], key, list);
  }
  return list;
};

_.indexOf = function(arr, val, from = 0) {
  if (!Array.isArray(arr) && typeof arr !== 'string') {
    return -1;
  }
  if (arr.length === 0) {
    return -1;
  }
  if (val === undefined) {
    return -1;
  }
  var startFrom = arr.length - arr.slice(from).length;
  for (var i = startFrom; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

_.filter = function(list, func = undefined) {
  if (typeof list !== 'object' && typeof list !== 'string') return [];
  if (list === null) return [];
  if (typeof list === 'string') {
    list = list.split('');
  }
  if (func === undefined || func === null) {
    if (typeof list === 'object') {
      return Object.values(list);
    }
    return list;
  }
  if (typeof func !== 'function') return [];
  var result = func(list);
  var arr = [];
  if (typeof result === 'boolean') {
    if (typeof list === 'object') {
      list = Object.values(list);
    }
    for (var i = 0; i < list.length; i++) {
      if (func(list[i]) === true) {
        arr.push(list[i]);
      }
    }
    return arr;
  }
  return list;
};

_.reject = function(list, predicate, context) {
  if (context) predicate = predicate.bind(context);
  let arr = [];
  _.each(list, function(item) {
    if (predicate(item) === false) {
      arr.push(item);
    }
  });
  return arr;
};

_.uniq = function(array, iteratee) {
  var result = [];
  if (!array) return result;
  for (var i = 0; i < array.length; i++) {
    if (iteratee && result.indexOf(iteratee(array[i]))) {
      result.push(array[i]);
    } else if (result.indexOf(array[i]) === -1) result.push(array[i]);
  }
  return result;
};

_.map = function(list, iteratee, context) {
  if (context) iteratee = iteratee.bind(context);
  let newArr = [];
  _.each(list, function(el, index, list) {
    newArr.push(iteratee(el, index, list));
  });
  return newArr;
};

_.contains = function(list, val, fromIndex = 0) {
  if (Array.isArray(list) || typeof list === 'string') {
    if (_.indexOf(list, val, fromIndex) === -1) {
      return false;
    } else return true;
  }
  if (typeof list === 'object') {
    for (var key in list) {
      if (list[key] === val) return true;
    }
  }
  return false;
};

_.zip = function() {
  const res = [];
  for (var i = 0; i < arguments[0].length; i++) {
    console.log(arguments);
    let singleArr = [];
    for (var j = 0; j < arguments.length; j++) {
      // console.log(arguments[i]);
      singleArr.push(arguments[j][i]);
    }
    res.push(singleArr);
  }
  return res;
};

_.flatten = function(arr) {
  return arr.reduce(function(acc, arrays) {
    return acc.concat(Array.isArray(arrays) ? _.flatten(arrays) : arrays);
  }, []);
};

module.exports = _;
