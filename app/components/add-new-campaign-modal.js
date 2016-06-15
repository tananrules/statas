import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  selectedCampaignType: "",
  selectedClient: "",

  clients: computed(function() {
    return this.store.peekAll('advertiser');
  }),

  actions: {
    createNewCampaign() {
      // this.set('form.type', this.get('selectedCampaignType'));
      // this.set('form.startsAt', this.get('model.startsAt'));
      // this.set('form.endsAt', this.get('model.endsAt'));
      // this.set('form.advertiserId', this.get('selectedClient.id'));
      // this.store.createRecord('campaign', this.get('form')).save().then(() => {
      //   this.toast.success('Campaign Created Successfully!');
      //   Ember.$('#addCampaignModal').modal('hide');
      //   Ember.run.later((function() {
      //     Ember.$('#addOfferModal').modal('show');
      //   }), 1500);
      // });
    },
    selectCampaignType(selection) {
      this.set('selectedCampaignType', selection);
    }
  }
});
