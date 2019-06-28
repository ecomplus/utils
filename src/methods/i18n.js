import { DEFAULT_LANG } from './../lib/constants'
import config from './../lib/config'

/**
 * Get translated string by lang code from dictionary object.
 * @memberof ecomUtils
 * @param {object} dictionary - Dictionary object containing string in multiple langs
 * @param {string} [lang=config.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
 * @returns {string|object}
 *
 * @example
 * ecomUtils.i18n({ en_us: 'Hello', pt_br: 'Olá' })
 * // 'Hello'
 * ecomUtils.i18n({ en_us: 'Hello', pt_br: 'Olá' }, 'pt_br')
 * // 'Olá'
 * ecomUtils.i18n({ hello: { en_us: 'Hello', pt_br: 'Olá' }})
 * // { hello: 'Hello' }
 *
 * @example
 * // Import this method standalone
 * import i18n from '@ecomplus/utils/dist/methods/i18n'
 */

const i18n = (dictionary, lang = config.get('lang')) => {
  if (typeof dictionary === 'object' && dictionary !== null) {
    let prop = Object.keys(dictionary)[0]
    if (typeof dictionary[prop] === 'string') {
      // object with strings
      // supposed to be object of languages options
      return dictionary[lang] || dictionary[DEFAULT_LANG] || dictionary[prop]
    } else {
      // recursive
      for (let prop in dictionary) {
        if (dictionary.hasOwnProperty(prop)) {
          dictionary[prop] = i18n(dictionary[prop], lang)
        }
      }
    }
  }
  return dictionary
}

export default i18n
