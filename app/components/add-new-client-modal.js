import Ember from 'ember';

export default Ember.Component.extend({
   actions: {
    createNewClient() {
      this.set('form.type', 'advertiser');
      this.store.createRecord('user', this.get('form'));
      this.toast.success('Client Created Successfully!');
      Ember.$('#addClientModal').modal('hide');
      Ember.run.later((function() {
        Ember.$('#addCampaignModal').modal('show');
      }), 1500);
    },
    selectState() {

    }
  }
});
