import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  type: attr('string'),
  address: attr('string'),
  suite: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zipCode: attr('string'),
  contactFirstName: attr('string'),
  contactLastName: attr('string'),
  contactEmail: attr('string'),
  contachPhone: attr('string')
});
