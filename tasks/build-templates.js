'use strict';

module.exports = function (grunt) {
  grunt.registerTask('build:templates', [ 'emberTemplates', 'concat:app', 'uglify' ]);
};