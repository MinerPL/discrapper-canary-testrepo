"use strict";
n.r(t);
var l = n("735250"),
  u = n("470079"),
  a = n("442837"),
  i = n("481060"),
  r = n("239091"),
  d = n("883385"),
  o = n("108843"),
  s = n("2052"),
  c = n("100527"),
  f = n("906732"),
  E = n("299206"),
  M = n("976192"),
  _ = n("910693"),
  p = n("271383"),
  S = n("979651"),
  m = n("933409"),
  A = n("389052"),
  I = n("88966"),
  T = n("712301"),
  C = n("567711"),
  v = n("358386"),
  h = n("725119"),
  g = n("931617"),
  O = n("981631"),
  y = n("689938");
t.default = (0, o.default)((0, d.default)(function(e) {
  var t;
  let {
    user: n,
    guildId: d,
    channelId: o,
    context: O,
    onSelect: b,
    moderationAlertId: N,
    analyticsLocation: R,
    analyticsLocations: L,
    onCloseContextMenu: D,
    showTransferOwnershipItem: U
  } = e, {
    analyticsLocations: V
  } = (0, f.default)(c.default.CONTEXT_MENU), x = (0, s.useAnalyticsContext)(), G = null !== (t = null == L ? void 0 : L[0]) && void 0 !== t ? t : V[0], P = (0, _.useTrackModerationAction)(d, {
    location: G,
    targetUserId: n.id
  }), w = (0, a.useStateFromStores)([S.default], () => {
    var e;
    return null !== (e = S.default.getUserVoiceChannelId(d, n.id)) && void 0 !== e ? e : void 0
  }, [d, n.id]), j = u.useCallback(() => {
    P(_.ModerationActionType.COPY_ID)
  }, [P]), F = (0, a.useStateFromStores)([p.default], () => p.default.isMember(d, n.id), [d, n.id]), B = (0, h.default)(n.id, d), H = (0, I.default)(n.id, O), k = (0, M.default)({
    guildId: d,
    userId: n.id,
    analyticsLocation: null != R ? R : x.location,
    analyticsLocations: [G],
    context: O
  }), W = (0, A.default)(n, G), Y = (0, m.default)(n, d, null != o ? o : w, G), K = (0, C.default)(o, N), Z = (0, v.default)(n, d), z = (0, g.default)(n.id, d, !1, G), Q = (0, E.default)({
    id: n.id,
    label: y.default.Messages.COPY_ID_USER,
    onSuccess: j
  }), X = (0, T.default)(n, d), q = !!(null == n ? void 0 : n.isNonUserBot());
  return (0, l.jsxs)(i.Menu, {
    navId: "user-context",
    onClose: () => {
      (0, r.closeContextMenu)(), null == D || D()
    },
    "aria-label": y.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: b,
    children: [!q && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(i.MenuGroup, {
        children: [B, H]
      }), (0, l.jsxs)(i.MenuGroup, {
        children: [k, W]
      }), F && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.MenuGroup, {
          children: Y
        }), (0, l.jsxs)(i.MenuGroup, {
          children: [z, X]
        })]
      }), null != N ? K : null, U && null != Z ? (0, l.jsx)(i.MenuGroup, {
        children: Z
      }) : null]
    }), (0, l.jsx)(i.MenuGroup, {
      children: Q
    })]
  })
}, {
  object: O.AnalyticsObjects.CONTEXT_MENU
}), [c.default.CONTEXT_MENU, c.default.GUILD_MODERATION_USER_MENU])