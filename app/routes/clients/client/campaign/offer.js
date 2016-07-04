import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('clients.client.campaign.offer', { into: 'application' });
  },
  model(params) {
    return this.store.findRecord('offer', params.offer_id);
  },
  afterModel(model) {
    this.set('breadCrumb', {title: model.get('name')});
  }
});
