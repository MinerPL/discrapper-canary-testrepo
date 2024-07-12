var r, o, i, c, a = n(442837),
  l = n(570140),
  d = n(358085),
  s = n(998502),
  u = n(869614),
  _ = n(281083),
  f = n(672598);
let p = !1,
  m = !0,
  b = !1;
class g extends(c = a.ZP.Store) {
  initialize() {
!(!d.isPlatformEmbedded || __OVERLAY__) && s.ZP.getGPUDriverVersions().then(e => {
  p = (0, f.Z)(e), m = (0, u.Z)(e), b = (0, _.Z)(e), this.emitChange();
});
  }
  get GPUDriversOutdated() {
return p;
  }
  get canUseHardwareAcceleration() {
return m;
  }
  get problematicGPUDriver() {
return b;
  }
  getState() {
return {
  GPUDriversOutdated: p,
  canUseHardwareAcceleration: m,
  problematicGPUDriver: b
};
  }
}
i = 'StreamingCapabilitiesStore', (o = 'displayName') in(r = g) ? Object.defineProperty(r, o, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = i, t.Z = new g(l.Z, {
  OVERLAY_INITIALIZE: function(e) {
let {
  streamingCapabilitiesStoreState: t
} = e;
p = t.GPUDriversOutdated, m = t.canUseHardwareAcceleration;
  }
});