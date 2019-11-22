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
 * // Only param product
 * const product = { 'name': 'Cruzeiro 2019', 'variations': [
 * { 'name': 'Cruzeiro 2019 / P', 'quantity': 10, 'specifications': { 'size': [ { 'text': 'P', 'value': 's' } ] } },
 * { 'name': 'Cruzeiro 2019 / M', 'quantity': 10, 'specifications': { 'size': [ { 'text': 'M', 'value': 'm' } ] } },
 * { 'name': 'Cruzeiro 2019 / G', 'specifications': { 'size': [ { 'text': 'G', 'value': 'l' } ] }, 'quantity': 0 }
 * ] }
 * ecomUtils.variationsGrids(product)
 * // => {size: [ 'P', 'M', 'G' ]}
 * // You can also check for product stock to get only variations with available quantity
 * // Same product above
 * const inStockOnly = true
 * ecomUtils.variationsGrids(product, {}, inStockOnly)
 * // => {size: [ 'P', 'M' ]}
 */

export default variationsGrids
