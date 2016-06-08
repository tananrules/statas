import Ember from 'ember';

// const {
//   computed,
//   observer
// } = Ember;

export default Ember.Controller.extend({
  activeFilter: 'all',
  form: {},
  selectedUserAccess: null,
  selectedTeam: null,

  actions: {
    filterUsers(type) {
      debugger
      this.set('activeFilter', type);
    },

    createNewUser() {

    },

    selectUserAccess(userAccess) {
      this.set('selectUserAccess', userAccess);
    },

    selectTeam(team) {
      this.set('selectedTeam', team);
    }
  }
});
