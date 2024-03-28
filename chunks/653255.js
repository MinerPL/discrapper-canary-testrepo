"use strict";
n.r(t);
var l, r, s, a, i = n("442837"),
  u = n("570140"),
  o = n("358085"),
  c = n("998502"),
  d = n("869614"),
  f = n("281083"),
  C = n("672598");
let h = !1,
  v = !0,
  p = !1;
class m extends(a = i.default.Store) {
  initialize() {
    !(!o.isPlatformEmbedded || __OVERLAY__) && c.default.getGPUDriverVersions().then(e => {
      h = (0, C.default)(e), v = (0, d.default)(e), p = (0, f.default)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return h
  }
  get canUseHardwareAcceleration() {
    return v
  }
  get problematicGPUDriver() {
    return p
  }
  getState() {
    return {
      GPUDriversOutdated: h,
      canUseHardwareAcceleration: v,
      problematicGPUDriver: p
    }
  }
}
s = "StreamingCapabilitiesStore", (r = "displayName") in(l = m) ? Object.defineProperty(l, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[r] = s, t.default = new m(u.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    h = t.GPUDriversOutdated, v = t.canUseHardwareAcceleration
  }
})