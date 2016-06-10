import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  userAccess: attr('string'),
  team: attr('string'),
  status: attr('string')
});
