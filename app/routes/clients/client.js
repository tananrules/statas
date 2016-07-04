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
