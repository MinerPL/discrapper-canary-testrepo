"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("862205");
let s = (0, n.createExperiment)({
  kind: "user",
  id: "2022-08_message_todos_staff_only",
  label: "Message TODO list",
  defaultConfig: {
    showReminders: !1
  },
  treatments: [{
    id: 1,
    label: "Show message TODOs CTA",
    config: {
      showReminders: !0
    }
  }]
});
var r = s