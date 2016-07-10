import Ember from 'ember';

export default Ember.Component.extend({
  showActions: false,
  selectedOffer: null,

  actions: {
    openApproveOfferModal(offer) {
      this.set('selectedOffer', offer);
      Ember.$('#denyOfferModal').modal('hide');
      Ember.$('#approveOfferModal').modal('show');
    },

    openViewOfferModal(offer) {
      this.set('selectedOffer', offer);
      Ember.$('#offerViewModal').modal('show');
    },

    openDenyOfferModal() {
      Ember.$('#offerViewModal').modal('hide');
      Ember.$('#denyOfferModal').modal('show');
    },

    approveOffer() {
      let offerId = this.get('selectedOffer.id');
      let offer = this.store.peekRecord('offer', offerId);
      offer.set('approved', true);
      offer.save().then(() => {
        this.toast.success(`${this.get('selectedOffer.name')} approved successfully!!`);
        Ember.$('#approveOfferModal').modal('hide');
      });
    },

    denyOffer(){
      
    }
  }
});
