"use strict";
n.d(t, {
  Z: function() {
    return L
  }
});
var i = n(735250),
  r = n(470079),
  s = n(512722),
  o = n.n(s),
  a = n(873546),
  l = n(442837),
  u = n(481060),
  _ = n(239091),
  d = n(100527),
  c = n(906732),
  E = n(797610),
  I = n(927723),
  T = n(484459),
  h = n(103575),
  S = n(592125),
  f = n(271383),
  N = n(430824),
  A = n(699516),
  m = n(594174),
  O = n(797053),
  R = n(5192),
  C = n(51144),
  p = n(377668);

function g(e) {
  let {
    userId: t,
    className: s,
    children: o
  } = e, a = r.useCallback(() => {
    (0, I.k)({
      kind: "user"
    })
  }, []), l = r.useCallback(e => {
    if (null != t)(0, _.jW)(e, async () => {
      let {
        default: e
      } = await n.e("25073").then(n.bind(n, 80742));
      return n => (0, i.jsx)(e, {
        ...n,
        userId: t
      })
    })
  }, [t]);
  return (0, i.jsx)(O.Z, {
    className: s,
    onClick: a,
    onContextMenu: l,
    children: o
  })
}

function L(e) {
  let {
    className: t,
    userId: r,
    channelId: s,
    parsedUserId: I,
    content: L,
    inlinePreview: v = !1,
    viewingChannelId: D
  } = e, {
    analyticsLocations: M
  } = (0, c.ZP)(d.Z.USER_MENTION), P = (0, l.e7)([m.default], () => m.default.getUser(r)), y = (0, l.e7)([S.Z], () => S.Z.getChannel(s)), U = null != y ? y.getGuildId() : null, b = v || null == P || null == U || null == s ? void 0 : e => {
    null != y && (0, _.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("71580")]).then(n.bind(n, 757387));
      return t => (0, i.jsx)(e, {
        ...t,
        viewingChannelId: D,
        user: P,
        channel: y,
        guildId: U
      })
    })
  }, G = C.ZP.useName(P), w = (0, l.e7)([S.Z, f.ZP, A.Z], () => R.ZP.getNickname(U, s, P)), k = N.Z.getGuild(U), B = (0, E.Ib)(k, y) && r === p.fL ? p.jM : null;
  if (null == P) return (0, i.jsx)(g, {
    userId: I,
    className: t,
    children: L
  });
  let x = e => (0, i.jsx)(O.Z, {
    className: t,
    onContextMenu: b,
    color: B,
    ...e,
    children: "@".concat(null != w ? w : G)
  });
  return v ? (0, i.jsx)(c.Gt, {
    value: M,
    children: x()
  }) : (0, i.jsx)(c.Gt, {
    value: M,
    children: (0, i.jsx)(u.Popout, {
      preload: null == P ? void 0 : () => (0, T.W)(P.id, P.getAvatarURL(U, 80), {
        guildId: null != U ? U : void 0,
        channelId: null != s ? s : void 0
      }),
      renderPopout: e => (o()(null != P, "Unexpected missing user"), (0, i.jsx)(h.Z, {
        location: "UserMention",
        userId: P.id,
        guildId: null != U ? U : void 0,
        channelId: s,
        ...e
      })),
      position: a.tq ? "top" : "right",
      children: e => x(e)
    })
  })
}