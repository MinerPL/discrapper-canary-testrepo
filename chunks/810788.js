"use strict";
n(47120);
var i, r = n(442837),
  s = n(570140),
  o = n(374023),
  a = n(188785);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = new Set,
  _ = {};
class d extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (_ = e.hotspotOverrides))
  }
  hasHotspot(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = !t && _[e];
    return !(a.a || o.s.isDisallowPopupsSet()) && (n || !u.has(e))
  }
  hasHiddenHotspot(e) {
    return u.has(e)
  }
  getHotspotOverride(e) {
    return _[e]
  }
  getState() {
    return {
      hiddenHotspots: u,
      hotspotOverrides: _
    }
  }
}
l(d, "displayName", "HotspotStore"), l(d, "persistKey", "hotspots"), l(d, "migrations", [e => ({
  hiddenHotspots: null != e ? e : [],
  hotspotOverrides: {}
})]), t.Z = new d(s.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      hiddenHotspots: t
    } = e;
    u = new Set(t)
  },
  HOTSPOT_HIDE: function(e) {
    let {
      location: t
    } = e;
    if (u.has(t)) return !1;
    u.add(t)
  },
  HOTSPOT_OVERRIDE_SET: function(e) {
    let {
      location: t,
      enabled: n
    } = e;
    _[t] = n
  },
  HOTSPOT_OVERRIDE_CLEAR: function(e) {
    let {
      location: t
    } = e;
    if (null == _[t]) return !1;
    delete _[t]
  }
})