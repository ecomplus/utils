import { DEFAULT_LANG } from './../lib/constants'
import config from './../lib/config'

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

/**
 * @method
 * @memberof ecomUtils
 * @name i18n
 * @description Get translated string by lang code from dictionary object.
 * @param {object} dictionary - Dictionary object containing string in multiple langs
 * @param {string} [lang=config.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
 * @returns {string|object}
 *
 * @example
 * // With simple dictionary objects
 * ecomUtils.i18n({ en_us: 'Hello', pt_br: 'Olá' })
 * // => 'Hello'
 * ecomUtils.i18n({ en_us: 'Hello', pt_br: 'Olá' }, 'pt_br')
 * // => 'Olá'
 *
 * @example
 * // With nested objects
 * ecomUtils.i18n({ hello: { en_us: 'Hello', pt_br: 'Olá' }})
 * // => { hello: 'Hello' }
 * ecomUtils.i18n({ hello: { en_us: 'Hello', pt_br: 'Olá' }, world: { en_us: 'World' }}, 'pt_br')
 * // => { hello: 'Olá', world: 'World' }
 *
 * @example
 * // You can also set the configured lang first
 * ecomUtils.config.set('lang', 'pt_br')
 * // Then call `i18n` without expliciting lang
 * ecomUtils.i18n({ en_us: 'Hello', pt_br: 'Olá' })
 * // => Olá
 *
 * @example
 * // Importing this method standalone
 * import i18n from '@ecomplus/utils/dist/methods/i18n'
 */

export default i18n
