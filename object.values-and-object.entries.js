'use strict'

const anObject = {
  a: 1,
  b: 2,
  c: false,
  d: [
    3, 4, 5,
  ],
  e: {
    f: 6,
    g: 'A message.',
  },
}

/*
 * `Object.values()` returns an array of the values for all enumerable keys in the object (excluding values in the
 * prototype chain).
 * Outputs: [ 1, 2, false, [ 3, 4, 5 ], { f: 6, g: 'A message.' } ].
 */
console.log(Object.values(anObject))

/*
 * `Object.entries()` is similar to `Object.values()`, and it returns an array of arrays with the key and value in
 * each sub-array.
 * Outputs: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', false ], [ 'd', [ 3, 4, 5 ] ], [ 'e', { f: 6, g: 'A message.' } ] ].
 */
console.log((Object.entries(anObject)))

// Both `Object.values()` & `Object.entries()` will work for any enumerable data structure such as strings and arrays.
const anArray = [1, 2, 3]
console.log(Object.values(anArray)) // [ 1, 2, 3 ].
console.log(Object.entries(anArray)) // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ].

const aString = 'A test.'
console.log(Object.values(aString)) // [ 'A', ' ', 't', 'e', 's', 't', '.' ].
console.log(Object.entries(aString)) // [ [ '0', 'A' ], [ '1', ' ' ], [ '2', 't' ], [ '3', 'e' ], [ '4', 's' ], [ '5', 't' ], [ '6', '.' ] ].
