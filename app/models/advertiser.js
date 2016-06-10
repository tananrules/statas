import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  contactFirstName: attr('string'),
  contactLastName: attr('string'),
  contactEmail: attr('string'),
  contactPhone: attr('string'),
  address: attr('string'),
  address2: attr('string'),
  city: attr('string'),
  state: attr('string'),
  country: attr('string'),
  zip: attr('string'),
  active: attr('boolean'),
  budget: attr('number')
});
