n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(470079),
  i = n(230711),
  a = n(906732),
  s = n(18438);
n(778825);
var o = n(981631),
  l = n(526761);

function u() {
  let {
guild: e,
scrollPosition: t,
analyticsLocation: n,
analyticsLocations: u,
openWithoutBackstack: c
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
analyticsLocations: d
  } = (0, a.ZP)();
  return (0, r.useCallback)(() => {
null != e && (0, s.Fq)(e, null != u ? u : d);
i.Z.open(o.oAB.PROFILE_CUSTOMIZATION, null != e ? l.NB.GUILD : l.NB.USER_PROFILE, {
  analyticsLocation: n,
  analyticsLocations: u,
  openWithoutBackstack: c,
  scrollPosition: t
});
  }, [
e,
t,
n,
u,
c,
d
  ]);
}