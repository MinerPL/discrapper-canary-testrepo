"use strict";
var i = n(818083);
t.Z = (0, i.B)({
  kind: "user",
  id: "2024-03_airpods_mute_support",
  label: "Support for muting/unmuting via AirPods",
  defaultConfig: {
    airpodsMuteSupported: !1
  },
  treatments: [{
    id: 1,
    label: "AirPods mute enabled",
    config: {
      airpodsMuteSupported: !0
    }
  }]
})