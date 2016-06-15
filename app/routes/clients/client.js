import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('clients.client', { into: 'application' });
  },
  setupController(controller, model) {
    this.store.findAll('campaign').then((campaigns) => {
      controller.set('campaigns', campaigns);
    });
    controller.set('model', model);
  },
  model(params) {
    return this.store.peekAll('advertiser').findBy('id', params.client_id);
  }
});
