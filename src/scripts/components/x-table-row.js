(function () {
  'use strict';

  App.XTableRowComponent = Ember.Component.extend({
    tagName: 'tr',
    content: Ember.computed('_content', {
      get: function () {
        return this.get('_content') || null;
      },
      set: function (key, value) {
        if (value) {
          if (!Ember.isArray(value)) { 
            if (typeof value === 'object') {
              value = Object.keys(value).map(function (key) {
                return value[key];
              });
            }
          }
        }

        this.set('_content', value);

        return value;
      }
    })
  });
}());