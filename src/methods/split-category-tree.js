const splitCategoryTree = product => {
  if (product) {
    // check if category tree string was already sent as body param
    const categoryTree = typeof product === 'string' ? product : product.category_tree
    if (categoryTree) {
      const categories = categoryTree.split('>')
      for (let i = 0; i < categories.length; i++) {
        // remove white spaces from names
        categories[i] = categories[i].trim()
      }
      // list of category names
      return categories
    }
  }
  // fallback returning empty array
  return []
}

/**
 * @method
 * @memberof ecomUtils
 * @name splitCategoryTree
 * @description Parse category tree string to array.
 * @param {object|string} product - Product object body or category tree string
 * @returns {array}
 *
 * @example
 * // TODO
 *
 * @example
 * // Importing this method standalone
 * import splitCategoryTree from '@ecomplus/utils/dist/methods/splitCategoryTree'
 */

export default splitCategoryTree
