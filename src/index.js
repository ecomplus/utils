/**
 * https://github.com/ecomclub/ecomplus-utils
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 *
 * @description
 * JS utility functions for E-Com Plus (not only) related apps.
 * @module @ecomplus/utils
 * @see ecomUtils
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
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/utils/dist/ecom-utils.polyfill.min.js"></script>
 */

import * as ecomUtils from './ecom-utils'

export default ecomUtils

// named exports off all methods
export * from './ecom-utils'
