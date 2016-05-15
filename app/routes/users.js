import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      users: [
      {
        name: 'John Smith',
        type: 'am',
        active_rev: '$100,000',
        lte: '$320,000',
        rp: 19
      },
      {
        name: 'Lucas Bean',
        type: 'im',
        active_rev: '$50,000',
        lte: '$120,000',
        rp: 10
      }]
    }
  }
});
