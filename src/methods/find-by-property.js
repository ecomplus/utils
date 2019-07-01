const findByProperty = (list, prop, value) => {
  // must be an array
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      let obj = list[i]
      if (obj && obj[prop] === value) {
        // object found
        return obj
      }
    }
  }
  return undefined
}

/**
 * @method
 * @memberof ecomUtils
 * @name findByProperty
 * @description Find object from list by some property value.
 * @param {array} list - List of nested objects
 * @param {string} prop - Property name
 * @param {mixed} value - Property value to be matched
 * @returns {object|undefined}
 *
 * @example
 * // Find on list of generic objects
 * ecomUtils.findByProperty([ { a: 1, b: 1 }, { a: 2 } ], 'a', 1)
 * // => { a: 1, b: 1 }
 * ecomUtils.findByProperty([ { a: 1 }, { a: 1, b: 1 }, { a: 0 } ], 'a', 1)
 * // => { a: 1 }
 * ecomUtils.findByProperty([ { a: 0, b: 0 }, { a: 1 } ], 'a', 3)
 * // => undefined
 *
 * @example
 * // Importing this method standalone
 * import findByProperty from '@ecomplus/utils/dist/methods/findByProperty'
 */

export default findByProperty
