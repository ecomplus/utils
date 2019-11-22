const fullName = customer => {
  // customer full name string
  let name = ''
  if (customer) {
    const nameObj = customer.name
    if (nameObj && nameObj.given_name) {
      // concat customer name parts
      name += nameObj.given_name
      if (nameObj.middle_name) {
        name += ' ' + nameObj.middle_name
      }
      if (nameObj.family_name) {
        name += ' ' + nameObj.family_name
      }
    }
  }
  // returns empty string when name is undefined
  return name
}

/**
 * @method
 * @memberof ecomUtils
 * @name fullName
 * @description Returns user full name from customer object.
 * @param {object} customer - Customer body object
 * @returns {string}
 *
 * @example
 * const customer = { 'name': { 'given_name': 'Jonh', 'family_name': 'Lock' }, 'display_name': 'Locky' }
 * ecomUtils.fullName(customer)
 * // => 'Jonh Lock'
 */

export default fullName
