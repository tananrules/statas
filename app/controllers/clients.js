import Ember from 'ember';

export default Ember.Controller.extend({
  form: {},

  actions: {
    updateStatus(client, component, status) {
      this.store.findRecord('advertiser', client.id).then((record) => {
        record.set('status', status);
        record.save().then(() => {
          this.toast.success(`${client.get('name')} changed to ${status}`);
        });
      });
    }
  }
});
