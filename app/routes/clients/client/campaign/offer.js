import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('clients.client.campaign.offer', { into: 'application' });
  },
  setupController(controller, model) {
    this._super(controller, model);
    let parentModel = this.modelFor('clients.client.campaign');
    controller.set('parentModel', parentModel);
  },
});
