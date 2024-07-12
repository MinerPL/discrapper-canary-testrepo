n.d(t, {
  F4: function() {
return d;
  },
  mc: function() {
return E;
  },
  vw: function() {
return _;
  }
});
var r = n(594174),
  i = n(111361),
  a = n(736871),
  o = n(114064),
  s = n(1163),
  l = n(474936),
  u = n(37113);

function c() {
  let e = r.default.getCurrentUser();
  return null != e && !(0, i.I5)(e, l.p9.TIER_1);
}
let d = () => {
let {
  inPerksDemosExperiment: e
} = a.Z.getCurrentConfig({
  location: 'shouldFetchPerksDemos'
}, {
  autoTrackExposure: !1
}), {
  enabled: t
} = s.Z.getCurrentConfig({
  location: 'shouldFetchPerksDemos'
}, {
  autoTrackExposure: !1
});
return c() && o.Z.shouldFetch() && e && t;
  },
  _ = e => c() && o.Z.shouldActivate(e),
  E = (e, t) => e === u.LY.RESOLUTION_720 && t !== u.ws.FPS_60;