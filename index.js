const ngAnnotate = require('ng-annotate')
const R = require('ramda')

const defaultOptions = {
  add: true,
  map: {
    inline: false
  }
}

module.exports = function (){
  return this.filter('ngAnnotate', function(src, options) {
    try {
      return ngAnnotate(src, R.merge({}, defaultOptions, options)).src
    } catch (e) {
      throw e
    }
  })
}
