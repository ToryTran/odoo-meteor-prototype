import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";

const odooServer = {
  login_api: "http://192.168.0.112:8089/api/v1/login"
};

Meteor.startup(() => {
  console.log("Starting Meteor server");
});

Meteor.methods({
  login(data) {
    // 1 Validate
    // 2 Call odoo to authenticate
    const result = HTTP.call("POST", odooServer.login_api, {
      data: {
        params: { login: data.user.username, password: data.user.password }
      },
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (result.data.error) {
      return result.data.error.data.message;
    }
    return result.data;
  }
});
