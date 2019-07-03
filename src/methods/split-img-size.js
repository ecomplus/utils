const splitImgSize = img => {
  // defaul sizes object with zeros
  let sizes = { width: 0, height: 0 }
  if (typeof img === 'object' && img !== null) {
    if (typeof img.size === 'string') {
      img.size.split('x').forEach((value, index) => {
        // parse width and height to numbers
        value = parseFloat(value)
        if (!isNaN(value)) {
          sizes[index === 0 ? 'width' : 'height'] = value
        }
      })
    } else {
      // try with 'logo' body property
      return splitImgSize(img.logo)
    }
  }
  // returns object with width and height
  return sizes
}

/**
 * @method
 * @memberof ecomUtils
 * @name splitImgSize
 * @description Splits image size string and returns object with 'width' and 'height'.
 * @param {object} img - Image object body
 * @returns {object}
 *
 * @example
 * // TODO
 *
 * @example
 * // Importing this method standalone
 * import splitImgSize from '@ecomplus/utils/dist/methods/split-img-size'
 */

export default splitImgSize
