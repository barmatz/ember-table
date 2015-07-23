(function () {
  'use strict';

  App.ErrorController = Ember.Controller.extend(App.ErrorHandlerMixin, {
    message: Ember.computed('model', function () {
      return this.parseError(this.get('model'));
    })
  });
}());