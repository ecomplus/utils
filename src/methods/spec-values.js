/**
 * @method
 * @memberof ecomUtils
 * @name specValues
 * @description Returns array of spec objects for specified grid.
 * @param {Object.<string, *>|Array} product - Product body or array of variation objects
 * @param {string} gridId - Grid ID string such as 'color'
 * @param {Array} [grids] - List of grid objects
 * @returns {Array}
 *
 * @example
 * const product = { 'name': 'Cruzeiro 2019', 'variations': [ { 'name': 'Cruzeiro 2019 / P / azul', 'specifications': { 'colors': [ { 'text': 'azul', 'value': '#3300ff' } ] } } ] }
 * const gridId = 'colors'
 * const grid1 = { 'grid_id': 'size', 'title': 'Tamanho', 'options': [ { 'text': 'P', 'option_id': 'pp' } ] }
 * const grid2 = { 'title': 'Cores', 'grid_id': 'colors', 'options': [ { 'text': 'vermelho', 'option_id': 'vermelho', 'colors': [ '#ff0000' ] }, { 'text': 'azul', 'option_id': 'azul', 'colors': [ '#3300ff' ] } ] }
 * const grid3 = { 'title': 'Conector', 'grid_id': 'conector', 'options': [ { 'text': 'USB', 'option_id': 'usb' } ] }
 * const grids = [ grid1, grid2, grid3 ]
 * ecomUtils.specValues(product, gridId, grids)
 * // => [{text: "vermelho", value: "#ff0000"}, {text: "azul", value: "#3300ff"}]
 */
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
          product.forEach(variation => {
            values = values.concat(specValues(variation, gridId, grids))
          })
        } else if (product[0].text) {
          // spec values list sent as product param
          values = product
        }
      }
    } else {
      // probably the product object from instance data
      // work for product or specific variation product
      const { specifications } = product
      if (specifications) {
        for (const id in specifications) {
          if (specifications[id] && id === gridId) {
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

export default specValues
