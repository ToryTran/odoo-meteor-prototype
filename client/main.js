import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import { Meteor } from "meteor/meteor";

import "./main.html";

Template.login_form.onCreated(function initOnCreated() {
  this.message = new ReactiveVar("");
});

Template.login_form.helpers({
  message() {
    return Template.instance().message.get();
  }
});

Template.login_form.events({
  "click .jSubmmit"(event, instance) {
    Meteor.call(
      "login",
      {
        user: {
          username: "my@odoo.com",
          password: "odoo"
        }
      },
      (errors, data) => {
        if (errors) {
          console.log("Errors: " + errors);
        } else {
          instance.message.set(data);
          console.log(data);
        }
      }
    );
  }
});
