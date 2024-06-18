"use strict";
n.d(t, {
  c: function() {
    return r
  },
  d: function() {
    return s
  }
});
var i = n(290031);

function r(e) {
  let {
    location: t
  } = e, {
    enableNitroTenureRewardCard: n
  } = i.O.useExperiment({
    location: t
  }, {
    autoTrackExposure: !1
  });
  return n
}

function s(e) {
  let {
    location: t
  } = e, {
    enableNitroTenureRewardCard: n
  } = i.O.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: !1
  });
  return n
}