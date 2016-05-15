import Ember from 'ember';

const {
  computed,
  observer
} = Ember;

export default Ember.Controller.extend({
  activeFilter: 'all',

  // all: computed('activeFilter', function() {
  //   debugger
  //   return this.get('activeFilter') === 'all';
  // }),

  actions: {
    filterUsers(type) {
      this.set('activeFilter', type);
    }
  }
});
