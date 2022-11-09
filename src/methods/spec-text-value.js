import specValues from './spec-values'

/**
 * @method
 * @memberof ecomUtils
 * @name specTextValue
 * @description Parse specifications array of nested objects to string.
 * @param {object|array} product - Product body or array of variation objects
 * @param {string} gridId - Grid ID string such as 'color'
 * @param {array} [grids] - List of grid objects
 * @param {string} [delimiter=', '] - Delimiter between each specification
 * @returns {array|null}
 *
 * @example
 * const product = { 'name': 'Cruzeiro 2019', 'variations': [ { 'name': 'Cruzeiro 2019 / P / azul', 'specifications': { 'colors': [ { 'text': 'azul', 'value': '#3300ff' }, { 'text': 'vermelho', 'value': '#ff0000' } ] } } ] }
 * const gridId = 'colors'
 * const delimiter = ','
 * const grid1 = { 'grid_id': 'size', 'title': 'Tamanho', 'options': [ { 'text': 'P', 'option_id': 'pp' } ] }
 * const grid2 = { 'title': 'Cores', 'grid_id': 'colors', 'options': [ { 'text': 'vermelho', 'option_id': 'vermelho', 'colors': [ '#ff0000' ] }, { 'text': 'azul', 'option_id': 'azul', 'colors': [ '#3300ff' ] } ] }
 * const grid3 = { 'title': 'Conector', 'grid_id': 'conector', 'options': [ { 'text': 'USB', 'option_id': 'usb' } ] }
 * const grids = [ grid1, grid2, grid3 ]
 * ecomUtils.specValues(product, gridId, grids, delimiter)
 * // => [{text: 'vermelho', value: '#ff0000'}, {text: 'azul', value: '#3300ff'}]
 */
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

export default specTextValue
