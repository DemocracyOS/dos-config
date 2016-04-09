var config = require('democracyos-config')

module.exports = function dosConfig () {
  var args = Array.prototype.slice.call(arguments)
  module.exports = config.apply(config, args)
}
