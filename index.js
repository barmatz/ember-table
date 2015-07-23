'use strict';

var express = require('express')
  , morgan = require('morgan')
  , livereload = require('livereload')
  , connectLivereload = require('connect-livereload')
  , path = require('path')
  , app = express()
  , server;

app
  .use(morgan('dev'))
  .use(connectLivereload())
  .use('/vendor', express.static(path.resolve(__dirname, 'bower_components')))
  .use('/scripts', express.static(path.resolve(__dirname, 'lib', 'scripts')))
  .use('/', express.static(path.resolve(__dirname, 'public')));

server = app.listen(process.env.PORT || 3000, function () {
  console.log('running the server on port %s\n', server.address().port);
});

livereload
  .createServer()
  .watch([
    path.resolve(__dirname, 'lib'),
    path.resolve(__dirname, 'public')
  ]);

module.exports = app;