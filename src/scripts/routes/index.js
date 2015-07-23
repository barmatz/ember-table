(function () {
  'use strict';

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return [
        { id: 1, name: 'red' },
        { id: 2, name: 'yellow' },
        { id: 3, name: 'blue' }
      ];
    }
  });
}());