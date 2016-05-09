/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss'
    }
  });

  // Bootstrap
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  
  // Metismenu
  app.import('bower_components/metisMenu/dist/metisMenu.min.css');
  app.import('bower_components/metisMenu/dist/metisMenu.min.js');

  return app.toTree();
};
