import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return {
      offers: [
        {
          name: "Atari",
          description: "I Love Strawberries",
          icon: "youtube-play",
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
  }
});
