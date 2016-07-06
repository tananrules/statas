import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo } from 'ember-data/relationships';

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
  reach: attr(),
  reachNeeded: attr(),
  status: attr(),
  active: attr('boolean'),
  tags: attr(),
  tagsNeeded: Ember.computed('tags', function() {
    debugger
  });

  // time_remaining: attr(),
  
  // campaign: belongsTo('campaign'),
  // advertiser: belongsTo('advertiser'),
});
