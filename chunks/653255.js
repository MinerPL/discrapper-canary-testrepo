var r, o, i, a, c = n(442837),
  l = n(570140),
  s = n(358085),
  u = n(998502),
  d = n(869614),
  f = n(281083),
  _ = n(672598);
let p = !1,
  m = !0,
  h = !1;
class g extends(a = c.ZP.Store) {
  initialize() {
!(!s.isPlatformEmbedded || __OVERLAY__) && u.ZP.getGPUDriverVersions().then(e => {
  p = (0, _.Z)(e), m = (0, d.Z)(e), h = (0, f.Z)(e), this.emitChange();
});
  }
  get GPUDriversOutdated() {
return p;
  }
  get canUseHardwareAcceleration() {
return m;
  }
  get problematicGPUDriver() {
return h;
  }
  getState() {
return {
  GPUDriversOutdated: p,
  canUseHardwareAcceleration: m,
  problematicGPUDriver: h
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