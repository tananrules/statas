import Ember from 'ember';

export default Ember.Component.extend({
  selectedTargeting: null,

  actions: {
    offerTarget(selection) {
      this.set('selectedTargeting', selection);
    },
    createNewOffer() {
      this.set('form.advertiserID', this.get('model.id'));
      this.set('form.gender', this.get('selectedTargeting'));
      this.set('form.approved', false);
      this.store.createRecord('offer', this.get('form')).save().then((result) => {
        Ember.$('#addOfferModal').modal('hide');
        this.toast.success(`${this.get('form.name')} Created Successfully!!`);
        this.get('offers').pushObject(result);
      })
    }
  }
});
