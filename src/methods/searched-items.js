/**
 * @method
 * @memberof ecomUtils
 * @name searchedItems
 * @description Returns array of items (products) from Search API response.
 * @param {object|array} result - Search response body or ELS hits array
 * @returns {array}
 *
 * @example
 * // Full Search API response samples:
 * // https://developers.e-com.plus/docs/api/#/search/items/items
 * const result = { took: 6, hits: { total: 2, hits: [] } }
 * result.hits.hits.push({ _id: '123', _source: { sku: 'TEST', name: 'Test' } })
 * result.hits.hits.push({ _id: '456', _source: { sku: 'SMP', name: 'Smp' } })
 * ecomUtils.searchedItems(result)
 * // => [ { _id: '123', sku: 'TEST', name: 'Test' }, { _id: '456', sku: 'SMP', name: 'Smp' } ]
 * // Same passing the `hits` array as param
 * ecomUtils.searchedItems(result.hits.hits)
 * // => [ { _id: '123', sku: 'TEST', name: 'Test' }, { _id: '456', sku: 'SMP', name: 'Smp' } ]
 */
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

  // setup items list
  // array of nested objects
  let items = []
  if (Array.isArray(hits)) {
    // map items array from ELS hits list
    hits.forEach(({ _id, _source }) => {
      items.push(Object.assign({}, _source, { _id }))
    })
  }
  return items
}

export default searchedItems
