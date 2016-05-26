import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', {path: '/'});
  this.route('login');
  this.route('users');
  this.route('clients', function() {
    this.route('offers');
    this.route('campaigns');
  });
});

export default Router;
