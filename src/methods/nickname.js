/**
 * @method
 * @memberof ecomUtils
 * @name nickname
 * @description Returns user name to display from customer object.
 * @param {object} customer - Customer body object
 * @returns {string}
 *
 * @example
 * const customer = { 'name': { 'given_name': 'Jonh', 'family_name': 'Lock' }, 'display_name': 'Locky' }
 * ecomUtils.nickname(customer)
 * // => 'Locky'
 */
const nickname = customer => {
  // customer name to display
  if (customer) {
    if (customer.display_name) {
      return customer.display_name
    } else if (customer.name && customer.name.given_name) {
      // try to use the "first name" of this user
      return customer.name.given_name
    }
  }
  // returns empty string when name is undefined
  return ''
}

export default nickname
