const img = (product, pictureId, size = 'normal') => {
  let pictures
  if (Array.isArray(product)) {
    // received list of pictures ?
    pictures = product
  } else if (product) {
    pictures = product.pictures
  }
  let picture = Array.isArray(pictures)
    // select one img object from product pictures
    ? (pictureId && pictures.filter(pic => pic._id === pictureId)[0]) || pictures[0]
    // received picture as param ?
    : product

  let img
  if (typeof picture === 'object' && picture !== null) {
    img = picture[size]
    if (!img) {
      // try with any size
      let sizes = [ 'big', 'normal', 'zoom', 'small' ]
      for (let i = 0; i < sizes.length; i++) {
        let size = sizes[i]
        if (picture[size]) {
          return picture[size]
        }
      }
      // last try with custom sizes
      for (let size in picture) {
        if (picture[size] && picture[size].url) {
          return picture[size]
        }
      }
    }
  }
  return img
}

/**
 * @method
 * @memberof ecomUtils
 * @name img
 * @description Returns img object (with url and alt) from product body or pictures list.
 * @param {object|array} product - Product body object or list of picture objects
 * @param {string} [pictureId] - ObjectID of preferred picture to find in the list
 * @param {string} [size='normal'] - Preferred image size to find on picture object
 * @returns {object|undefined}
 *
 * @example
 * // TODO
 *
 * @example
 * // Importing this method standalone
 * import img from '@ecomplus/utils/dist/methods/img'
 */

export default img
