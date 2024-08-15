n.d(t, {
  F4: function() {
return c;
  },
  mc: function() {
return _;
  },
  vw: function() {
return d;
  }
});
var r = n(594174),
  i = n(111361),
  a = n(114064),
  s = n(1163),
  o = n(474936),
  l = n(37113);

function u() {
  let e = r.default.getCurrentUser();
  return null != e && !(0, i.I5)(e, o.p9.TIER_1);
}
let c = () => {
let {
  enabled: e
} = s.Z.getCurrentConfig({
  location: 'shouldFetchPerksDemos'
}, {
  autoTrackExposure: !1
});
return u() && a.Z.shouldFetch() && e;
  },
  d = e => u() && a.Z.shouldActivate(e),
  _ = (e, t) => e === l.LY.RESOLUTION_720 && t !== l.ws.FPS_60;