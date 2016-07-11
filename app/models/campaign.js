import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  type: attr('string'),
  budget: attr('number'),
  // budgetLeft: attr('number'),
  description: attr('string'),
  startsAt: attr('string'),
  endsAt: attr('string'),
  advertiserId: attr('string'),
  createdAt: attr('date', {
    defaultValue() { return new Date(); }
  }),
});
