import { DEFAULT_LANG } from './../lib/constants'

const i18n = (label, lang) => {
  if (!lang) {
    // try to get language code globally on browser
    lang = (typeof window === 'object' && window.lang) || DEFAULT_LANG
  }

  if (typeof label === 'object' && label !== null) {
    let prop = Object.keys(label)[0]
    if (typeof label[prop] === 'string') {
      // object with strings
      // supposed to be object of languages options
      return label[lang] || label[DEFAULT_LANG] || label[prop]
    } else {
      // recursive
      for (let prop in label) {
        if (label.hasOwnProperty(prop)) {
          label[prop] = i18n(label[prop], lang)
        }
      }
    }
  }
  return label
}

export default i18n
