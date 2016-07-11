import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr(),
  offerText: attr(),
  offerURL: attr(),
  gender: attr(),
  budget: attr(),
  budgetLeft: attr(),
  offerImageURL: attr(),
  startDate: attr(),
  endDate: attr(),
  DMA: attr(),
  campaignID: attr(),
  advertiserID: attr(),
  reach: attr(),
  reachNeeded: attr(),
  active: attr('boolean'),
  approved: attr('boolean'),
  status: attr('string'),
  createdAt: attr('date', {
    defaultValue() { return new Date(); }
  })
});
