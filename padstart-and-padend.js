'use strict'

const aString = 'abc'

// `padStart()`.
console.log(aString.padStart(10)) // "       abc"
console.log(aString.padStart(10, 'foo')) // "foofoofabc"
console.log(aString.padStart(6, '123465')) // "123abc"
console.log(aString.padStart(8, '0')) // "00000abc"
console.log(aString.padStart(1)) // "abc"

// `padEnd()`.
console.log(aString.padEnd(10)) // "abc       "
console.log(aString.padEnd(10, 'foo')) // "abcfoofoof"
console.log(aString.padEnd(6, '123456')) // "abc123"
console.log(aString.padEnd(1)) // "abc"
