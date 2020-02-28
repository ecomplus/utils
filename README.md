# E-Com Plus Utils

[![Publish](https://github.com/ecomplus/utils/workflows/Publish/badge.svg)](https://github.com/ecomplus/utils/actions?workflow=Publish) [![CodeFactor](https://www.codefactor.io/repository/github/ecomplus/utils/badge)](https://www.codefactor.io/repository/github/ecomplus/utils) [![npm version](https://img.shields.io/npm/v/@ecomplus/utils.svg)](https://www.npmjs.org/@ecomplus/utils) [![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

JS utility functions to E-Com Plus (not only) related apps

[CHANGELOG](https://github.com/ecomplus/utils/blob/master/CHANGELOG.md)

## Usage

The `@ecomplus/utils` package provides a [list of methods](https://developers.e-com.plus/utils/ecomUtils.html),
each one is a utility function related to e-commerce apps and E-Com Plus APIs and schemas.

It's available for both Node.js and browser environments, and can also be imported entirely or partially with ES modules.

- [Get started](https://developers.e-com.plus/utils/module-@ecomplus_utils.html)
- [Methods](https://developers.e-com.plus/utils/ecomUtils.html)

```js
import {
  i18n,
  formatMoney,
  minQuantity,
  price,
  // ...
} from '@ecomplus/utils'

i18n({ en_us: 'Hello', pt_br: 'Olá' })
// => 'Hello'
formatMoney(10)
// => $10.00
```

## Development

Fork/clone this repository and install dependencies normally:

```bash
git clone https://github.com/ecomplus/utils
cd utils
npm i
```

Then you can edit source files and test locally with `npm run serve`.

### Contributing

Please read the [contribution guidelines](CONTRIBUTING.md).

### Deploy

Take a look on `package.json` scripts:

- `npm run doc` - Update jsdoc/docdash generated documentation;
- `npm run release` - Generate changelog and new version;
