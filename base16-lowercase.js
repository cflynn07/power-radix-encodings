/**
 * Base16 (hex) encoding, lowercase characters
 * @module base16-lowercase
 */
var base16LowercaseHash = require('./base16-lowercase-hash')
var values = require('object.values')
module.exports = values(base16LowercaseHash)
