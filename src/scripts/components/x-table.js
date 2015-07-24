(function () {
  'use strict';

  function invalidNumber(num) {
    return Ember.isNone(num) || isNaN(num) || num === 0 || num === Infinity;
  }

  App.XTableComponent = Ember.Component.extend({
    content: null,
    itemsPerPage: NaN,
    currentPage: Ember.computed('_currentPage', 'totalPages', {
      get: function () {
        return this.get('_currentPage') || 1;
      },
      set: function (key, value) {
        var max = this.get('totalPages');

        if (value < 1) {
          value = 1;
        } else if (value > max) {
          value = max;
        }

        this.set('_currentPage', value);

        return value || 1;
      }
    }),
    totalPages: Ember.computed('content.[]', 'itemsPerPage', function () {
      var content = this.get('content')
        , itemsPerPage = this.get('itemsPerPage');

      if (Ember.isEmpty(content) || invalidNumber(itemsPerPage)) {
        return 1;
      } else {
        return Math.ceil(content.length / itemsPerPage);
      }
    }),
    currentStartIndex: Ember.computed('currentPage', 'itemsPerPage', function () {
      var itemsPerPage = this.get('itemsPerPage')
        , currentPage = this.get('currentPage');

      return (currentPage * itemsPerPage) - itemsPerPage;
    }),
    currentEndIndex: Ember.computed('currentStartIndex', 'itemsPerPage', function () {
      var itemsPerPage = this.get('itemsPerPage')
        , currentStartIndex = this.get('currentStartIndex');

      return currentStartIndex + itemsPerPage;
    }),
    pagedContent: Ember.computed('content.[]', 'itemsPerPage', 'currentPage', function () {
      var content = this.get('content')
        , currentStartIndex = this.get('currentStartIndex')
        , currentEndIndex = this.get('currentEndIndex');

      if (content) {
        content = content.slice(currentStartIndex, currentEndIndex);
      }

      return content;
    }),
    isFirstPage: Ember.computed('currentPage', function ()  {
      return this.get('currentPage') === 1;
    }),
    isLastPage: Ember.computed('currentPage', 'totalPages', function ()  {
      return this.get('currentPage') === this.get('totalPages');
    }),
    actions: {
      prevPage: function () {
        this.decrementProperty('currentPage');
      },
      nextPage: function () {
        this.incrementProperty('currentPage');
      }
    }
  });
}());