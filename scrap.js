var xray = require('x-ray'),
    x    = xray();

var results = x('https://google.com', 'a', [{
    a: '',
    href: '@href'
}]);

module.exports = results;