# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.4.0](https://github.com/ecomclub/ecomplus-utils/compare/v0.3.0...v0.4.0) (2019-07-01)


### Bug Fixes

* **filter:** throw error when 'categories' is not an array ([c57e425](https://github.com/ecomclub/ecomplus-utils/commit/c57e425))
* **methods:** preventing some fatal errors ([b965b3b](https://github.com/ecomclub/ecomplus-utils/commit/b965b3b))


### Features

* **method:** add 'findByProperty' and 'findBySlug' methods ([e29a9b6](https://github.com/ecomclub/ecomplus-utils/commit/e29a9b6))
* **method:** new 'findByParentSlug' method ([4a189f2](https://github.com/ecomclub/ecomplus-utils/commit/4a189f2))
* **method:** new 'inStock' method ([6555cdd](https://github.com/ecomclub/ecomplus-utils/commit/6555cdd))
* **method:** new 'minQuantity' method for product stock check ([15fd498](https://github.com/ecomclub/ecomplus-utils/commit/15fd498))
* **method:** new 'name' method ([cfddd49](https://github.com/ecomclub/ecomplus-utils/commit/cfddd49))



## [0.3.0](https://github.com/ecomclub/ecomplus-utils/compare/v0.2.0...v0.3.0) (2019-07-01)


### Bug Fixes

* **config:** get config trying from object, then fallback to constants ([b448c1a](https://github.com/ecomclub/ecomplus-utils/commit/b448c1a))
* **config:** getting config from global and meta with  prefox ([649f584](https://github.com/ecomclub/ecomplus-utils/commit/649f584))
* **constants:** default currency constants, code and symbol ([5dca250](https://github.com/ecomclub/ecomplus-utils/commit/5dca250))
* **i18n:** fix i18n method using config.get to default lang param value ([2e3e036](https://github.com/ecomclub/ecomplus-utils/commit/2e3e036))
* **price:** getting price correctly, update examples ([2d134dd](https://github.com/ecomclub/ecomplus-utils/commit/2d134dd))


### Features

* **config:** add currency_symbol prop ([4aaf5cd](https://github.com/ecomclub/ecomplus-utils/commit/4aaf5cd))
* **defaults:** adding some default constants (store ids, country code) ([aa923f5](https://github.com/ecomclub/ecomplus-utils/commit/aa923f5))
* **lib:** api with global object, constants and config (get, set) ([d58119e](https://github.com/ecomclub/ecomplus-utils/commit/d58119e))
* **method:** add  method ([1f1cbde](https://github.com/ecomclub/ecomplus-utils/commit/1f1cbde))
* **method:** new 'price' method ([2943176](https://github.com/ecomclub/ecomplus-utils/commit/2943176))
* **method:** new method ([2f4f692](https://github.com/ecomclub/ecomplus-utils/commit/2f4f692))
* **module:** add 'self' and 'config' to ecomUtils ([2fabc8f](https://github.com/ecomclub/ecomplus-utils/commit/2fabc8f))



## 0.2.0 (2019-06-27)


### Build System

* bundlw with webpack, then also tranform each module with babel ([b60ac71](https://github.com/ecomclub/ecomplus-utils/commit/b60ac71))
* check dev mode, resolve src aliases ([b97b46b](https://github.com/ecomclub/ecomplus-utils/commit/b97b46b))
* fix handling node env and output filename on webpack base config ([369c5af](https://github.com/ecomclub/ecomplus-utils/commit/369c5af))
* fix library name to camel case (not a constructor) ([2ae017d](https://github.com/ecomclub/ecomplus-utils/commit/2ae017d))
* remove aliases, use import from relative path as default ([6b7c141](https://github.com/ecomclub/ecomplus-utils/commit/6b7c141))
* set NODE_ENV production for build script ([2eb2884](https://github.com/ecomclub/ecomplus-utils/commit/2eb2884))
* setup babel config ([bc1f135](https://github.com/ecomclub/ecomplus-utils/commit/bc1f135))
* setup webpack config ([e3e24df](https://github.com/ecomclub/ecomplus-utils/commit/e3e24df))


### Features

* add _self with pkg name and version info ([88af49f](https://github.com/ecomclub/ecomplus-utils/commit/88af49f))
* setup i18n method (first method) ([237699c](https://github.com/ecomclub/ecomplus-utils/commit/237699c))


### Tests

* fix importing script on index test file ([be58ead](https://github.com/ecomclub/ecomplus-utils/commit/be58ead))
* fix utils script filename ([2f82026](https://github.com/ecomclub/ecomplus-utils/commit/2f82026))
* setup test files ([a7379cf](https://github.com/ecomclub/ecomplus-utils/commit/a7379cf))
