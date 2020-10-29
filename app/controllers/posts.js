import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  /*reverse: function(){
    return this.get('model').toArray().reverse(); old  version of property=computed
  }.property('model.[]')*/
  reverse: computed('model.[]', function () {
    return this.get('model').toArray().reverse();
  })
});

