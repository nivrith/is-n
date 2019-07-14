# is-n

[![CircleCI](https://circleci.com/gh/nivrith/is-n/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/is-n/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/is-n.svg)](https://www.npmjs.com/package/is-n)
[![node](https://img.shields.io/node/v/is-n.svg)](https://www.npmjs.com/package/is-n)
[![License MIT](https://img.shields.io/github/license/nivrith/is-n.svg)](https://github.com/nivrith/is-n/blob/master/LICENSE)

check if input is a number

## Highlights

- Written in Typescript

## Usage

> check if input is a number

```js

  import isN from 'is-n';

  isN(-0); // true
  isN({}); //false
  isN(NaN); //false
  isN(5/2); //true

```

## License

MIT © [Nivrith](https://github.com/nivrith)
