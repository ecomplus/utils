import specValues from './specValues'

const specTextValue = (product, gridId, grids, delimiter = ', ') => {
  // using text property of each spec object
  let values = specValues(product, gridId, grids)
  if (values.length) {
    let valuesString = values[0].text
    for (let i = 1; i < values.length; i++) {
      valuesString += delimiter + values[i].text
    }
    return valuesString
  }
  // specification not found
  return null
}

/**
 * @method
 * @memberof ecomUtils
 * @name specTextValue
 * @description Parse specifications array of nested objects to string.
 * @param {object|array} product - Product body or array of variation objects
 * @param {string} gridId - Grid ID string such as 'color'
 * @param {array} [grids] - List of grid objects
 * @param {string} [delimiter=', '] - Delimiter between each specification
 * @returns {string|null}
 *
 * @example
 * // TODO
 *
 * @example
 * // Importing this method standalone
 * import specTextValue from '@ecomplus/utils/dist/methods/spec-text-value'
 */

export default specTextValue
