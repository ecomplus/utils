const specValues = (product, gridId, grids) => {
  if (typeof product !== 'object' || product === null) {
    // nothing to do
    // returns empty array by default
    return []
  }

  let values = []
  if (typeof product === 'object' && product !== null) {
    if (Array.isArray(product)) {
      if (product.length) {
        if (product[0].specifications) {
          // variations array sent as product param
          product.forEach(variation => values.concat(specValues(variation, gridId)))
        } else if (product[0].text) {
          // spec values list sent as product param
          values = product
        }
      }
    } else {
      // probably the product object from instance data
      // work for product or specific variation product
      let { specifications } = product
      if (specifications) {
        for (let id in specifications) {
          if (specifications.hasOwnProperty(id) && id === gridId) {
            // specification found
            values = specifications[gridId]
          }
        }
      }

      if (values && !values.length && Array.isArray(grids) && grids.length) {
        // try with grids list from preloaded data
        let specs, grid
        // match the grid by ID
        if (grids && (grid = grids.find(grid => grid.grid_id === gridId)) && grid.options) {
          // mounts specs array from grid options list
          specs = grid.options.map(option => {
            // try color RGB value or use default option ID
            let value
            if (option.colors && option.colors.length) {
              value = option.colors[0]
            } else {
              value = option.option_id
            }

            // spec options with text and value
            return {
              text: option.text,
              value
            }
          })
        }
        return specValues(specs, gridId)
      }
    }
  }
  return values
}

/**
 * @method
 * @memberof ecomUtils
 * @name specValues
 * @description Returns array of spec objects for specified grid.
 * @param {object|array} product - Product body or array of variation objects
 * @param {string} gridId - Grid ID string such as 'color'
 * @param {array} [grids] - List of grid objects
 * @returns {array}
 *
 * @example
 * // TODO
 *
 * @example
 * // Importing this method standalone
 * import specValues from '@ecomplus/utils/dist/methods/spec-values'
 */

export default specValues
