/**
 * https://github.com/ecomclub/ecomplus-utils
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

import _self from './lib/self'
import _config from './lib/config'

import i18n from './methods/i18n'
import name from './methods/name'
import alphabeticalSort from './methods/alphabetical-sort'
import price from './methods/price'
import onPromotion from './methods/on-promotion'
import formatMoney from './methods/format-money'
import formatDate from './methods/format-date'
import findByProperty from './methods/find-by-property'
import findBySlug from './methods/find-by-slug'
import findByName from './methods/find-by-name'
import filterByParentSlug from './methods/filter-by-parent-slug'
import minQuantity from './methods/min-quantity'
import inStock from './methods/in-stock'
import searchedItems from './methods/searched-items'
import categoriesList from './methods/categories-list'
import specValues from './methods/spec-values'
import specTextValue from './methods/spec-text-value'
import specValueByText from './methods/spec-value-by-text'
import variationsGrids from './methods/variations-grids'
import gridTitle from './methods/grid-title'
import img from './methods/img'
import imgSizes from './methods/img-sizes'
import nickname from './methods/nickname'
import lineAddress from './methods/line-address'
import objectIdPad from './methods/object-id-pad'
import randomObjectId from './methods/random-object-id'

/**
 * JS utility functions for E-Com Plus (not only) related apps.
 * @module @ecomplus/utils
 * @exports {@link ecomUtils}
 *
 * @example
 * // Import all utility methods with ES
 * import ecomUtils from '@ecomplus/utils'
 *
 * @example
 * // With CommonJS
 * const ecomUtils = require('@ecomplus/utils')
 *
 * @example
 * <!-- Global `ecomUtils` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/utils"></script>
 */

export {
  _self,
  _config,
  i18n,
  name,
  alphabeticalSort,
  price,
  onPromotion,
  formatMoney,
  formatDate,
  findByProperty,
  findBySlug,
  findByName,
  filterByParentSlug,
  minQuantity,
  inStock,
  searchedItems,
  categoriesList,
  specValues,
  specTextValue,
  specValueByText,
  variationsGrids,
  gridTitle,
  img,
  imgSizes,
  nickname,
  lineAddress,
  objectIdPad,
  randomObjectId
}

/**
 * @namespace ecomUtils
 */
