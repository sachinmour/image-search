'use strict';

var bing_search = require(process.cwd() + '/app/controllers/bing_search.js');
var search = new bing_search();
var history = new Array(10);

module.exports = function (app) {

    app.route('/api/imagesearch/:search_string')
        .get(function(req, res) {
            var search_string = req.params.search_string;
            var history_object = {};
            history_object.term = search_string;
            history_object.when = new Date();
            history.unshift(history_object);
            history.pop();
            search.search(search_string, req.query.offset, res);
        });
        
    app.route('/api/latest/imagesearch/')
        .get(function(req, res) {
            res.json(history);
        });
};