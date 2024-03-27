"use strict";
n.r(t), n.d(t, {
  useIsEligibleForFamilyCenterVCJoin: function() {
    return l
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2024-02_family_center_vc_join",
  label: "Family Center VC Join",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable VC Join in Family Center",
    config: {
      enabled: !0
    }
  }]
});

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = !1
  } = e, {
    enabled: a
  } = s.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return a
}