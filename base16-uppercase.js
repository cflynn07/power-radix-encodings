/**
 * Base16 (hex) encoding, uppercase characters
 * @module base16-uppercase
 */
var base16UppercaseHash = require('./base16-uppercase-hash')
var values = require('object.values')
module.exports = values(base16UppercaseHash)
