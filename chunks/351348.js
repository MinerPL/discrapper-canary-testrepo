"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2024-01_collectibles_shop_cyberpunk_marketing",
  label: "Shop Cyberpunk In App Marketing Experiment",
  defaultConfig: {
    newBadgeEnabled: !1,
    coachmarkEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enables New Badge",
    config: {
      newBadgeEnabled: !0,
      coachmarkEnabled: !1
    }
  }, {
    id: 2,
    label: "Enables Coachmark",
    config: {
      newBadgeEnabled: !1,
      coachmarkEnabled: !0
    }
  }]
});
var i = e => {
  let {
    location: t
  } = e;
  return s.useExperiment({
    location: t
  })
}