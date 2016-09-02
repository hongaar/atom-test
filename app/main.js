require('./scss/default.scss');

var blog = require("./controller/blog.js");
var div = document.createElement('div');

div.innerHTML = blog;
document.body.appendChild(div);
