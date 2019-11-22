import env from './env'

import {
  DEFAULT_LANG,
  DEFAULT_CURRENCY,
  DEFAULT_CURRENCY_SYMBOL,
  DEFAULT_COUNTRY_CODE,
  DEFAULT_STORE_ID,
  DEFAULT_STORE_OBJECT_ID
} from './constants'

// check for predefined config options
const getConfig = prop => {
  if (typeof document === 'object' && document) {
    // DOM object
    // try to get config from HTML meta tags
    const metas = document.getElementsByTagName('meta')
    for (let i = 0; i < metas.length; i++) {
      // parse prop name to kebab case and check meta tag name
      if (metas[i].getAttribute('name') === prop.replace(/_/g, '-')) {
        const val = metas[i].getAttribute('content')
        // returns int for Store ID or string for others
        return prop === 'ecom_store_id' ? parseInt(val, 10) : val
      }
    }
  }
  // try to get config prop from env (global) object
  return env[prop.toUpperCase()]
}

/**
 * @namespace $ecomConfig
 * @description
 * General config values for E-Com Plus apps.
 * It tries to get values from metatags or `window` on browser,
 * or `proccess.env` on Node.js environments,
 * when undefineds it uses
 * [predefined constants]{@link https://github.com/ecomclub/ecomplus-utils/blob/master/src/lib/constants.js}.
 * <br><br>
 * Check all common config properties on
 * [`src/lib/config.js`]{@link https://github.com/ecomclub/ecomplus-utils/blob/master/src/lib/config.js}
 * file.
 *
 * @example

// Preset config on browser with HTML meta tags
<meta name="ecom-store-id" content="1011">
<meta name="ecom-store-object-id" content="5b1abe30a4d4531b8fe40725">
<meta name="ecom-lang" content="pt_br">

* @example

// Preset config on browser with JS window
window.ECOM_STORE_ID = 1011
window.ECOM_STORE_OBJECT_ID = '5b1abe30a4d4531b8fe40725'
window.ECOM_LANG = 'pt_br'

 * @example

// Preset config on Node.js env
process.env.ECOM_STORE_ID = 1011
process.env.ECOM_STORE_OBJECT_ID = '5b1abe30a4d4531b8fe40725'
process.env.ECOM_LANG = 'pt_br'

 */

// setup config object
const config = {}
;[
  'lang',
  'currency',
  'currency_symbol',
  'country_code',
  'store_id',
  'store_object_id'
].forEach(prop => {
  config[prop] = getConfig('ecom_' + prop)
})

// exports fuctions to get and set config props
export default {

  /**
   * @memberof $ecomConfig
   * @description Get the stored value for specified config property.
   * @param {string} prop - Configuration property
   * @example
   * $ecomConfig.get('store_id')
   * // => 1011
   * $ecomConfig.get('currency')
   * // => 'USD'
   * $ecomConfig.get('currency_symbol')
   * // => '$'
   */

  get (prop) {
    // try to get stored value from config object first
    const value = config[prop]
    if (value !== undefined && value !== null && value !== '') {
      return value
    } else {
      // return default value from constants
      switch (prop) {
        case 'lang': return DEFAULT_LANG
        case 'currency': return DEFAULT_CURRENCY
        case 'currency_symbol': return DEFAULT_CURRENCY_SYMBOL
        case 'country_code': return DEFAULT_COUNTRY_CODE
        case 'store_id': return DEFAULT_STORE_ID
        case 'store_object_id': return DEFAULT_STORE_OBJECT_ID
        // 'channel_id', 'page_resource', 'page_object_id'
      }
    }
    return null
  },

  /**
   * @memberof $ecomConfig
   * @description Save the value for specified config property.
   * @param {string} prop - Configuration property
   * @param {string} value - New prop value
   * @example
   * $ecomConfig.set('store_id', 1012)
   */

  set (prop, value) {
    // save prop value on config object
    config[prop] = value
  }
}
