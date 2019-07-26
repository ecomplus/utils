const phone = customer => {
  // empty string by default
  let phoneString = ''
  if (typeof customer === 'object' && customer !== null) {
    let phone = Array.isArray(customer.phones)
      // use first customer phone by default
      ? customer.phones[0]
      : customer
    if (phone && phone.number) {
      if (phone.country_code) {
        phoneString = `+${phone.country_code} `
      }
      phoneString += phone.number
    }
  }
  return phoneString
}

/**
 * @method
 * @memberof ecomUtils
 * @name phone
 * @description Returns phone string from customer body or phone object.
 * @param {object} customer - Customer body object or phone object with number property
 * @returns {string}
 *
 * @example
 * const customer = { 'number': '31992980000'}
 * ecomUtils.phone(customer)
 * // => '31992980000'
 *
 * @example
 * // Importing this method standalone
 * import phone from '@ecomplus/utils/dist/methods/phone'
 */

export default phone
