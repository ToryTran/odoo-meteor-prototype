import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.login_form.events({
  'click .jSubmmit'(event, instance) {
    console.log("click on jsubmmit");
    let handle = instance.subscribe('auth.login', { user: {
        username: "abc",
        password: 123
      }
    }, function(data) {
      console.log(data);
    });
  }
});