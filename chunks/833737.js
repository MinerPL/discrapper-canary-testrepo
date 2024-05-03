"use strict";
n.r(t);
var l = n("735250"),
  u = n("470079"),
  a = n("442837"),
  i = n("481060"),
  o = n("239091"),
  r = n("883385"),
  s = n("108843"),
  c = n("2052"),
  d = n("100527"),
  f = n("906732"),
  _ = n("299206"),
  E = n("976192"),
  M = n("910693"),
  A = n("271383"),
  C = n("979651"),
  T = n("933409"),
  m = n("389052"),
  v = n("88966"),
  S = n("712301"),
  p = n("567711"),
  h = n("358386"),
  I = n("725119"),
  y = n("931617"),
  O = n("981631"),
  g = n("689938");
t.default = (0, s.default)((0, r.default)(function(e) {
  var t;
  let {
    user: n,
    guildId: r,
    channelId: s,
    context: O,
    onSelect: L,
    moderationAlertId: U,
    analyticsLocation: x,
    analyticsLocations: N,
    onCloseContextMenu: R,
    showTransferOwnershipItem: D
  } = e, {
    analyticsLocations: b
  } = (0, f.default)(d.default.CONTEXT_MENU), j = (0, c.useAnalyticsContext)(), P = null !== (t = null == N ? void 0 : N[0]) && void 0 !== t ? t : b[0], F = (0, M.useTrackModerationAction)(r, {
    location: P,
    targetUserId: n.id
  }), k = (0, a.useStateFromStores)([C.default], () => {
    var e;
    return null !== (e = C.default.getUserVoiceChannelId(r, n.id)) && void 0 !== e ? e : void 0
  }, [r, n.id]), w = u.useCallback(() => {
    F(M.ModerationActionType.COPY_ID)
  }, [F]), V = (0, a.useStateFromStores)([A.default], () => A.default.isMember(r, n.id), [r, n.id]), G = (0, I.default)(n.id, r), H = (0, v.default)(n.id, O), B = (0, E.default)({
    guildId: r,
    userId: n.id,
    analyticsLocation: null != x ? x : j.location,
    analyticsLocations: [P],
    context: O
  }), Y = (0, m.default)({
    user: n,
    location: P
  }), Z = (0, T.default)(n, r, null != s ? s : k, P), z = (0, p.default)(s, U), W = (0, h.default)(n, r), K = (0, y.default)(n.id, r, !1, P), X = (0, _.default)({
    id: n.id,
    label: g.default.Messages.COPY_ID_USER,
    onSuccess: w
  }), q = (0, S.default)(n, r), Q = !!(null == n ? void 0 : n.isNonUserBot());
  return (0, l.jsxs)(i.Menu, {
    navId: "user-context",
    onClose: () => {
      (0, o.closeContextMenu)(), null == R || R()
    },
    "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: L,
    children: [!Q && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(i.MenuGroup, {
        children: [G, H]
      }), (0, l.jsxs)(i.MenuGroup, {
        children: [B, Y]
      }), V && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.MenuGroup, {
          children: Z
        }), (0, l.jsxs)(i.MenuGroup, {
          children: [K, q]
        })]
      }), null != U ? z : null, D && null != W ? (0, l.jsx)(i.MenuGroup, {
        children: W
      }) : null]
    }), (0, l.jsx)(i.MenuGroup, {
      children: X
    })]
  })
}, {
  object: O.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.GUILD_MODERATION_USER_MENU])