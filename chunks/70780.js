n.d(t, {
  J: function() {
return a;
  },
  o: function() {
return o;
  }
});
var r = n(544891),
  i = n(570140);

function a() {
  var e;
  return r.tn.get(''.concat((e = 'https:', 'https:')).concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT));
}

function o(e, t) {
  i.Z.dispatch({
type: 'RTC_LATENCY_TEST_COMPLETE',
latencyRankedRegions: e,
geoRankedRegions: t
  });
}