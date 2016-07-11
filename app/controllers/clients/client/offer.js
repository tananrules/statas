import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    editOffer() {
      this.toggleProperty('isEditing');
    },
    updateOffer(model) {
      model.save().then(() => {
        this.toast.success(`${model.get('name')} Updated Successfully!!`)
      })
    }
  }
});
