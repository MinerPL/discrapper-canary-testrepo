"use strict";
n.d(t, {
  A: function() {
    return a
  },
  J: function() {
    return o
  }
});
var i = n(818083),
  r = n(977156);
let s = (0, i.B)({
    id: "2024-04_quest_playtime_task",
    kind: "user",
    label: "Quest Playtime Task",
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
      label: "Playtime enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  o = e => {
    let {
      location: t,
      autoTrackExposure: n = !1
    } = e;
    return s.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: n
    }).enabled
  },
  a = e => {
    let {
      location: t,
      autoTrackExposure: n = !1
    } = e, i = (0, r.Zy)({
      location: t
    }), {
      enabled: o
    } = s.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
    return i && o
  }