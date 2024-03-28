"use strict";
n.r(t), n.d(t, {
  DiscoveryInAppReportingExperiment: function() {
    return i
  },
  useCanSeeDiscoveryContextMenu: function() {
    return r
  }
});
var a = n("470079"),
  s = n("818083"),
  l = n("695346");
let i = (0, s.createExperiment)({
  kind: "user",
  id: "2022-01_discovery_iar",
  label: "Ability to report servers in Server Discovery",
  defaultConfig: {
    canSeeInAppReportingButtons: !1
  },
  treatments: [{
    id: 1,
    label: "Show IAR buttons in Server Discovery",
    config: {
      canSeeInAppReportingButtons: !0
    }
  }]
});

function r() {
  let {
    canSeeInAppReportingButtons: e
  } = i.useExperiment({
    location: "7a11e2_1"
  }, {
    autoTrackExposure: !1
  }), t = l.DeveloperMode.useSetting();
  return a.useEffect(() => {
    i.trackExposure({
      location: "7a11e2_2"
    })
  }, []), e || t
}