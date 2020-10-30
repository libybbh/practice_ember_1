import Controller from '@ember/controller';
import {isPresent} from '@ember/utils';
import {computed, observer, set} from '@ember/object';

export default Controller.extend({
  isDisabled: true,
  isHidden_userId: true,
  isHidden_title: true,
  isHidden_body: true,

  reverse: computed('model.[]', function () {
    return this.get('model').toArray().reverse();
  }),

  isBtnDisabled: observer('userId', 'title', 'body', function () {                  // how it observe correct variables?
    if (!isPresent(this.userId) | !isPresent(this.title) | !isPresent(this.body)) { // why here we can't use userId body title like in line above
      set(this, 'isDisabled', true);
    } else{
      set(this, 'isDisabled', false);
    }
    if (!isPresent(this.userId)) set(this, 'isHidden_userId', false); else set(this, 'isHidden_userId', true);
    if (!isPresent(this.title)) set(this, 'isHidden_title', false); else set(this, 'isHidden_title', true);
    if (!isPresent(this.body)) set(this, 'isHidden_body', false); else set(this, 'isHidden_body', true);
  })
});

/*
  // old computed method
  reverse: function(){
    return this.get('model').toArray().reverse();
  }.property('model.[]')

  // old observer method
  valueObserver: function () {
    if (this.n_userId === null | !isPresent(this.n_title) | !isPresent(this.n_body)) {
      set(this, 'isDisabled', true);
    } else set(this, 'isDisabled', false);
  }.observes('n_title', 'n_body', 'n_userId')
*/
