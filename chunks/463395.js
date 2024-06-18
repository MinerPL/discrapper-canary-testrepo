"use strict";
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(433517),
  d = n(570140),
  c = n(65154);
let E = "CertifiedDeviceStore",
  I = {},
  T = {},
  h = 0;

function S(e, t, n) {
  let i = T[e];
  return null != i ? n(i) : t
}

function f(e, t) {
  let n = I[e];
  null != n && n.forEach(e => delete T[e.id]), I[e] = t, t.forEach(e => T[e.id] = e)
}
class N extends(o = u.ZP.Store) {
  initialize() {
    let e = _.K.get(E);
    null != e && l().forEach(e, (e, t) => {
      e.forEach(e => {
        "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = !1)
      }), f(t, e)
    })
  }
  isCertified(e) {
    return null != T[e]
  }
  getCertifiedDevice(e) {
    return T[e]
  }
  getCertifiedDeviceName(e, t) {
    let n = this.getCertifiedDevice(e);
    return null != n ? "".concat(n.vendor.name, " ").concat(n.model.name) : t
  }
  getCertifiedDeviceByType(e) {
    return l().find(T, t => t.type === e)
  }
  isHardwareMute(e) {
    return S(e, !1, e => e.type === c.h7.AUDIO_INPUT && e.hardwareMute)
  }
  hasEchoCancellation(e) {
    return S(e, !1, e => e.type === c.h7.AUDIO_INPUT && e.echoCancellation)
  }
  hasNoiseSuppression(e) {
    return S(e, !1, e => e.type === c.h7.AUDIO_INPUT && e.noiseSuppression)
  }
  hasAutomaticGainControl(e) {
    return S(e, !1, e => e.type === c.h7.AUDIO_INPUT && e.automaticGainControl)
  }
  getVendor(e) {
    return S(e, null, e => e.vendor)
  }
  getModel(e) {
    return S(e, null, e => e.model)
  }
  getRevision() {
    return h
  }
}
s = "CertifiedDeviceStore", (r = "displayName") in(i = N) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new N(d.Z, {
  CERTIFIED_DEVICES_SET: function(e) {
    let {
      applicationId: t,
      devices: n
    } = e;
    f(t, n), _.K.set(E, I), h++
  }
})