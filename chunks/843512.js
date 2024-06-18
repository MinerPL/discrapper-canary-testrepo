"use strict";
var s = n(818083);
t.Z = (0, s.B)({
  id: "2024-03_passwordless_login",
  label: "Passwordless Login",
  kind: "user",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enabled: !1
    }
  }, {
    id: 1,
    label: "Early Release",
    config: {
      enabled: !0
    }
  }, {
    id: 2,
    label: "Treatment",
    config: {
      enabled: !0
    }
  }]
})