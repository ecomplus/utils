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

/**
 * @method
 * @memberof ecomUtils
 * @name imgSizes
 * @description Splits image size string and returns object with 'width' and 'height'.
 * @param {object|string} img - Image object body or size string
 * @returns {object}
 *
 * @example
 * // TODO
 *
 * @example
 * // Importing this method standalone
 * import imgSizes from '@ecomplus/utils/dist/methods/img-sizes'
 */

export default imgSizes
