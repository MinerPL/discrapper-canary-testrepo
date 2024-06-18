"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(470079),
  r = n(230711),
  s = n(906732),
  o = n(18438);
n(778825);
var a = n(981631),
  l = n(526761);

function u() {
  let {
    guild: e,
    scrollPosition: t,
    analyticsLocation: n,
    analyticsLocations: u,
    openWithoutBackstack: _
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
    analyticsLocations: d
  } = (0, s.ZP)();
  return (0, i.useCallback)(() => {
    null != e && (0, o.Fq)(e, null != u ? u : d), r.Z.open(a.oAB.PROFILE_CUSTOMIZATION, null != e ? l.NB.GUILD : l.NB.USER_PROFILE, {
      scrollPosition: t,
      analyticsLocation: n,
      analyticsLocations: u,
      openWithoutBackstack: _
    })
  }, [e, t, n, u, _, d])
}