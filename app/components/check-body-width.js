import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._resizeHandler = function() {
      if (Ember.$('body').width() < 769) {
        Ember.$('body').addClass('body-small');
      } else {
        Ember.$('body').removeClass('body-small');
      }
    };
    
    Ember.$(window).on('resize', this._resizeHandler);

    this._resizeHandler();
  },

  willDestroyElement() {
    Ember.$(window).off('resize', this._resizeHandler);
  }
});
