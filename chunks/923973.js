"use strict";
n.d(t, {
  Z: function() {
    return l
  }
}), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(442837),
  o = n(131951),
  a = n(65154);

function l() {
  let {
    enabled: e,
    cameraUnavailable: t
  } = (0, s.cj)([o.Z], () => {
    var e, t;
    let n = null === (t = null === (e = r()(o.Z.getVideoDevices()).values().first()) || void 0 === e ? void 0 : e.disabled) || void 0 === t || t;
    return {
      enabled: o.Z.isVideoEnabled(),
      cameraUnavailable: n || !o.Z.supports(a.AN.VIDEO)
    }
  });
  return {
    enabled: e,
    cameraUnavailable: t
  }
}