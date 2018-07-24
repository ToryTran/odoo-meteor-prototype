import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  console.log("Starting Meteor server");
});

Meteor.methods({
  login(data) {
    return "ngon";
  }
});
