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

          value = Object.keys(value[0]);
        }

        this.set('_content', value);

        return value;
      }
    })
  });
}());