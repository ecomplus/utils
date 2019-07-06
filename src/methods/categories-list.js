const categoriesList = product => {
  let categoryTree
  if (typeof product === 'object' && product !== null) {
    // try to get categories from product body object
    if (product.category_tree) {
      categoryTree = product.category_tree
    } else if (Array.isArray(product.categories) && product.categories[0]) {
      // use the first category from list
      return [ product.categories[0].name ]
    }
  } else {
    // category tree string received as param ?
    categoryTree = product
  }

  if (typeof categoryTree === 'string') {
    const categories = categoryTree.split('>')
    for (let i = 0; i < categories.length; i++) {
      // remove white spaces from names
      categories[i] = categories[i].trim()
    }
    // list of category names
    return categories
  }
  // fallback returning empty array
  return []
}

/**
 * @method
 * @memberof ecomUtils
 * @name categoriesList
 * @description Parse category tree string to list of categories names.
 * @param {object|string} product - Product object body or category tree string
 * @returns {array}
 *
 * @example
 * Can be a category tree, like:
 * const categoryTree = "Quarto > Cama > Travesseiros"
 * So use categoryTree is parameter of function categoriesList, like:
 * ecomUtils.categoriesList(categoryTree)
 * => ["Quarto", "Cama", "Travesseiros"]
 * Or can be a product body object like:
 * const product = { "name": "Ultimate", "categories": [{"name": "Cadeira Gamer"},{"name": "Periféricos"}]}
 * ecomUtils.categoriesList(product)
 * => ["Cadeira Gamer"]
 * @example
 * // Importing this method standalone
 * import categoriesList from '@ecomplus/utils/dist/methods/categories-list'
 */

export default categoriesList
