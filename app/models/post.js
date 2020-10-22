import DS from 'ember-data';

const{ attr } = DS;

export default DS.Model.extend({
  userId: attr(),
  //id: attr(), Ember-data automatically handles that
  title: attr(),
  body: attr(),

});

