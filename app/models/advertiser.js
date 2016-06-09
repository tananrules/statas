import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  contactName: attr('string'),
  email: attr('string'),
  backupContactName: attr('string'),
  backupContactEmail: attr('string'),
  address: attr('string'),
  address2: attr('string'),
  city: attr('string'),
  state: attr('string'),
  country: attr('string'),
  zip: attr('string'),
  cell: attr('string'),
  phone: attr('string'),
  active: attr('boolean'),
  budget: attr('number')
});
