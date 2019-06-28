import global from './global'

import {
  DEFAULT_LANG,
  DEFAULT_CURRENCY,
  DEFAULT_CURRENCY_SYMBOL
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
        return metas[i].getAttribute('content')
      }
    }
  }
  // try to get config prop from global object
  return global[prop]
}

// setup config object
const config = {}
;[
  'lang',
  'currency',
  'currency_symbol'
].forEach(prop => {
  config[prop] = getConfig(prop)
})

// exports fuctions to get and set config props
export default {
  get (prop) {
    // try to get stored value from config object first
    let value = config[prop]
    if (value !== undefined && value !== null && value !== '') {
      return value
    } else {
      // return default value from constants
      switch (prop) {
        case 'lang': return DEFAULT_LANG
        case 'currency': return DEFAULT_CURRENCY
        case 'currency_symbol': return DEFAULT_CURRENCY_SYMBOL
      }
    }
    return null
  },

  set (prop, value) {
    // save prop value on config object
    config[prop] = value
  }
}
