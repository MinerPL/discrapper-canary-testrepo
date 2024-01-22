"use strict";
l.r(t), l.d(t, {
  default: function() {
    return a
  }
});
var n = l("862205");
let r = (0, n.createExperiment)({
  kind: "user",
  id: "2023-12_create_guild_modal_themeing",
  label: "Create Guild Modal Force Light Theme",
  defaultConfig: {
    forceLightTheme: !1
  },
  treatments: [{
    id: 1,
    label: "Force Light Theme",
    config: {
      forceLightTheme: !0
    }
  }]
});
var a = e => {
  let {
    location: t,
    autoTrackExposure: l = !0,
    trackExposureOptions: n = {}
  } = e;
  return r.useExperiment({
    location: t
  }, {
    autoTrackExposure: l,
    trackExposureOptions: n
  })
}