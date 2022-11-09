import minQuantity from './min-quantity'

/**
 * @method
 * @memberof ecomUtils
 * @name inStock
 * @description Check if item has stock equal or greater than minimum quantity.
 * @param {object} product - Body object (product or variation)
 * @returns {boolean}
 *
 * @example
 * // Full object ref.: https://developers.e-com.plus/docs/api/#/store/products/
 * const product = { sku: 'TEST', name: 'Test', price: 10 }
 * ecomUtils.inStock(product)
 * // => true
 * product.quantity = 5
 * ecomUtils.inStock(product)
 * // => true
 * product.min_quantity = 10
 * ecomUtils.inStock(product)
 * // => false
 * ecomUtils.inStock({ quantity: 1, min_quantity: 2 })
 * // => false
 * ecomUtils.inStock({ quantity: 0 })
 * // => false
 * ecomUtils.inStock({ quantity: 1, min_quantity: 1 })
 * // => true
 * ecomUtils.inStock({ quantity: 1 })
 * // => true
 */
const inStock = product => !product.hasOwnProperty('quantity') || product.quantity >= minQuantity(product)

export default inStock
