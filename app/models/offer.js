import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  icon: attr('string'),
  amount: attr('string'),
  time_remaining: attr('string')
});
