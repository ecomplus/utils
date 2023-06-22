/**
 * @method
 * @memberof ecomUtils
 * @name objectIdPad
 * @description Merge received ObjectID string with new index.
 * @param {string} id - Base ID string, 24 digits hexadecimal
 * @param {string} index - The index to be inserted on the end of base ID, creating new ObjectID
 * @returns {string & { length: 24 }}
 *
 * @example
 * const id = '5ce59fbf887ef430f1f6ed29'
 * const index = '5'
 * ecomUtils.objectIdPad(id, index)
 * // => '5ce59fbf887ef430f1f6ed25'
 */
const objectIdPad = (id, index) => id.substring(0, 24 - index.length) + index

export default objectIdPad
