'use strict'

const anObject = {
  message: 'Just a test.',
  active: true,

  get formattedMessage () {
    return this.message
  },

  get status () {
    return this.active
  },

  set status (status) {
    this.active = status
  },
}

/*
 * `Object.getOwnPropertyDescriptors()` returns all the own property descriptors of a given object. The property
 * descriptors include `value`, `writable`, `get`, `set`, `configurable` & `enumerable`.
 *
 * Outputs:
 * {
 *   message: { value: 'Just a test.', writable: true, enumerable: true, configurable: true },
 *   active: { value: true, writable: true, enumerable: true, configurable: true },
 *   formattedMessage: { get: [Function: get formattedMessage], set: undefined, enumerable: true, configurable: true },
 *   status: { get: [Function: get status], set: [Function: set status], enumerable: true, configurable: true }
 * }
 */
console.log(Object.getOwnPropertyDescriptors(anObject))

// `Object.getOwnPropertyDescriptors()` can offer a safer and more thorough object copying as opposed to
// `Object.assign()`, which directly accesses properties and symbols instead of their descriptors.
const clonedObject = Object.create(
  Object.getPrototypeOf(anObject), Object.getOwnPropertyDescriptors(anObject),
)
