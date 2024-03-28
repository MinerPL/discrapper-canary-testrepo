"use strict";
n.r(t), n.d(t, {
  useIsEligibleForFamilyCenterVCJoin: function() {
    return s
  }
});
let a = (0, n("818083").createExperiment)({
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

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = !1
  } = e, {
    enabled: s
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return s
}