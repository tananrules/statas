import Ember from 'ember';

export default Ember.Component.extend({
  showActions: false,

  init() {
    this._super(...arguments);
    console.log(this.get('model'));
  }
});
