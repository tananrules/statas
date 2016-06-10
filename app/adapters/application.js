import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://glowing-willow-125918.appspot.com',
  namespace: 'api',
  headers: {
    'Content-Type': 'application/json'
  }
});
