import specValues from './spec-values'

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
 * const product = { 'name': 'Cruzeiro 2018', 'variations': [ { 'name': 'Cruzeiro 2018 / P / azul', 'specifications': { 'colors': [ { 'text': 'azul', 'value': '#3300ff' }, { 'text': 'vermelho', 'value': '#ff0000' } ] } } ] }
 * const gridId = 'colors'
 * const specText = 'vermelho'
 * const grid1 = { 'grid_id': 'size', 'title': 'Tamanho', 'options': [ { 'text': 'P', 'option_id': 'pp' } ] }
 * const grid2 = { 'title': 'Cores', 'grid_id': 'colors', 'options': [ { 'text': 'vermelho', 'option_id': 'vermelho', 'colors': [ '#ff0000' ] }, { 'text': 'azul', 'option_id': 'azul', 'colors': [ '#3300ff' ] } ] }
 * const grid3 = { 'title': 'Conector', 'grid_id': 'conector', 'options': [ { 'text': 'USB', 'option_id': 'usb' } ] }
 * const grids = [ grid1, grid2, grid3 ]
 * ecomUtils.specValueByText(product, specText, gridId , grids)
 * // => '#ff0000'
 */
const specValueByText = (product, specText, gridId, grids) => {
  const values = specValues(product, gridId, grids)
  for (let i = 0; i < values.length; i++) {
    if (values[i].text === specText) {
      return values[i].value
    }
  }
  // any spec found for received grid and option text
  return undefined
}

export default specValueByText
