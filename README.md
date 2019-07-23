# ecomplus-utils

[![CodeFactor](https://www.codefactor.io/repository/github/ecomclub/ecomplus-utils/badge)](https://www.codefactor.io/repository/github/ecomclub/ecomplus-utils)
[![npm version](https://img.shields.io/npm/v/@ecomplus/utils.svg)](https://www.npmjs.org/@ecomplus/utils)
[![license mit](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

JS utility functions to E-Com Plus (not only) related apps

[Changelog](https://github.com/ecomclub/ecomplus-utils/blob/master/CHANGELOG.md)

## Usage

The `@ecomplus/utils` package provides a
[list of methods](https://developers.e-com.plus/ecomplus-utils/ecomUtils.html),
each one is a utility function related to e-commerce apps
and E-Com Plus APIs and schemas.

It's available for both Node.js and browser environments, and can also be
imported entirely or partially with ES modules.

- [Get started](https://developers.e-com.plus/ecomplus-utils/module-@ecomplus_utils.html)
- [Methods](https://developers.e-com.plus/ecomplus-utils/ecomUtils.html)

## Development

We're using
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/),
all commit messages must follow these conventions.

For documentation, we're using [jsdoc](https://jsdoc.app/),
all methods should be well documented.

### Contributing

1. Fork the repository;

2. Create a new branch with the name of your proposal;

4. Clone the repository:
```bash
git clone git@github.com:{user}/ecomplus-utils.git
```

5. Move to folder and install dependencies:
```bash
cd ecomplus-utils
npm i
```

6. Run dev server and use global `ecomUtils`
or edit `test/demo.js` for tests on http://localhost:9314/:
```bash
npm run serve
```

7. Commit changes following
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/);

8. Create a new [PR](https://github.com/ecomclub/ecomplus-utils/pulls)
describing your proposal :)

### Deploy

Take a look on `package.json` scripts:

- `npm run doc` - Update jsdoc/docdash generated documentation;
- `npm run release` - Generate changelog and new version;
