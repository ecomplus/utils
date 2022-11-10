import name from './name'
import findByProperty from './find-by-property'

/**
 * @method
 * @memberof ecomUtils
 * @name findByName
 * @description Find object from list by name or title value.
 * @param {Array} list - List of nested objects
 * @param {string} title - Object (category, brand, product...) name or title value
 * @returns {Object.<string, *>|undefined}
 *
 * @example
 * const listOfNested = [{"name": "Ultimate Blaster", "sku": "MHP4824"}, {"name": "Xiaomi","sku": "smtp-xomi-9746"}]
 * ecomUtils.findByName(listOfNested, 'Ultimate Blaster')
 * // => {name: "Ultimate Blaster", sku: "MHP4824"}
 */
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

export default findByName
