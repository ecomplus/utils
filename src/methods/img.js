import _config from './../lib/config'

/**
 * @method
 * @memberof ecomUtils
 * @name img
 * @description Returns img object (with url and alt) from product body or pictures list.
 * @param {Object.<string, *>|Array} product - Product body object or list of picture objects
 * @param {string} [pictureId] - ObjectID of preferred picture to find in the list
 * @param {string} [size=$ecomConfig.get('default_img_size')] - Preferred image size
 * (generally `normal`) to find on picture object
 * @returns {{ url: string; size?: string; alt?: string; }|undefined}
 *
 * @example
 * const product = { 'pictures': [ { 'small': { 'url': 'https://ecom.com/imgs/100px/64gb.jpg'}, 'big': { 'url': 'https://ecom.com/imgs/700px/64gb.jpg' }, '_id': '694890155127368133600000' }, { 'small': { 'url': 'https://ecom.com/imgs/100px/e-5-64gb.jpg' }, 'big': { 'url': 'https://ecom.com/imgs/700px/e-5-64gb.jpg' }, '_id': '694890155127368133600001' }, { 'small': { 'url': 'https://ecom.com/imgs/100px/5-64gb.jpg' }, 'big': { 'url': 'https://ecom.com/imgs/700px/5-64gb.jpg' }, '_id': '694890155127368133600002' } ], 'name': 'Smartphone Xiaomi' }
 * const id = '694890155127368133600001'
 * const size = 'big'
 * ecomUtils.img(product, id, size)
 * // => {url: 'https://ecom.com/imgs/700px/e-5-64gb.jpg'}
 */
const img = (product, pictureId, size) => {
  if (!size) {
    size = _config.get('default_img_size') || 'normal'
  }
  if (product) {
    // product object has 'pictures'
    // cart item object has 'picture'
    let { pictures, picture } = product
    if (!picture) {
      if (!pictures) {
        if (Array.isArray(product)) {
          // received list of pictures ?
          pictures = product
        } else {
          // received picture object ?
          picture = product
        }
      }
    }
    if (Array.isArray(pictures)) {
      // select one img object from product pictures
      picture = (pictureId && pictures.filter(pic => pic._id === pictureId)[0]) || pictures[0]
    }

    let img
    if (typeof picture === 'object' && picture !== null) {
      img = picture[size]
      if (img && img.url) {
        return img
      }
      // try predefined any size
      let sizes
      switch (size) {
        case 'small':
          sizes = ['normal', 'big']
          break
        case 'normal':
          sizes = ['big', 'zoom', 'small']
          break
        case 'big':
          sizes = ['zoom', 'normal']
          break
        case 'zoom':
          sizes = ['big']
          break
        default:
          sizes = ['big', 'zoom', 'normal', 'small']
      }
      for (let i = 0; i < sizes.length; i++) {
        const size = sizes[i]
        if (picture[size] && picture[size].url) {
          return picture[size]
        }
      }
      // last try with custom sizes
      for (const size in picture) {
        if (picture[size] && picture[size].url) {
          return picture[size]
        }
      }
    }
  }
  return undefined
}

export default img
