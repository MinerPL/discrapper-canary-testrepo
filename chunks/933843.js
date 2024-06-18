"use strict";
n.d(t, {
  F4: function() {
    return d
  },
  mc: function() {
    return E
  },
  vw: function() {
    return c
  }
});
var i = n(594174),
  r = n(74538),
  s = n(736871),
  o = n(351742),
  a = n(114064),
  l = n(474936),
  u = n(37113);

function _() {
  let e = i.default.getCurrentUser();
  return null != e && !(0, r.I5)(e, l.p9.TIER_1)
}
let d = () => {
    let {
      inPerksDemosExperiment: e
    } = s.Z.getCurrentConfig({
      location: "shouldFetchPerksDemos"
    }, {
      autoTrackExposure: !1
    }), {
      enabled: t
    } = o.Z.getCurrentConfig({
      location: "shouldFetchPerksDemos"
    }, {
      autoTrackExposure: !1
    });
    return _() && a.Z.shouldFetch() && e && t
  },
  c = e => _() && a.Z.shouldActivate(e),
  E = (e, t) => e === u.LY.RESOLUTION_720 && t !== u.ws.FPS_60