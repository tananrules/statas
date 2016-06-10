import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
  serializeIntoHash: function(data, type, record, options) {
    Ember.merge(data, this.serialize(record, options));
  }
});
