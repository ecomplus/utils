import formatDate from './format-date'

const birthDate = customer => {
  if (typeof customer === 'object' && customer !== null) {
    let birth = customer.birth_date || customer
    if (birth) {
      let { day, month, year } = birth
      if (day && month && year) {
        // has complete customer birth date
        // mount Date object and return formatted date string
        return formatDate(new Date(year, month - 1, day))
      }
    }
  }
  // returns empty string by default
  return ''
}

/**
 * @method
 * @memberof ecomUtils
 * @name birthDate
 * @description Returns birth date formatted string from customer body object.
 * @param {object} customer - Customer body object or birth date object with day, month and year
 * @returns {string}
 *
 * @example
 * // costumer will be the parameter of this function and as result will return his birth date
 * // const customer = object (body customer)
 * // customer can be like:
 * const costumer = { main_email: 'joejonh@me.com', birth_date: { year: 1990, month: 10, day: 1 } }
 * ecomUtils.birthDate(costumer)
 * // => "10/1/1990"
 *
 * @example
 * // Importing this method standalone
 * import birthDate from '@ecomplus/utils/dist/methods/birth-date'
 */

export default birthDate
