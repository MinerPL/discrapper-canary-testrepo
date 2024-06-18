"use strict";
var r, i, l, s, a = n(442837),
  o = n(570140),
  u = n(358085),
  c = n(998502),
  d = n(869614),
  f = n(281083),
  v = n(672598);
let h = !1,
  C = !0,
  Z = !1;
class N extends(s = a.ZP.Store) {
  initialize() {
    !(!u.isPlatformEmbedded || __OVERLAY__) && c.ZP.getGPUDriverVersions().then(e => {
      h = (0, v.Z)(e), C = (0, d.Z)(e), Z = (0, f.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return h
  }
  get canUseHardwareAcceleration() {
    return C
  }
  get problematicGPUDriver() {
    return Z
  }
  getState() {
    return {
      GPUDriversOutdated: h,
      canUseHardwareAcceleration: C,
      problematicGPUDriver: Z
    }
  }
}
l = "StreamingCapabilitiesStore", (i = "displayName") in(r = N) ? Object.defineProperty(r, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = l, t.Z = new N(o.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    h = t.GPUDriversOutdated, C = t.canUseHardwareAcceleration
  }
})