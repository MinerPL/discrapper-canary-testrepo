"use strict";
n.d(t, {
  c: function() {
    return E
  }
});
var i = n(470079),
  r = n(442837),
  s = n(581883),
  o = n(914010),
  a = n(915486),
  l = n(68985),
  u = n(211644),
  _ = n(605236),
  d = n(57207),
  c = n(526761);

function E(e, t, n) {
  let E = (0, r.e7)([s.Z], () => {
      var e;
      return null === (e = s.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
    }),
    I = (0, r.e7)([o.Z], () => o.Z.getGuildId()),
    T = (0, d.i)(e),
    h = null;
  s.Z.hasLoaded(c.yP.PRELOADED_USER_SETTINGS) ? h = T.find(e => null == E || !(0, a.jl)(E, e)) : null != E && (h = T.find(e => !(0, a.jl)(E, e)));
  let S = (0, u.ZP)(e => null != h && e.currentlyShown.has(h)),
    f = (0, r.e7)([l.Z], () => null != h && l.Z.hasUserHitDCCap(h));
  i.useEffect(() => {
    if (null != h) return (0, _.kk)(h, {
      groupName: t,
      guildId: I
    }, n), () => {
      if (null == h) return;
      let e = !l.Z.hasUserHitDCCap();
      (0, u.gE)({
        content: h,
        groupName: t
      }, e)
    }
  }, [h, t, I, f, n]);
  let N = i.useCallback((e, n) => {
    null != h && (0, _.EW)(h, {
      dismissAction: e,
      groupName: t,
      guildId: I,
      forceTrack: n
    })
  }, [h, t, I]);
  return [S && null != h ? h : null, N]
}