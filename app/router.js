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
    this.route('client', {path: ':client_id'});
    this.route('campaigns');
    this.route('offers');
  });
});

export default Router;
