var r, i, a, o, s = n(392711),
  l = n.n(s),
  u = n(442837),
  c = n(433517),
  d = n(570140),
  _ = n(65154);
let E = 'CertifiedDeviceStore',
  f = {},
  h = {},
  p = 0;

function m(e, t, n) {
  let r = h[e];
  return null != r ? n(r) : t;
}

function I(e, t) {
  let n = f[e];
  null != n && n.forEach(e => delete h[e.id]), f[e] = t, t.forEach(e => h[e.id] = e);
}
class T extends(o = u.ZP.Store) {
  initialize() {
let e = c.K.get(E);
null != e && l().forEach(e, (e, t) => {
  e.forEach(e => {
    'audioinput' === e.type && e.hardwareMute && (e.hardwareMute = !1);
  }), I(t, e);
});
  }
  isCertified(e) {
return null != h[e];
  }
  getCertifiedDevice(e) {
return h[e];
  }
  getCertifiedDeviceName(e, t) {
let n = this.getCertifiedDevice(e);
return null != n ? ''.concat(n.vendor.name, ' ').concat(n.model.name) : t;
  }
  getCertifiedDeviceByType(e) {
return l().find(h, t => t.type === e);
  }
  isHardwareMute(e) {
return m(e, !1, e => e.type === _.h7.AUDIO_INPUT && e.hardwareMute);
  }
  hasEchoCancellation(e) {
return m(e, !1, e => e.type === _.h7.AUDIO_INPUT && e.echoCancellation);
  }
  hasNoiseSuppression(e) {
return m(e, !1, e => e.type === _.h7.AUDIO_INPUT && e.noiseSuppression);
  }
  hasAutomaticGainControl(e) {
return m(e, !1, e => e.type === _.h7.AUDIO_INPUT && e.automaticGainControl);
  }
  getVendor(e) {
return m(e, null, e => e.vendor);
  }
  getModel(e) {
return m(e, null, e => e.model);
  }
  getRevision() {
return p;
  }
}
a = 'CertifiedDeviceStore', (i = 'displayName') in(r = T) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new T(d.Z, {
  CERTIFIED_DEVICES_SET: function(e) {
let {
  applicationId: t,
  devices: n
} = e;
I(t, n), c.K.set(E, f), p++;
  }
});