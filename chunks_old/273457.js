"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007"), n("506083");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("970728"),
  r = n("393414"),
  o = n("305961"),
  u = n("337543"),
  d = n("554054"),
  c = n("831588"),
  f = n("927475"),
  E = n("49111"),
  h = n("289382"),
  _ = n("789283"),
  C = e => {
    let {
      guildId: t,
      inviteCode: n
    } = e, [C, S] = s.useState(h.WaveStates.INITIAL), [I, m] = s.useState(null != n);
    s.useEffect(() => {
      null != n && i.default.resolveInvite(n, "Hub").finally(() => m(!1))
    }, [n]);
    let p = (0, l.useStateFromStores)([u.default], () => null != n ? u.default.getInvite(n) : null),
      T = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(t));
    s.useEffect(() => {
      null != T && (0, r.transitionTo)(E.Routes.CHANNEL(t))
    }, [T, t]);
    let g = s.useCallback(e => {
        S(t => Math.max(t, e))
      }, []),
      A = (0, c.getArtForPath)();
    return (0, a.jsx)("div", {
      className: _.page,
      children: (0, a.jsxs)(d.default, {
        embedded: !0,
        splash: A,
        waveState: C,
        showLogo: !1,
        updateWaveState: g,
        children: [(0, a.jsx)("div", {
          className: _.dragRegion
        }), (0, a.jsx)("div", {
          className: _.contentWrapper,
          children: !I && (0, a.jsx)(f.HubEmailConnectionModalView, {
            invite: p
          })
        })]
      })
    })
  }