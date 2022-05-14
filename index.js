// 1. Please write a function that shows the usage of closures

const multiplyStr = (times) => {
  return (str) => str.repeat(times);
};

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const sum = (arr) => arr.reduce((acc, curr) => acc + curr);

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flatten = (arr) => {
  const flattenedArr = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      flattenedArr.push(...flatten(el));
    } else {
      flattenedArr.push(el);
    }
  });

  return flattenedArr;
};

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const common = (arrA, arrB) => [
  ...new Set(arrA.filter((el) => arrB.includes(el))),
];

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const different = (arrA, arrB) => [
  ...new Set(
    [...arrA, ...arrB].filter((el) => !arrB.includes(el) || !arrA.includes(el))
  ),
];

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const tuples = (arrA, arrB) =>
  arrA
    .filter((el, i) => typeof arrB[i] !== 'undefined')
    .map((el, i) => [el, arrB[i]]);

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const valueAtPath = (path, obj) => {
  for (let i = 0; i < path.length; i++) {
    obj = obj[path[i]];
  }
  return obj && typeof obj !== 'object' ? obj : undefined;
};

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const compare = (objA, objB) => {
  if (Object.keys(objA).length !== Object.keys(objB).length) return false;
  let match = false;
  for (let i = 0; i < Object.keys(objA).length; i++) {
    for (let j = 0; j < Object.keys(objA).length; j++) {
      if (
        Object.keys(objA)[i] === Object.keys(objB)[j] &&
        Object.values(objA)[i] === Object.values(objB)[j]
      )
        match = true;
    }
    if (!match) return false;
    match = false; // reset before next iteration
  }
  return true;
};

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const removeKeys = (keysToRemove, obj) => {
  const filteredKeys = Object.keys(obj).filter(
    (key) => !keysToRemove.includes(key)
  );
  const entries = filteredKeys.map((key) => [key, obj[key]]);
  return Object.fromEntries(entries);
};

module.exports = {
  multiplyStr,
  sum,
  flatten,
  common,
  different,
  tuples,
  valueAtPath,
  compare,
  removeKeys,
};
