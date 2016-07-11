/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss'
    },
    'ember-cli-selectize': {
      'theme': 'bootstrap3'
    }
  });

  // Bootstrap
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
  });
  
  // Metismenu
  app.import('bower_components/metisMenu/dist/metisMenu.min.css');
  app.import('bower_components/metisMenu/dist/metisMenu.min.js');

  //Datatables
  app.import('bower_components/datatables.net-bs/css/dataTables.bootstrap.css');
  // app.import('bower_components/datatables.net-bs/js/dataTables.bootstrap.js');
  app.import('bower_components/datatables.net/js/jquery.dataTables.js');
  return app.toTree();
};
