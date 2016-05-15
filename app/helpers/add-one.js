import Ember from 'ember';

export function addOne(value) {
  return parseInt(value) + 1;
}

export default Ember.Helper.helper(addOne);
