import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('clients.campaigns', { into: 'application' });
  },
  model() {
    return this.store.findAll('offer');
  }
});
