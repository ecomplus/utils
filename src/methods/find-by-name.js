import findByProperty from './find-by-property'

// just filter a list of documents by 'slug' property
const findBySlug = (list, slug) => findByProperty(list, 'slug', slug)

/**
 * @method
 * @memberof ecomUtils
 * @name findBySlug
 * @description Find object from list by slug value.
 * @param {array} list - List of nested objects
 * @param {string} slug - Object (category, brand, product...) slug value
 * @returns {object|undefined}
 *
 * @example
 * // Find on list of brands, categories, products, any...
 * ecomUtils.findBySlug([ { name: 'Nike', slug: 'nike' }, { name: 'Puma', slug: 'puma' } ], 'nike')
 * // => { name: 'Nike', slug: 'nike' }
 * ecomUtils.findBySlug([ { slug: 'a' }, { slug: 'b' } ], 'b')
 * // => { slug: 'b' }
 * ecomUtils.findBySlug([ { slug: 'a' }, { slug: 'b' } ], 'c')
 * // => undefined
 *
 * @example
 * // Importing this method standalone
 * import findBySlug from '@ecomplus/utils/dist/methods/find-by-slug'
 */

export default findBySlug
