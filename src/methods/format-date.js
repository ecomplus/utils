import _config from './../lib/config'

/**
 * @method
 * @memberof ecomUtils
 * @name formatDate
 * @description Parse date to locale formatted string.
 * @param {string|Object.<string, *>} date - Date object or ISO string, or body object (order, product...)
 * @param {string} [lang=$ecomConfig.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
 * @param {Object.<string, *>} [options] - Options object for `toLocaleDateString` function
 * @returns {string}
 *
 * @example
 * const notification = { datetime: '2019-06-19T03:35:52.811Z', content: {api_event: {resource: 'orders'}}}
 * ecomUtils.formatDate(notification, 'pt-br')
 * // => "19/06/2019"
 */
const formatDate = (date, lang = _config.get('lang'), options) => {
  if (typeof date === 'object' && date !== null) {
    if (typeof date.getTime !== 'function') {
      // expected to be a body (product, category, brand...) object
      date = new Date(date.datetime || date.updated_at || date.created_at)
    }
  } else {
    // parse to Date object
    date = new Date(date)
  }

  if (!isNaN(date.getTime())) {
    try {
      // return locale date string
      // lang code format: pt-br, en-us...
      return date.toLocaleDateString(lang.replace('_', '-'), options)
    } catch (err) {
      console.error(err)
    }
  }
  // fallback returning empty string by default
  return ''
}

export default formatDate
