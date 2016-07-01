import Ember from 'ember';
import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
  serializeIntoHash: function(data, type, record, options) {
    Ember.merge(data, this.serialize(record, options));
  },
  normalizeFindRecordResponse (store, primaryModelClass, payload, id, requestType) {
    let modelName = primaryModelClass.modelName;
    let newPayload = {};
    newPayload[modelName] = payload;
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
  