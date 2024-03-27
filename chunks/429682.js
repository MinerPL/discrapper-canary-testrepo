"use strict";
n.r(t), n.d(t, {
  isIFrameModalForGuildEnabled: function() {
    return s
  }
});
var i = n("862205"),
  a = n("49111");
let l = (0, i.createExperiment)({
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

function s(e) {
  return l.getCurrentConfig({
    guildId: null != e ? e : a.EMPTY_STRING_SNOWFLAKE_ID,
    location: "2d360b_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}