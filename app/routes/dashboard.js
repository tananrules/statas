import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  
  model() {
    return {
      offers: [
        {
          name: "Atari",
          description: "I Love Strawberries",
          icon: "mobile-phone",
          amount: "12,000,000",
          time_remaining: "05 12 45"
        },
        {
          name: "Apple",
          description: "itunes fest",
          icon: 'music',
          amount: "10,000,000",
          time_remaining: "02 05 32"
        }
      ]
    };
  },

  redirect() {
    if(this.get('session.isAuthenticated')  === false) {
      this.transitionTo('login');
    }
  }
});
