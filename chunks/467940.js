"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var l = n("37983"),
  u = n("884691"),
  i = n("446674"),
  r = n("77078"),
  o = n("272030"),
  a = n("838446"),
  s = n("158534"),
  d = n("997289"),
  c = n("812204"),
  f = n("685665"),
  E = n("861370"),
  _ = n("230947"),
  m = n("130037"),
  h = n("26989"),
  M = n("800762"),
  C = n("300925"),
  v = n("489836"),
  p = n("421602"),
  S = n("459870"),
  T = n("325882"),
  A = n("625187"),
  I = n("806179"),
  g = n("97508"),
  N = n("49111"),
  y = n("782340"),
  R = (0, s.default)((0, a.default)(function(e) {
    var t;
    let {
      user: n,
      guildId: a,
      channelId: s,
      context: N,
      onSelect: R,
      moderationAlertId: b,
      analyticsLocation: L,
      analyticsLocations: O,
      onCloseContextMenu: U,
      showTransferOwnershipItem: D
    } = e, {
      analyticsLocations: P
    } = (0, f.default)(c.default.CONTEXT_MENU), G = (0, d.useAnalyticsContext)(), x = null !== (t = null == O ? void 0 : O[0]) && void 0 !== t ? t : P[0], w = (0, m.useTrackModerationAction)(a, {
      location: x,
      targetUserId: n.id
    }), F = (0, i.useStateFromStores)([M.default], () => {
      var e;
      return null !== (e = M.default.getUserVoiceChannelId(a, n.id)) && void 0 !== e ? e : void 0
    }, [a, n.id]), H = u.useCallback(() => {
      w(m.ModerationActionType.COPY_ID)
    }, [w]), j = (0, i.useStateFromStores)([h.default], () => h.default.isMember(a, n.id), [a, n.id]), B = (0, I.default)(n.id, a), V = (0, p.default)(n.id, N), k = (0, _.default)({
      guildId: a,
      userId: n.id,
      analyticsLocation: null != L ? L : G.location,
      analyticsLocations: [x],
      context: N
    }), W = (0, v.default)(n, x), Y = (0, C.default)(n, a, null != s ? s : F, x), X = (0, T.default)(s, b), K = (0, A.default)(n, a), Z = (0, g.default)(n.id, a, !1, x), z = (0, E.default)({
      id: n.id,
      label: y.default.Messages.COPY_ID_USER,
      onSuccess: H
    }), q = (0, S.default)(n, a), J = !!(null == n ? void 0 : n.isNonUserBot());
    return (0, l.jsxs)(r.Menu, {
      navId: "user-context",
      onClose: () => {
        (0, o.closeContextMenu)(), null == U || U()
      },
      "aria-label": y.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: R,
      children: [!J && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(r.MenuGroup, {
          children: [B, V]
        }), (0, l.jsxs)(r.MenuGroup, {
          children: [k, W]
        }), j && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(r.MenuGroup, {
            children: Y
          }), (0, l.jsxs)(r.MenuGroup, {
            children: [Z, q]
          })]
        }), null != b ? X : null, D && null != K ? (0, l.jsx)(r.MenuGroup, {
          children: K
        }) : null]
      }), (0, l.jsx)(r.MenuGroup, {
        children: z
      })]
    })
  }, {
    object: N.AnalyticsObjects.CONTEXT_MENU
  }), [c.default.CONTEXT_MENU, c.default.GUILD_MODERATION_USER_MENU])