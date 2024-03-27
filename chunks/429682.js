"use strict";
n.r(t), n.d(t, {
  isIFrameModalForGuildEnabled: function() {
    return d
  }
});
var l = n("862205"),
  u = n("49111");
let a = (0, l.createExperiment)({
  kind: "guild",
  id: "2023-08_iframe_modal_guild",
  label: "iFrame Modal guild experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable iFrame Modal Guild",
    config: {
      enabled: !0
    }
  }]
});

function d(e) {
  return a.getCurrentConfig({
    guildId: null != e ? e : u.EMPTY_STRING_SNOWFLAKE_ID,
    location: "2d360b_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}