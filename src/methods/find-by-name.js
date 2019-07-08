import name from './name'
import findByProperty from './find-by-property'

const findByName = (list, title) => {
  // try to find by name property first
  const objByName = findByProperty(list, 'name', title)
  if (objByName) {
    // found
    return objByName
  }
  // try to find by transalated name or title prop
  const newList = list.map(obj => {
    return (obj && { name: name(obj) })
  })
  return findByProperty(newList, 'name', title)
}

/**
 * @method
 * @memberof ecomUtils
 * @name findByName
 * @description Find object from list by name or title value.
 * @param {array} list - List of nested objects
 * @param {string} title - Object (category, brand, product...) name or title value
 * @returns {object|undefined}
 *
 * @example
 * const listOfNested = [{"name": "Ultimate Blaster", "sku": "MHP4824"}, {"name": "Xiaomi","sku": "smtp-xomi-9746"}]
 * ecomUtils.findByName(listOfNested, 'Ultimate Blaster')
 * // => {name: "Ultimate Blaster", sku: "MHP4824"}
 *
 * @example
 * // Importing this method standalone
 * import findByName from '@ecomplus/utils/dist/methods/find-by-name'
 */

export default findByName
