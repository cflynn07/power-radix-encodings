power-radix-encodings
=====================

[![NPM](https://nodei.co/npm/power-radix-encodings.png?compact=true)](https://nodei.co/npm/power-radix-encodings/)  

Convenient collection of independently require-able character encodings.  
Each encoding is available as a hash, with keys representing values in base10, or as an array.
Useful with [https://www.npmjs.com/package/power-radix](power-radix)

Installing
----------
```
$ npm install power-radix-encodings
```

Usage
-----
```js
var base64Hash = require('power-radix-encodings/base64-hash')
var base64Array = require('power-radix-encodings/base64')
```

Included Encodings
------------------
 - base16-lowercase
 - base16-uppercase
 - base58
 - base64
