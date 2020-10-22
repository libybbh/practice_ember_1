import Route from '@ember/routing/route';
import {set} from '@ember/object';

export default Route.extend({
  model (){
    return this.store.findAll('post');

  },

  actions: {
    addPost(p_title, p_body, p_userId) {
      var newRecord = this.store.push('post', {
        userId: p_userId,
        title: p_title,
        body: p_body
      });
    }}
});
