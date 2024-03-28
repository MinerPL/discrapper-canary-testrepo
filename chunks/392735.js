"use strict";
s.r(t);
var a = s("818083");
t.default = (0, a.createExperiment)({
  kind: "user",
  id: "2022-06_auth_sessions_user_settings",
  label: "Auth Sessions User Settings",
  defaultConfig: {
    showSettings: !1
  },
  treatments: [{
    id: 1,
    label: "Show settings",
    config: {
      showSettings: !0
    }
  }]
})