const searchedItems = result => {
  let hits
  if (typeof result === 'object' && result !== null) {
    if (Array.isArray(result)) {
      hits = result
    } else if (result.hits) {
      // ELS response body
      hits = result.hits.hits || result.hits
    }
  }
  let items = []
  if (Array.isArray(hits)) {
    // map items array from ELS hits list
    hits.forEach(({ _id, _source }) => {
      items.push(Object.assign({}, _source, { _id }))
    })
  }
  return items
}

/**
 * @method
 * @memberof ecomUtils
 * @name searchedItems
 * @description Returns array of items (products) from Search API response.
 * @param {object|array} result - Search response body or ELS hits array
 * @returns {array}
 *
 * @example
 * // TODO
 *
 * @example
 * // Importing this method standalone
 * import searchedItems from '@ecomplus/utils/dist/methods/searchedItems'
 */

export default searchedItems
