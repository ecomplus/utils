// mix and return base ID with index
const objectIdPad = (id, index) => id.substring(0, 24 - index.length) + index

/**
 * @method
 * @memberof ecomUtils
 * @name objectIdPad
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
 * import objectIdPad from '@ecomplus/utils/dist/methods/object-id-pad'
 */

export default objectIdPad
