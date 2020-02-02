/**
 * @namespace ecomUtils
 */

import { root } from './lib/globals'
import _self from './lib/self'
import _config from './lib/config'

import i18n from './methods/i18n'
import name from './methods/name'
import alphabeticalSort from './methods/alphabetical-sort'
import price from './methods/price'
import onPromotion from './methods/on-promotion'
import formatMoney from './methods/format-money'
import formatDate from './methods/format-date'
import findByProperty from './methods/find-by-property'
import findBySlug from './methods/find-by-slug'
import findByName from './methods/find-by-name'
import filterByParentSlug from './methods/filter-by-parent-slug'
import fullName from './methods/full-name'
import minQuantity from './methods/min-quantity'
import inStock from './methods/in-stock'
import searchedItems from './methods/searched-items'
import recommendedIds from './methods/recommended-ids'
import categoriesList from './methods/categories-list'
import specValues from './methods/spec-values'
import specTextValue from './methods/spec-text-value'
import specValueByText from './methods/spec-value-by-text'
import variationsGrids from './methods/variations-grids'
import gridTitle from './methods/grid-title'
import img from './methods/img'
import imgSizes from './methods/img-sizes'
import nickname from './methods/nickname'
import phone from './methods/phone'
import birthDate from './methods/birth-date'
import parsePhone from './methods/parse-phone'
import parseDate from './methods/parse-date'
import lineAddress from './methods/line-address'
import objectIdPad from './methods/object-id-pad'
import randomObjectId from './methods/random-object-id'

/**
 * Global config values for E-Com Plus apps.
 * @name ecomUtils#$ecomConfig
 * @see $ecomConfig
 * @type {object}
 * @example
 * ecomUtils.$ecomConfig.get('store_id')
 * // => 1011
 */
const $ecomConfig = root.$ecomConfig || _config

export {
  _self,
  _config,
  $ecomConfig,
  i18n,
  name,
  alphabeticalSort,
  price,
  onPromotion,
  formatMoney,
  formatDate,
  findByProperty,
  findBySlug,
  findByName,
  filterByParentSlug,
  fullName,
  minQuantity,
  inStock,
  searchedItems,
  recommendedIds,
  categoriesList,
  specValues,
  specTextValue,
  specValueByText,
  variationsGrids,
  gridTitle,
  img,
  imgSizes,
  nickname,
  phone,
  birthDate,
  parsePhone,
  parseDate,
  lineAddress,
  objectIdPad,
  randomObjectId
}
