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
 * @description Generate a random object id with 24 chars hexadecimal string.
 * @returns {string}
 *
 * @example
 * ecomUtils.randomObjectId()
 * // => '561025156443695764000000'
 */

export default randomObjectId
