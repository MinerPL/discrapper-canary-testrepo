"use strict";
n.d(t, {
  z: function() {
    return o
  }
});
var i = n(818083),
  r = n(977156);
let s = (0, i.B)({
    id: "2024-03_quests_members_list_entrypoint",
    kind: "user",
    label: "Quests Members List Entrypoint",
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
      label: "Quests Members List Entrypoint enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  o = e => {
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