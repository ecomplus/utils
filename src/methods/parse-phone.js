/**
 * @method
 * @memberof ecomUtils
 * @name parsePhone
 * @description Returns customer phone object from string.
 * @param {string} phoneStr - Phone string
 * @returns {Object.<string, *>}
 *
 * @example
 * // Phone string is fixed and parsed to object with `number`
 * ecomUtils.parsePhone('31992980000')
 * // => { number: '31992980000' }
 * ecomUtils.parsePhone('31 99298-1000')
 * // => { number: '31992981000' }
 *
 * @example
 * // Country code is optional and identified by + signal
 * ecomUtils.parsePhone('+55 31992980000')
 * // => { country_code: 55, number: '31992980000' }
 */
const parsePhone = phoneStr => {
  // parse phone string to { number, country_code }
  const phoneObj = {}
  if (typeof phoneStr === 'string') {
    // fix string to only digits first
    phoneStr = phoneStr.replace(/[^\d+]/g, '')
    if (phoneStr.charAt(0) === '+') {
      phoneObj.country_code = parseInt(phoneStr.substr(1, 2), 10)
      phoneObj.number = phoneStr.substr(3)
    } else {
      phoneObj.number = phoneStr
    }
  }
  return phoneObj
}

export default parsePhone
