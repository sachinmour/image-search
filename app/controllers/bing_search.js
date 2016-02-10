'use strict';


var Bing = require('node-bing-api')({ accKey: process.env.bing_key });

module.exports = function() {
    
    this.search = function(search_string, offset, response) {
        var options = {top: 10};
        if (!!offset) {
            options.skip = Number(offset);
        }
        Bing.images("Ninja Turtles", options, function(error, res, body){
          var array = [];
          body.d.results.forEach(function(data) {
              var object = { url: null, title: null, thumbnail: null, context: null };
              object.url = data.MediaUrl;
              object.title = data.Title;
              object.thumbnail = data.Thumbnail.MediaUrl;
              object.context = data.SourceUrl;
              array.push(object);
          });
          response.json(array);
        });
    };
    
};