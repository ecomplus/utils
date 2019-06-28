/**
 * https://github.com/ecomclub/ecomplus-utils
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

import { name, version } from './../package.json'

import i18n from './methods/i18n'
import currency from './methods/currency'

const _self = name + '@' + version

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
  i18n,
  currency
}

/**
 * @namespace ecomUtils
 */
