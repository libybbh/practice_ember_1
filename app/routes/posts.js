import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model (){
    return this.store.findAll('post');
  },

  actions: {
    addPost(n_title, n_body, n_userId) {
      var myStore = this.store;
      let jsonData = $.getJSON('https://jsonplaceholder.typicode.com/posts');

      jsonData.then(function(data) {
        var sizeOfData = data.length;
        alert("JsonData array size is: " + sizeOfData);

        var newPost={
          userId: n_userId,
          id: sizeOfData + 1,
          title: n_title,
          body: n_body
        }

        myStore.pushPayload({
          posts: [newPost]
        });
      });

     // var size1 = Object.keys(jsonData).length; -> get 16, not 100

      /*var newRecord = this.store.push('post', {
        userId: p_userId,
        title: p_title,
        body: p_body
      });
      ---------------
      this.store.pushPayload({
        posts: [
          {
            userId: p_userId,
            id: this.store.key(),
            title: p_title,
            body: p_body
          }
        ]
      });*/

    }}
});
