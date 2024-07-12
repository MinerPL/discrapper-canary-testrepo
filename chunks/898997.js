n.d(t, {
  B: function() {
return u;
  }
});
var s = n(470079),
  a = n(442837),
  r = n(594174),
  i = n(74538),
  l = n(140465),
  o = n(775412),
  c = n(276444),
  d = n(520540),
  _ = n(474936);
let u = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = (0, a.e7)([r.default], () => r.default.getCurrentUser()),
u = (0, l.t7)(),
E = (0, o._O)(),
{
  eligibleToFetch: T
} = d.g.useExperiment({
  location: e
}, {
  autoTrackExposure: !1
}),
I = T && null != n && n.verified && (0, i.M5)(n, _.p9.TIER_2) && !u && !E;
  s.useEffect(() => {
I && !t && c.Z.checkAndFetchReferralsRemaining();
  }, [
I,
t
  ]);
};