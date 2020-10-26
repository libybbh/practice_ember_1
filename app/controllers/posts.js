import Controller from '@ember/controller';

export default Controller.extend({
  reverse: function(){
    return this.get('model').toArray().reverse();
  }.property('model.[]')
});
