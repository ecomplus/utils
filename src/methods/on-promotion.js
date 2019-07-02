const onPromotion = product => {
  if (typeof product !== 'object' || product === null) {
    // prevent fatal error
    console.error(new Error('`product` must be an object'))
    return false
  }

  let promoDates = product.price_effective_date
  if (promoDates) {
    let now = new Date()
    if (promoDates.start) {
      // start date and time in ISO 8601
      if (new Date(promoDates.start) > now) {
        return false
      }
    }
    if (promoDates.end) {
      // promotion end date and time in ISO 8601
      if (new Date(promoDates.end) < now) {
        return false
      }
    }
  }
  // default to no promotion
  return !!(product.base_price > product.price)
}

/**
 * @method
 * @memberof ecomUtils
 * @name onPromotion
 * @description Check if item has promotional price.
 * @param {object} product - Item (product or variation) body object
 * @returns {boolean}
 *
 * @example
 * // Simple test with no promotion date range
 * // Full object ref.: https://developers.e-com.plus/docs/api/#/store/products/
 * ecomUtils.onPromotion({ sku: 'TEST', name: 'Test', price: 140.56 })
 * // => false
 * ecomUtils.onPromotion({ price: 100, base_price: 110 })
 * // => true
 * ecomUtils.onPromotion({ price: 190, base_price: 170 })
 * // => false
 *
 * @example
 * // With date range
 * const product = { sku: 'abc', price: 20.9, base_price: 30.9, price_effective_date: {} }
 * product.price_effective_date.start = '2019-06-01T16:03:45.035Z'
 * ecomUtils.onPromotion(product)
 * // => true
 * product.price_effective_date.end = '2019-06-10T16:03:45.035Z'
 * ecomUtils.onPromotion(product)
 * // => false
 * product.price_effective_date.end = '2021-08-12T00:00:00.000Z'
 * ecomUtils.onPromotion(product)
 * // => true
 * product.price_effective_date.start = '2021-01-01T00:00:00.000Z'
 * ecomUtils.onPromotion(product)
 * // => false
 *
 * @example
 * // Importing this method standalone
 * import onPromotion from '@ecomplus/utils/dist/methods/on-promotion'
 */

export default onPromotion
