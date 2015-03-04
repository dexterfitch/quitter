Quipper.QuipsController = Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,
  isPosting: false,
  actions: {
    post: function() {
      this.set('isPosting', true)
    },
    save: function() {
      this.set('isPosting', false),
      quips.addObject({ id: (quips.length + 1).toString(),
                        body: this.body,
                        date: Date.now().toString(),
                        dateShow: (new Date()).toString()
      })
    }
  }
})
