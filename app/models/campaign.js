import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  type: attr('string'),
  budget: attr('number'),
  description: attr('string'),
  added: attr('date'),

  advertiser: belongsTo('advertiser'),
  offers: hasMany('offer'),
  
  timeRemaining: Ember.computed('added', function() {    
    let  delta = Math.abs(Date.now() - Date.parse(this.get('added'))) / 1000;
    let days = Math.floor(delta / 86400);
    if (days.toString().length === 1) {
      days = `0${days}`;
    }
    delta -= days * 86400;
    let hours = Math.floor(delta / 3600) % 24;
    if (hours.toString().length === 1) {
      hours = `0${hours}`;
    }
    delta -= hours * 3600;
    let minutes = Math.floor(delta / 60) % 60;
    if (minutes.toString().length === 1) {
      minutes = `0${minutes}`;
    }
    delta -= minutes * 60;
    return `${days} ${hours} ${minutes}`; 
  })
});
