import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log("Starting Meteor server");
});


Meteor.publish('auth.login', function(data) {
  return { 
    data: 'abc'
  };
});