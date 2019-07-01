import onPromotion from './on-promotion'

const price = itemBody => {
  // prefer promotional price
  if (!itemBody.hasOwnProperty('base_price') || onPromotion(itemBody)) {
    // sale price
    return itemBody.price || 0
  } else {
    return itemBody.base_price || 0
  }
}

/**
 * @method
 * @memberof ecomUtils
 * @name price
 * @description Returns current price from item object.
 * @param {object} itemBody - Item (product or variation) body object
 * @returns {number}
 *
 * @example
 * // Prices with no promotion date range
 * // Full object ref.: https://developers.e-com.plus/docs/api/#/store/products/
 * ecomUtils.price({ sku: 'TEST', name: 'Test', price: 140.56 })
 * // => 140.56
 * ecomUtils.price({ price: 100, base_price: 110 })
 * // => 100
 * ecomUtils.price({ price: 190, base_price: 170 })
 * // => 190
 *
 * @example
 * // With promotion date range
 * const product = { sku: 'abc', price: 20.9, base_price: 30.9, price_effective_date: {} }
 * product.price_effective_date.start = '2019-06-01T16:03:45.035Z'
 * ecomUtils.price(product)
 * // => 20.9
 * product.price_effective_date.end = '2019-06-10T16:03:45.035Z'
 * ecomUtils.price(product)
 * // => 30.9
 * product.price_effective_date.end = '2021-08-12T00:00:00.000Z'
 * ecomUtils.price(product)
 * // => 20.9
 * product.price_effective_date.start = '2021-01-01T00:00:00.000Z'
 * ecomUtils.price(product)
 * // => 30.9
 *
 * @example
 * // Importing this method standalone
 * import price from '@ecomplus/utils/dist/methods/price'
 */

export default price
