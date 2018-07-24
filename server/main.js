import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";

const odooServer = {
  login_api: "http://192.168.99.100:8069/"
};

Meteor.startup(() => {
  console.log("Starting Meteor server");
});

Meteor.methods({
  login(data) {
    // 1 Validate
    // 2 Call odoo to authenticate
    const result = HTTP.call("POST", odooServer.login_api, {
      data: { some: "json", stuff: 1 }
    });

    if (result.data.error) {
      return result.data.error.data.message;
    }
    return result.data;
  }
});
