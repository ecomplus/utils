/*!
 * @ecomplus/utils
 * (c) E-Com Club <ti@e-com.club>
 * Released under the MIT License.
 */

/**
 * JS utility functions for E-Com Plus (not only) related apps.
 * {@link https://github.com/ecomclub/ecomplus-utils GitHub}
 *
 * @module @ecomplus/utils
 * @author E-Com Club <ti@e-com.club>
 * @return {@link ecomUtils}
 * @see ecomUtils
 * @see $ecomConfig
 *
 * @example
 * // Import all utility methods with ES
 * import ecomUtils from '@ecomplus/utils'
 *
 * @example
 * // Named ES imports with some sample methods
 * import {
 *   i18n,
 *   formatMoney,
 *   minQuantity,
 *   price,
 *   // ...
 * } from '@ecomplus/utils'
 *
 * @example
 * // Import only config object
 * import { $ecomConfig } from '@ecomplus/utils'
 *
 * @example
 * // With CommonJS
 * const ecomUtils = require('@ecomplus/utils')
 *
 * @example
 * // CommonJS require standalone methods
 * const i18n = require('@ecomplus/utils/dist/methods/i18n')
 * const formatMoney = require('@ecomplus/utils/dist/methods/format-money')
 * // ...
 * // require(`@ecomplus/utils/dist/methods/${kebab-case-method-name}`)
 *
 * @example
 * <!-- Globals `ecomUtils` and `$ecomConfig` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/utils/dist/ecom-utils.polyfill.min.js"></script>
 */

import * as ecomUtils from './ecom-utils'

if (typeof window === 'object' && window && window.$ecomConfig === undefined) {
  window.$ecomConfig = ecomUtils.$ecomConfig
}

export default ecomUtils

// named exports off all methods
export * from './ecom-utils'
