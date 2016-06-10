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
      this.set('activeFilter', type);
    },
    selectUserAccess(userAccess) {
      this.set('selectedUserAccess', userAccess);
    },
    selectTeam(team) {
      this.set('selectedTeam', team);
    },
    createNewUser() {
      this.set('form.status', 'active');
      this.set('form.team', this.get('selectedTeam'));
      this.set('form.userAccess', this.get('selectedUserAccess'));
      this.store.createRecord('user', this.get('form')).save().then(() => {
        this.set('form', {});
        this.toast.success('User Created Successfully!');
        Ember.$('#addUserModal').modal('hide');
      });
    },
    updateStatus(status) {

    },
    updateUserAccess(userAccess) {

    }
  }
});
