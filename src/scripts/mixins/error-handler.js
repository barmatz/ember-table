(function () {
  'use strict';

  App.ErrorHandlerMixin = Ember.Mixin.create({
    parseError: function (err) {
      if (err) {
        if (typeof err === 'function') {
          err = err();
        }

        if (typeof err === 'object') {
          if ('responseText' in err) {
            err = err.responseText;

            try {
              err = JSON.parse(err);  
            } catch (e) {
            } finally {
              return this.parseError(err);
            }
          } else if ('message' in err) {
            return err.message;
          } else if ('error' in err) {
            return this.parseError(err.error);
          }
        }

        if (typeof err !== 'string') {
          err = err.toString();
        }

        return err;
      } else {
        return 'Unknown error';
      }
    }
  });
}());