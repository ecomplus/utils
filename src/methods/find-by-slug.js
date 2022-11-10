import findByProperty from './find-by-property'

/**
 * @method
 * @memberof ecomUtils
 * @name findBySlug
 * @description Find object from list by slug value.
 * @param {Array} list - List of nested objects
 * @param {string} slug - Object (category, brand, product...) slug value
 * @returns {Object.<string, *>|undefined}
 *
 * @example
 * // Find on list of brands, categories, products, any...
 * ecomUtils.findBySlug([ { name: 'Nike', slug: 'nike' }, { name: 'Puma', slug: 'puma' } ], 'nike')
 * // => { name: 'Nike', slug: 'nike' }
 * ecomUtils.findBySlug([ { slug: 'a' }, { slug: 'b' } ], 'b')
 * // => { slug: 'b' }
 * ecomUtils.findBySlug([ { slug: 'a' }, { slug: 'b' } ], 'c')
 * // => undefined
 */
const findBySlug = (list, slug) => findByProperty(list, 'slug', slug)

export default findBySlug
