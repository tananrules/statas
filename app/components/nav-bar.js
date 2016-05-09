import Ember from 'ember';

export default Ember.Component.extend({
  setup: Ember.on('didInsertElement', function() {
    // MetsiMenu
    Ember.$('#side-menu').metisMenu();
  })
});
