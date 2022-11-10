/**
 * @method
 * @memberof ecomUtils
 * @name imgSizes
 * @description Splits image size string and returns object with 'width' and 'height'.
 * @param {Object.<string, *>|string} img - Image object body or size string
 * @returns {Object.<string, *>}
 *
 * @example
 * // Using a img sizes string as parameter
 * const size = '200x50'
 * ecomUtils.imgSizes(size)
 * // => {width: 200, height: 50}
 * // Using a img sizes object as parameter
 * const sizeObj = {size: '1000x1000'}
 * ecomUtils.imgSizes(sizeObj)
 * // => {width: 1000, height: 1000}
 */
const imgSizes = img => {
  // defaul sizes object with zeros
  let sizes = { width: 0, height: 0 }
  let sizeString
  if (typeof img === 'object' && img !== null) {
    sizeString = img.size
  } else {
    // expect to receive img as size string
    sizeString = img
  }

  if (typeof sizeString === 'string') {
    sizeString.split('x').forEach((value, index) => {
      // parse width and height to numbers
      value = parseFloat(value)
      if (!isNaN(value)) {
        sizes[index === 0 ? 'width' : 'height'] = value
      }
    })
  }
  // returns object with width and height
  return sizes
}

export default imgSizes
