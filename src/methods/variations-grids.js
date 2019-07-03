import specTextValue from './spec-text-value'

const variationsGrids = (product, filterGrids, inStockOnly, delimiter) => {
  let grids = {}
  if (product && Array.isArray(product.variations)) {
    product.variations.forEach(variation => {
      if (inStockOnly && variation.quantity <= 0) {
        // out of stock
        return
      }
      let specifications = variation.specifications
      // abstraction to get spec text value
      let specValue = grid => specTextValue(variation, grid, delimiter)

      if (specifications) {
        // check if current variation specs match with filters
        if (filterGrids) {
          for (let filter in filterGrids) {
            if (filterGrids.hasOwnProperty(filter)) {
              if (!specifications[filter] || specValue(filter) !== filterGrids[filter]) {
                // does not match filtered grid
                // skip current variation
                return
              }
            }
          }
        }

        // get values from each variation spec
        for (let grid in specifications) {
          if (specifications.hasOwnProperty(grid)) {
            let text = specValue(grid)
            if (!grids.hasOwnProperty(grid)) {
              grids[grid] = []
            } else if (grids[grid].indexOf(text) !== -1) {
              // current spec value has already been added
              continue
            }
            grids[grid].push(text)
          }
        }
      }
    })
  }
  // returns parsed grid object
  return grids
}

/**
 * @method
 * @memberof ecomUtils
 * @name variationsGrids
 * @description Parse variations specifications to one object only.
 * @param {object} product - Product body object
 * @param {object} [filterGrids] - Filter object with grids and searched values
 * @param {boolean} [inStockOnly] - True to consider only variations with positive stock quantity
 * @param {string} [delimiter=', '] - Delimiter between each specification
 * @returns {object}
 *
 * @example
 * // TODO
 *
 * @example
 * // Importing this method standalone
 * import variationsGrids from '@ecomplus/utils/dist/methods/variations-grids'
 */

export default variationsGrids
