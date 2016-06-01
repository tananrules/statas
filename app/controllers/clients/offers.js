import Ember from 'ember';

export default Ember.Controller.extend({
  selectedTargeting: null,

  actions: {
    offerTarget(selection) {
      this.set('selectedTargeting', selection);
    },
    addNewOffer() {
      
    }
  }
});
