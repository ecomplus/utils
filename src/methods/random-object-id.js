const randomObjectId = () => {
  // generate 24 chars hexadecimal string
  // return unique and valid MongoDB ObjectId pattern
  let objectId = Math.floor(Math.random() * 1000000).toString() + Date.now()
  // pad zeros
  while (objectId.length < 24) {
    objectId += '0'
  }
  return objectId
}

/**
 * @method
 * @memberof ecomUtils
 * @name randomObjectId
 * @description Merge received ObjectID string with new index.
 * @param {string} id - Base ID string, 24 digits hexadecimal
 * @param {string} index - The index to be inserted on the end of base ID, creating new ObjectID
 * @returns {string}
 *
 * @example
 * // TODO
 *
 * @example
 * // Importing this method standalone
 * import randomObjectId from '@ecomplus/utils/dist/methods/random-object-id'
 */

export default randomObjectId
