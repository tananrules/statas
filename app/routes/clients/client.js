import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('clients.client', { into: 'application' });
  },
  setupController(controller, model) {
    let modelId = model.get('id');
    this.store.findAll('campaign').then((campaigns) => {
      campaigns= campaigns.filterBy('advertiserId', modelId);
      controller.set('campaigns', campaigns);
    });
    this.store.findAll('offer').then((offers) => {
      offers = offers.filterBy('advertiserID', modelId);
      controller.set('offers', offers);
    });
    controller.set('model', model);
  },
  model(params) {
    return this.store.peekAll('advertiser').findBy('id', params.client_id);
  },
  afterModel(model) {
    this.set('breadCrumb', {title: model.get('name')});
  },
  actions: {
    updateClient(model) {
      this.store.findRecord('advertiser', model.id).then((record) => {
        record.set('status', status);
        record.save().then(() => {
          this.toast.success(`${model.get('name')} updated successfully!!`);
          this.transitionTo('clients');
        });
      });
    }
  }
});
