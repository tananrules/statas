import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('clients.client.campaign', {into: 'application'});
  },
  setupController(controller, model) {
    this._super(controller, model);
    let parentModel = this.modelFor('clients.client');
    controller.set('parentModel', parentModel);
  },
  model(params) {
    return this.store.findRecord('campaign', params.campaign_id);
  },
});
