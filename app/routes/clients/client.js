import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('clients.client', { into: 'application' });
  },
  model(params) {
    return this.store.peekAll('advertiser').findBy('id', params.client_id);
  }
});
