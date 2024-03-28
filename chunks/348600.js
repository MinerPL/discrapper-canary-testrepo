"use strict";
n.r(t), n.d(t, {
  BirthdayActivitiesExperiment: function() {
    return a
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2023-03_birthday_activities",
  label: "Birthday Activities",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Birthday Activities",
    config: {
      enabled: !0
    }
  }, {
    id: 2,
    label: "Geo test Enable Birthday Activities but no share",
    config: {
      enabled: !0
    }
  }]
})