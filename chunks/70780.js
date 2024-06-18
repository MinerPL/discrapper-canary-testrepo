"use strict";
n.d(t, {
  J: function() {
    return s
  },
  o: function() {
    return o
  }
});
var i = n(544891),
  r = n(570140);

function s() {
  var e;
  return i.tn.get("".concat((e = "https:", "https:")).concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT))
}

function o(e, t) {
  r.Z.dispatch({
    type: "RTC_LATENCY_TEST_COMPLETE",
    latencyRankedRegions: e,
    geoRankedRegions: t
  })
}