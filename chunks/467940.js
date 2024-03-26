"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var l = n("37983"),
  i = n("884691"),
  u = n("446674"),
  r = n("77078"),
  o = n("272030"),
  a = n("838446"),
  d = n("158534"),
  s = n("997289"),
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
  T = n("459870"),
  A = n("325882"),
  g = n("625187"),
  S = n("806179"),
  I = n("97508"),
  N = n("49111"),
  y = n("782340"),
  L = (0, d.default)((0, a.default)(function(e) {
    var t;
    let {
      user: n,
      guildId: a,
      channelId: d,
      context: N,
      onSelect: L,
      moderationAlertId: O,
      analyticsLocation: R,
      analyticsLocations: U,
      onCloseContextMenu: b,
      showTransferOwnershipItem: D
    } = e, {
      analyticsLocations: P
    } = (0, f.default)(c.default.CONTEXT_MENU), x = (0, s.useAnalyticsContext)(), G = null !== (t = null == U ? void 0 : U[0]) && void 0 !== t ? t : P[0], w = (0, m.useTrackModerationAction)(a, {
      location: G,
      targetUserId: n.id
    }), F = (0, u.useStateFromStores)([M.default], () => {
      var e;
      return null !== (e = M.default.getUserVoiceChannelId(a, n.id)) && void 0 !== e ? e : void 0
    }, [a, n.id]), j = i.useCallback(() => {
      w(m.ModerationActionType.COPY_ID)
    }, [w]), H = (0, u.useStateFromStores)([h.default], () => h.default.isMember(a, n.id), [a, n.id]), k = (0, S.default)(n.id, a), V = (0, p.default)(n.id, N), B = (0, _.default)({
      guildId: a,
      userId: n.id,
      analyticsLocation: null != R ? R : x.location,
      analyticsLocations: [G],
      context: N
    }), W = (0, v.default)(n, G), Y = (0, C.default)(n, a, null != d ? d : F, G), X = (0, A.default)(d, O), K = (0, g.default)(n, a), Z = (0, I.default)(n.id, a, !1, G), z = (0, E.default)({
      id: n.id,
      label: y.default.Messages.COPY_ID_USER,
      onSuccess: j
    }), q = (0, T.default)(n, a), J = !!(null == n ? void 0 : n.isNonUserBot());
    return (0, l.jsxs)(r.Menu, {
      navId: "user-context",
      onClose: () => {
        (0, o.closeContextMenu)(), null == b || b()
      },
      "aria-label": y.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: L,
      children: [!J && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(r.MenuGroup, {
          children: [k, V]
        }), (0, l.jsxs)(r.MenuGroup, {
          children: [B, W]
        }), H && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(r.MenuGroup, {
            children: Y
          }), (0, l.jsxs)(r.MenuGroup, {
            children: [Z, q]
          })]
        }), null != O ? X : null, D && null != K ? (0, l.jsx)(r.MenuGroup, {
          children: K
        }) : null]
      }), (0, l.jsx)(r.MenuGroup, {
        children: z
      })]
    })
  }, {
    object: N.AnalyticsObjects.CONTEXT_MENU
  }), [c.default.CONTEXT_MENU, c.default.GUILD_MODERATION_USER_MENU])