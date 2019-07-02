/**
 * https://github.com/ecomclub/ecomplus-utils
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

import self from './lib/self'
import config from './lib/config'

import i18n from './methods/i18n'
import name from './methods/name'
import price from './methods/price'
import onPromotion from './methods/on-promotion'
import formatMoney from './methods/format-money'
import findByProperty from './methods/find-by-property'
import findBySlug from './methods/find-by-slug'
import filterByParentSlug from './methods/filter-by-parent-slug'
import minQuantity from './methods/min-quantity'
import inStock from './methods/in-stock'
import searchedItems from './methods/searched-items'

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
  self,
  config,
  i18n,
  name,
  price,
  onPromotion,
  formatMoney,
  findByProperty,
  findBySlug,
  filterByParentSlug,
  minQuantity,
  inStock,
  searchedItems
}

/**
 * @namespace ecomUtils
 */
