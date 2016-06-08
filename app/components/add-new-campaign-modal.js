import Ember from 'ember';

export default Ember.Component.extend({
  selectedCampaignType: "",

  actions: {
    createNewCampaign() {
      this.set('form.type', this.get('selectedCampaignType'));
      this.set('form.added', new Date());
      this.store.createRecord('campaign', this.get('form'));
      this.toast.success('Campaign Created Successfully!');
      Ember.$('#addCampaignModal').modal('hide');
    },
    selectCampaignType(selection) {
      this.set('selectedCampaignType', selection);
    }
  }
});
