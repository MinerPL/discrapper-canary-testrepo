"use strict";
var i, r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(70956);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
    preferredRegions: null,
    lastTestTimestamp: null,
    lastGeoRankedOrder: null
  },
  d = _,
  c = 1 * l.Z.Millis.HOUR;
class E extends(i = o.ZP.DeviceSettingsStore) {
  initialize(e) {
    d = null != e ? e : _
  }
  shouldIncludePreferredRegion() {
    return null != d.preferredRegions
  }
  getPreferredRegion() {
    var e, t;
    return null !== (t = null === (e = d.preferredRegions) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : null
  }
  getPreferredRegions() {
    return d.preferredRegions
  }
  getRegion(e) {
    if (null != e) return e.substr(0, e.search(/\d/))
  }
  getUserAgnosticState() {
    return d
  }
  shouldPerformLatencyTest(e) {
    var t, n;
    return null === d.preferredRegions || !s().isEqual(e, null !== (t = d.lastGeoRankedOrder) && void 0 !== t ? t : []) || Date.now() - (null !== (n = d.lastTestTimestamp) && void 0 !== n ? n : 0) >= c
  }
}
u(E, "displayName", "RTCRegionStore"), u(E, "persistKey", "RTCRegionStore"), u(E, "migrations", [e => (e.preferredRegion ? e.preferredRegions = [e.preferredRegion] : e.preferredRegions = null, delete e.preferredRegion, e)]), t.Z = new E(a.Z, {
  RTC_LATENCY_TEST_COMPLETE: function(e) {
    e.latencyRankedRegions.length > 0 && (d.lastGeoRankedOrder = e.geoRankedRegions, d.preferredRegions = e.latencyRankedRegions), d.lastTestTimestamp = Date.now()
  }
})