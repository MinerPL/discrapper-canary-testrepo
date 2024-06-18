"use strict";
n.d(t, {
  e: function() {
    return r
  }
});
var i, r, s = n(818083);
(i = r || (r = {})).ALLOWED = "allowed", i.DEFAULT = "default", t.Z = (0, s.B)({
  kind: "guild",
  id: "2023-09_user_apps_guild",
  label: "Allow user app commands",
  defaultConfig: {
    userAppsTreatment: "default"
  },
  treatments: [{
    id: 1,
    label: "Allow user app commands",
    config: {
      userAppsTreatment: "allowed"
    }
  }]
})