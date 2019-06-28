import global from './global'
import {
  DEFAULT_LANG,
  DEFAULT_CURRENCY
} from './constants'

// check for predefined config options
const getConfig = prop => {
  if (typeof document === 'object' && document) {
    // DOM object
    // try to get config from HTML meta tags
    const metas = document.getElementsByTagName('meta')
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === prop) {
        return metas[i].getAttribute('content')
      }
    }
  }
  // try to get config prop from global object
  return global[prop]
}

// setup config object
const config = {
  lang: getConfig('lang') || DEFAULT_LANG,
  currency: getConfig('currency') || DEFAULT_CURRENCY
}

// exports fuctions to get and set config props
export default {
  get (prop) {
    return config[prop]
  },
  set (prop, name) {
    config[prop] = name
  }
}
