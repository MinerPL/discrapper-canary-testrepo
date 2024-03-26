"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("446674"),
  s = n("913144"),
  l = n("773336"),
  i = n("50885"),
  r = n("288207"),
  o = n("439792"),
  u = n("709496");
let d = !1,
  c = !0,
  f = !1;
class E extends a.default.Store {
  initialize() {
    !(!l.isPlatformEmbedded || __OVERLAY__) && i.default.getGPUDriverVersions().then(e => {
      d = (0, u.default)(e), c = (0, r.default)(e), f = (0, o.default)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return d
  }
  get canUseHardwareAcceleration() {
    return c
  }
  get problematicGPUDriver() {
    return f
  }
  getState() {
    return {
      GPUDriversOutdated: d,
      canUseHardwareAcceleration: c,
      problematicGPUDriver: f
    }
  }
}
E.displayName = "StreamingCapabilitiesStore";
var h = new E(s.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    d = t.GPUDriversOutdated, c = t.canUseHardwareAcceleration
  }
})