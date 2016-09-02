require('./../scss/blog.scss');

var blog = require('./../templates/blog/view.handlebars');
var items = require('./../model/blog.json');

module.exports = blog({
  items: items
});
