import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({
  activeFilter: 'all',
  form: {},
  selectedUserAccess: null,
  selectedTeam: null,

  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  actions: {
    filterUsers(type) {
      if(type === 'ALL') {
        this.set('model', this.store.peekAll('user'));
      } else {
        this.set('activeFilter', type);
        let users = this.store.peekAll('user');
        let filtered = users.filterBy('userAccess', type);
        this.set('model', filtered);
      }
    },
    selectUserAccess(userAccess) {
      this.set('selectedUserAccess', userAccess);
    },
    selectTeam(team) {
      this.set('selectedTeam', team);
    },
    createNewUser() {
      this.set('form.status', 'active');
      this.set('form.name', this.get('fullName'));
      this.set('form.team', this.get('selectedTeam'));
      this.set('form.userAccess', this.get('selectedUserAccess'));
      this.store.createRecord('user', this.get('form')).save().then(() => {
        this.set('form', {});
        this.toast.success('User Created Successfully!');
        Ember.$('#addUserModal').modal('hide');
      });
    },
    updateStatus(user, component, status) {
      this.store.find('user', user.get('id')).then((result) => {
        result.set('status', status);
        result.save().then(() => {
          this.toast.success(`${user.get('name')} changed to ${status}`);
        });
      });
    },
    updateUserAccess(user, component, userAccess) {
      this.store.find('user', user.get('id')).then((result) => {
        result.set('userAccess', userAccess);
        result.save().then(() => {
          this.toast.success(`${user.get('name')} changed to ${userAccess}`);
        });
      });
    }
  }
});
