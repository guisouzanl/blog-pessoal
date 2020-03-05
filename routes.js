const routes = require('next-routes');

module.exports = routes()
  .add('/', 'index')
  .add('/notices', 'notices')
  .add('/about', 'about')
  .add('/notice', 'notice');
