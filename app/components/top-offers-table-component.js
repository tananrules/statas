import Ember from 'ember';

export default Ember.Component.extend({
  showActions: false,
  selectedOffer: {},

  actions: {
    openApproveOfferModal(offer) {
      this.set('selectedOffer.id', offer.get('id'));
      this.set('selectedOffer.name', offer.get('name'));
      Ember.$('#approveOfferModal').modal('show');
    },

    approveOffer() {
      let offerId = this.get('selectedOffer.id');
      let offer = this.store.peekRecord('offer', offerId);
      offer.set('approved', true);
      offer.save().then(() => {
        Ember.$('#approveOfferModal').modal('hide');
      });
    }
  }
});
