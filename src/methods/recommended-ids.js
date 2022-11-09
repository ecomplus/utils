/**
 * @method
 * @memberof ecomUtils
 * @name recommendedIds
 * @description Returns array of product IDs from Graphs API response.
 * @param {object|array} result - Recommend/related products response body
 * @returns {array}
 *
 * @example

// Full Graphs API response samples:
// https://developers.e-com.plus/docs/api/#/graphs/products/recommended
const result = { results: [ { columns: [], data: [] } ] }
result.results[0].data.push(
  { row: [ 'a00000000000000000000001' ], meta: [ null ] },
  { row: [ 'a00000000000000000000002' ], meta: [ null ] },
  { row: [ 'a00000000000000000000006' ], meta: [ null ] }
)
ecomUtils.recommendedIds(result)
// => [ 'a00000000000000000000001', 'a00000000000000000000002', 'a00000000000000000000006' ]

 */
const recommendedIds = result => {
  let data
  if (typeof result === 'object' && result !== null) {
    if (Array.isArray(result)) {
      data = result
    } else if (result.results && result.results[0]) {
      // Neo4j response body
      data = result.results[0].data
    }
  }

  // setup ids list
  let ids = []
  if (Array.isArray(data)) {
    // map ids array from Neo4j data list
    data.forEach(({ row }) => {
      ids.push(row[0])
    })
  }
  return ids
}

export default recommendedIds
