import { DEFAULT_LANG } from './../lib/constants'
import _config from './../lib/config'

/**
 * @method
 * @memberof ecomUtils
 * @name i18n
 * @description Get translated string by lang code from dictionary object.
 * @param {object} dictionary - Dictionary object containing string in multiple langs
 * @param {string} [lang=$ecomConfig.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
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
 * ecomUtils.i18n({ en_us: { hello: 'Hello', world: 'World' }, pt_br: { hello: 'Olá' }}, 'pt_br')
 * // => { hello: 'Olá' }
 *
 * @example
 * // You can also set the configured lang first
 * $ecomConfig.set('lang', 'pt_br')
 * // Then call `i18n` without expliciting lang
 * ecomUtils.i18n({ en_us: 'Hello', pt_br: 'Olá' })
 * // => Olá
 */
const i18n = (dictionary, lang = _config.get('lang')) => {
  if (typeof dictionary === 'object' && dictionary !== null) {
    const prop = Object.keys(dictionary)[0]
    if (/^[a-z]{2}(_[a-z]{2})?$/.test(prop)) {
      // supposed to be object of languages options
      return dictionary[lang] || dictionary[DEFAULT_LANG] || dictionary[prop]
    } else {
      // recursive
      const localDictionary = Array.isArray(dictionary) ? [] : {}
      for (const prop in dictionary) {
        if (dictionary[prop] !== undefined) {
          localDictionary[prop] = i18n(dictionary[prop], lang)
        }
      }
      return localDictionary
    }
  }
  return dictionary
}

export default i18n
