/**
 * @method
 * @memberof ecomUtils
 * @name minQuantity
 * @description Returns the minimum quantity to add to cart.
 * @param {Object.<string, *>} product - Body object (product or variation)
 * @returns {number}
 *
 * @example
 * // With min quantity specified
 * // Full object ref.: https://developers.e-com.plus/docs/api/#/store/products/
 * const product = { sku: 'TEST', name: 'Test', price: 10, min_quantity: 10 }
 * ecomUtils.minQuantity(product)
 * // => 10
 * product.min_quantity = 0
 * ecomUtils.minQuantity(product)
 * // => 0
 *
 * @example
 * // 1 by default when min quantity is undefined
 * ecomUtils.minQuantity({ sku: 'TEST', name: 'Test' })
 * // => 1
 * ecomUtils.minQuantity({})
 * // => 1
 */
const minQuantity = product => (product && product.min_quantity) || 1

export default minQuantity
