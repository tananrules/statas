import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('clients.client.campaign', {into: 'application'});
  },
  setupController(controller, model) {
    this._super(controller, model);
    //Another Network Request (can be fixed for optimization)
    this.store.findAll('offer').then((offers) => {
      controller.set('offers', offers.filterBy('campaignID', model.get('id'))); 
    });
  },
  model(params) {
    return this.store.findRecord('campaign', params.campaign_id);
  },
  afterModel(model) {
    this.set('breadCrumb', {title: model.get('name')});
  }
});
