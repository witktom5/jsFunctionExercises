const {
  multiplyStr,
  sum,
  flatten,
  common,
  different,
  tuples,
  valueAtPath,
  compare,
  removeKeys,
} = require('./index');

//
//  multiplyStr (example of closures)
//

test('should multiply "ab" 3 times to return "ababab"', () => {
  expect(multiplyStr(3)('ab')).toBe('ababab');
});

//
//  sum
//

test('should sum all items from [1, 4, 7, 2] to equal 14', () => {
  expect(sum([1, 4, 7, 2])).toBe(14);
});

test('should sum all items from [9, 1, 22, 0, 2] to equal 34', () => {
  expect(sum([9, 1, 22, 0, 2])).toBe(34);
});

//
//  flatten (recursion)
//

test('should flatten [1, [4, [2, 2]], 7, 2]', () => {
  expect(flatten([1, [4, [2, 2]], 7, 2])).toStrictEqual([1, 4, 2, 2, 7, 2]);
});

test('should flatten [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]', () => {
  expect(
    flatten([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5])
  ).toStrictEqual([2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]);
});

//
//  common
//

test('should give items present in both arrays', () => {
  expect(common(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e'])).toEqual(
    expect.arrayContaining(['b', 4, 76])
  );
});

test('should give items present in both arrays without duplicates', () => {
  expect(
    common(
      ['bpbz', 0, 22, 'y', 'c', 'y'],
      ['a', 'bpbz', 4, 0, 21, 'y', 'bpbz', 'y']
    )
  ).toStrictEqual(['bpbz', 0, 'y']);
});

//
//  different
//

test("should return items that don't occur in both arrays at once", () => {
  expect(different(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e'])).toEqual(
    expect.arrayContaining(['a', 3, 21, 'c', 'e'])
  );
});

test("should return items that don't occur in both arrays at once without duplicates", () => {
  expect(
    different(
      ['bpbz', 0, 22, 22, 'y', 22, 'c'],
      ['a', 'bpbz', 4, 0, 21, 'y', 4]
    )
  ).toStrictEqual([22, 'c', 'a', 4, 21]);
});

//
//  tuples
//

test('should return tuples made from 2 arrays', () => {
  expect(tuples([1, 2, 3], [4, 5, 6, 7])).toStrictEqual([
    [1, 4],
    [2, 5],
    [3, 6],
  ]);
});

test('should return tuples made from 2 arrays', () => {
  expect(tuples([2, 5, 1, 2], [0, 2, 3])).toStrictEqual([
    [2, 0],
    [5, 2],
    [1, 3],
  ]);
});

//
//  valueAtPath
//

test('should return proper value at given path', () => {
  expect(
    valueAtPath(['a', 'b', 'c', 'd'], { a: { b: { c: { d: 'test' } } } })
  ).toBe('test');
});

test('should return undefined for nonexistent value at given path', () => {
  expect(valueAtPath(['a', 'b', 'c', 'd'], { a: { b: { c: 'test' } } })).toBe(
    undefined
  );
});

//
//  compare
//

test('should return true if two objects are equal', () => {
  expect(
    compare(
      { name: 'Annie', surname: 'Jefferson' },
      { surname: 'Jefferson', name: 'Annie' }
    )
  ).toBe(true);
});

test('should return false if two objects are not equal', () => {
  expect(
    compare(
      { name: 'Annie', surname: 'Jefferson' },
      { surname: 'Jefferson', name: 'Annie', middleName: 'Diana' }
    )
  ).toBe(false);
});

//
//  removeKeys
//

test('should properly remove given keys from an object', () => {
  expect(
    removeKeys(['color', 'size', 'type'], {
      type: 'tshirt',
      color: 'Blue',
      discount: true,
      id: '22',
      size: 'xl',
    })
  ).toStrictEqual({ discount: true, id: '22' });
});
