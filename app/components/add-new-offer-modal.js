import Ember from 'ember';

export default Ember.Component.extend({
  selectedTargeting: null,

  actions: {
    offerTarget(selection) {
      this.set('selectedTargeting', selection);
    },
    addNewOffer() {
      
    }
  }
});
