import specValues from './specValues'

const specValueByText = (product, specText, gridId, grids) => {
  let values = specValues(product, gridId, grids)
  for (let i = 0; i < values.length; i++) {
    if (values[i].text === specText) {
      return values[i].value
    }
  }
  // any spec found for received grid and option text
  return undefined
}

/**
 * @method
 * @memberof ecomUtils
 * @name specValueByText
 * @description Get value property of spec object based on respective text.
 * @param {object|array} product - Product body or array of variation objects
 * @param {string} specText - Spec object text property such as 'Blue'
 * @param {string} gridId - Grid ID string such as 'color'
 * @param {array} [grids] - List of grid objects
 * @returns {string|undefined}
 *
 * @example
 * // TODO
 *
 * @example
 * // Importing this method standalone
 * import specValueByText from '@ecomplus/utils/dist/methods/spec-value-by-text'
 */

export default specValueByText
