import Ember from 'ember';

const {
  computed,
  observer
} = Ember;

export default Ember.Controller.extend({
  activeFilter: 'all',

  actions: {
    filterUsers(type) {
      this.set('activeFilter', type);
    }
  }
});
