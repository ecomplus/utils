import _config from './../lib/config'

/**
 * @method
 * @memberof ecomUtils
 * @name parseDate
 * @description Returns customer birth date object from string.
 * @param {string} dateStr - Formatted date string
 * @param {string} [countryCode=$ecomConfig.get('country_code')] - Country ISO 3166-1 alpha-2 code
 * @returns {Object.<string, *>}
 *
 * @example
 * // Date string is fixed to digits only and parsed to E-Com Plus APIs date object
 * ecomUtils.parseDate('1990-01-12')
 * // => { day: 12, month: 1, year: 1990 }
 * ecomUtils.parseDate('10/02/1997', 'BR')
 * // => { day: 10, month: 2, year: 1997 }
 *
 * @example
 * // You can also set the configured country code first
 * $ecomConfig.set('country_code', 'BR')
 * // Then call `parseDate` without expliciting country code again
 * ecomUtils.parseDate('10/02/1997')
 * // => { day: 10, month: 2, year: 1997 }
 */
const parsePhone = (dateStr, countryCode = _config.get('country_code')) => {
  // parse country formatted date string to { day, month, year }
  let day, month, year
  if (typeof dateStr === 'string') {
    const dateNumber = (start, ln) => parseInt(dateStr.substr(start, ln), 10)
    // fix date string to digits only first
    dateStr = dateStr.replace(/[\D]/g, '')
    if (countryCode === 'BR') {
      day = dateNumber(0, 2)
      month = dateNumber(2, 2)
      year = dateNumber(4, 4)
    } else {
      day = dateNumber(6, 2)
      month = dateNumber(4, 2)
      year = dateNumber(0, 4)
    }
  }
  return { day, month, year }
}

export default parsePhone
