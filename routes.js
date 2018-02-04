const routes = require('next-routes')();

routes.add('/cards/new', '/cards/new').add('/cards/:address', '/cards/show');

module.exports = routes;
