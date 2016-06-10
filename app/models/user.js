import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  userAccess: attr('string'),
  team: attr('string'),
  status: attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `this.get('firstName') this.get('lastName')`;
  })
});
