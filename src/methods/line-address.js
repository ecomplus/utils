import _config from './../lib/config'

/**
 * @method
 * @memberof ecomUtils
 * @name lineAddress
 * @description Returns full address string from customer object.
 * @param {Object.<string, *>} address - Address object or customer body object
 * @param {string} [noNumberString] - String to show when address has no number
 * @param {string} [lang=$ecomConfig.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
 * @returns {string}
 *
 * @example
 * const address = { 'zip': '35800-999', 'name': 'Jonh Lock', 'street': 'Rua Europa', 'number': 900, 'borough': 'Santa Lucia', 'city': 'Bom Despacho', 'province_code': 'MG'}
 * const lang = 'pt_br'
 * ecomUtils.lineAddress(address, lang)
 * // => 'Rua Europa, 900, Santa Lucia | Bom Despacho | MG'
 */
const lineAddress = (address, noNumberString, lang = _config.get('lang')) => {
  // parse to full address string
  if (address) {
    let addresses = address.addresses
    if (Array.isArray(addresses)) {
      // customer body object received as param
      address = addresses.filter(addr => addr.default)[0] || addresses[0]
    }

    if (typeof address === 'object' && address !== null) {
      if (address.line_address) {
        return address.line_address
      }

      // concat address object properties
      let { street, number, complement, borough, city } = address
      let province = address.province_code || address.province
      let lineAddress
      if (street) {
        lineAddress = street + ', ' + number ||
          // address without number
          noNumberString || (lang === 'pt_br' ? 'S/N' : '-')
        if (complement) {
          lineAddress += ' - ' + complement
        }
        if (borough) {
          lineAddress += ', ' + borough
        }
      } else if (borough) {
        lineAddress = borough
      }

      // add city and state
      if (city) {
        lineAddress += ' | ' + city
      }
      if (province) {
        lineAddress += ' | ' + province
      }
      return lineAddress
    }
  }
  // fallback returning empty string
  return ''
}

export default lineAddress
