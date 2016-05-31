import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('clients.offers', { into: 'application' });
  },
});
