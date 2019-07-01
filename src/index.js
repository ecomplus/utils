/**
 * https://github.com/ecomclub/ecomplus-utils
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

import { name, version } from './../package.json'

import config from './lib/config'

import i18n from './methods/i18n'
import price from './methods/price'
import onPromotion from './methods/on-promotion'
import formatMoney from './methods/format-money'
import findByProperty from './methods/find-by-property'
import findBySlug from './methods/find-by-slug'
import filterByParentSlug from './methods/filter-by-parent-slug'

const self = name + '@' + version

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
  price,
  onPromotion,
  formatMoney,
  findByProperty,
  findBySlug,
  filterByParentSlug
}

/**
 * @namespace ecomUtils
 */
