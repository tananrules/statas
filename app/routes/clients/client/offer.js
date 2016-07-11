import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('clients.client.offer', { into: 'application' });
  },
  model(params) {
    return this.store.findRecord('offer', params.offer_id);
  },
  afterModel(model) {
    this.set('breadCrumb', {title: model.get('name')});
    Ember.run.later((function() {
      Ember.$('.datatTables').DataTable();
    }), 1500);
  },

});
