'use strict';

module.exports = function (grunt) {
  grunt.registerTask('build:scripts', [ 'concat:src', 'concat:app', 'uglify' ]);
};