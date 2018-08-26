
'use strict';

const api = require('../rest_services/user');

module.exports = class {
    static initialize(app, router) {
        router.get('/list', api.list);

        router.get('/create/:name?', api.create);

        router.get('/update/:id/:name', api.update);
    }
};