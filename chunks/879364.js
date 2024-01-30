"use strict";
n.r(t), n.d(t, {
  useIsEligibleForQuests: function() {
    return s
  }
});
var a = n("374023");

function s(e) {
  return a.default.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled
}