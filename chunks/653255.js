var i, a, s, r, l = n(442837),
  o = n(570140),
  c = n(358085),
  d = n(998502),
  u = n(869614),
  _ = n(281083),
  h = n(672598);
let E = !1,
  I = !0,
  m = !1;
class g extends(r = l.ZP.Store) {
  initialize() {
!(!c.isPlatformEmbedded || __OVERLAY__) && d.ZP.getGPUDriverVersions().then(e => {
  E = (0, h.Z)(e), I = (0, u.Z)(e), m = (0, _.Z)(e), this.emitChange();
});
  }
  get GPUDriversOutdated() {
return E;
  }
  get canUseHardwareAcceleration() {
return I;
  }
  get problematicGPUDriver() {
return m;
  }
  getState() {
return {
  GPUDriversOutdated: E,
  canUseHardwareAcceleration: I,
  problematicGPUDriver: m
};
  }
}
s = 'StreamingCapabilitiesStore', (a = 'displayName') in(i = g) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new g(o.Z, {
  OVERLAY_INITIALIZE: function(e) {
let {
  streamingCapabilitiesStoreState: t
} = e;
E = t.GPUDriversOutdated, I = t.canUseHardwareAcceleration;
  }
});