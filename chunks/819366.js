"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var i = n("735250"),
  r = n("470079"),
  a = n("512722"),
  s = n.n(a),
  o = n("873546"),
  l = n("442837"),
  u = n("481060"),
  d = n("239091"),
  _ = n("100527"),
  c = n("906732"),
  E = n("797610"),
  I = n("927723"),
  T = n("484459"),
  f = n("103575"),
  S = n("592125"),
  h = n("271383"),
  A = n("430824"),
  m = n("699516"),
  N = n("594174"),
  p = n("797053"),
  O = n("5192"),
  C = n("51144"),
  R = n("377668");

function g(e) {
  let {
    userId: t,
    className: a,
    children: s
  } = e, o = r.useCallback(() => {
    (0, I.showInaccessibleLinkModal)({
      kind: "user"
    })
  }, []), l = r.useCallback(e => {
    null != t && (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("25073").then(n.bind(n, "80742"));
      return n => (0, i.jsx)(e, {
        ...n,
        userId: t
      })
    })
  }, [t]);
  return (0, i.jsx)(p.default, {
    className: a,
    onClick: o,
    onContextMenu: l,
    children: s
  })
}

function L(e) {
  let {
    className: t,
    userId: r,
    channelId: a,
    parsedUserId: I,
    content: L,
    inlinePreview: v = !1
  } = e, {
    analyticsLocations: D
  } = (0, c.default)(_.default.USER_MENTION), M = (0, l.useStateFromStores)([N.default], () => N.default.getUser(r)), y = (0, l.useStateFromStores)([S.default], () => S.default.getChannel(a)), P = null != y ? y.getGuildId() : null, U = v || null == M || null == P || null == a ? void 0 : e => {
    null != y && (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("36441"), n.e("82882"), n.e("12435"), n.e("7717"), n.e("80869")]).then(n.bind(n, "757387"));
      return t => (0, i.jsx)(e, {
        ...t,
        user: M,
        channel: y,
        guildId: P
      })
    })
  }, b = C.default.useName(M), G = (0, l.useStateFromStores)([S.default, h.default, m.default], () => O.default.getNickname(P, a, M)), w = A.default.getGuild(P), k = (0, E.useClydeEnabled)(w, y) && r === R.CLYDE_AI_USER_ID ? R.CLYDE_AI_MENTION_COLOR : null;
  if (null == M) return (0, i.jsx)(g, {
    userId: I,
    className: t,
    children: L
  });
  let B = e => (0, i.jsx)(p.default, {
    className: t,
    onContextMenu: U,
    color: k,
    ...e,
    children: "@".concat(null != G ? G : b)
  });
  return v ? (0, i.jsx)(c.AnalyticsLocationProvider, {
    value: D,
    children: B()
  }) : (0, i.jsx)(c.AnalyticsLocationProvider, {
    value: D,
    children: (0, i.jsx)(u.Popout, {
      preload: null == M ? void 0 : () => (0, T.maybeFetchUserProfileForPopout)(M.id, M.getAvatarURL(P, 80), {
        guildId: null != P ? P : void 0,
        channelId: null != a ? a : void 0
      }),
      renderPopout: e => (s()(null != M, "Unexpected missing user"), (0, i.jsx)(f.default, {
        location: "UserMention",
        userId: M.id,
        guildId: null != P ? P : void 0,
        channelId: a,
        ...e
      })),
      position: o.isMobile ? "top" : "right",
      children: e => B(e)
    })
  })
}