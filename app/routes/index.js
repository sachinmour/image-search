'use strict';

var bing_search = require(process.cwd() + '/app/controllers/bing_search.js');
var search = new bing_search();

module.exports = function (app) {

    app.route('/api/imagesearch/:search_string')
        .get(function(req, res) {
            search.search(req.params.search_string, req.query.offset, res);
        });
        
};