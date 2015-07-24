(function () {
  'use strict';

  App.XTableHeadComponent = Ember.Component.extend({
    tagName: 'tr',
    content: Ember.computed('_content', {
      get: function () {
        return this.get('_content') || null;
      },
      set: function (key, value) {
        if (value) {
          if (!Ember.isArray(value)) {
            value = [ value ];
          }

          if (value.length > 0) {
            value = Object.keys(value[0]);
          } else {
            value = null;
          }
        }

        this.set('_content', value);

        return value;
      }
    })
  });
}());