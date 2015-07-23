(function () {
  'use strict';

  App.XTableColumnComponent = Ember.Component.extend({
    tagName: 'td',
    content: Ember.computed('_content', {
      get: function () {
        return this.get('_content') || null;
      },
      set: function (key, value) {
        if (value) {
          if (typeof value === 'function') {
            value = value();
          } else if (typeof value === 'object') {
            if ('get' in value) {
              value = value.get();
            }
          }
        }

        this.set('_content', value);

        return value;
      }
    })
  });
}());