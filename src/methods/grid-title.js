import config from './../lib/config'
import name from './name'

const gridTitle = (gridId, grids, lang = config.get('lang')) => {
  let grid
  if (Array.isArray(grids)) {
    // match the grid by ID
    grid = grids.find(grid => grid.grid_id === gridId)
  } else {
    console.error('`grids` must be array to get grid title')
  }
  // returns grid name or fallback to received grid ID by default
  return grid ? name(grid, lang) : gridId
}

/**
 * @method
 * @memberof ecomUtils
 * @name gridTitle
 * @description Returns grid title by grid ID and lang.
 * @param {string} gridId - The unique ID of the grid ('colors', 'size'...)
 * @param {array} grids - List of grid objects
 * @param {string} [lang=config.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
 * @returns {string}
 *
 * @example
 * const gridid = 'canais'
 * const grid1 = {title: 'Canais', grid_id: 'canais'}
 * const grid2 = {title: 'Cores', grid_id: 'colors'}
 * const grid3 = {title: 'Tamanho', grid_id: 'size'}
 * const array = [grid1, grid2, grid3]
 * const lang = 'pt_br'
 * ecomUtils.gridTitle(gridid, array, lang)
 * // => "Canais"
 *
 * @example
 * // Importing this method standalone
 * import gridTitle from '@ecomplus/utils/dist/methods/grid-title'
 */

export default gridTitle
