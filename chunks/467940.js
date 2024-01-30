"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("37983"),
  l = n("884691"),
  u = n("446674"),
  o = n("77078"),
  r = n("272030"),
  a = n("838446"),
  s = n("158534"),
  d = n("997289"),
  c = n("812204"),
  E = n("685665"),
  f = n("861370"),
  _ = n("230947"),
  T = n("130037"),
  S = n("26989"),
  I = n("800762"),
  N = n("300925"),
  A = n("489836"),
  p = n("421602"),
  g = n("459870"),
  U = n("325882"),
  C = n("625187"),
  D = n("806179"),
  m = n("97508"),
  R = n("49111"),
  O = n("782340"),
  h = (0, s.default)((0, a.default)(function(e) {
    var t;
    let {
      user: n,
      guildId: a,
      channelId: s,
      context: R,
      onSelect: h,
      moderationAlertId: v,
      analyticsLocation: P,
      analyticsLocations: M,
      onCloseContextMenu: y,
      showTransferOwnershipItem: G
    } = e, {
      analyticsLocations: L
    } = (0, E.default)(c.default.CONTEXT_MENU), b = (0, d.useAnalyticsContext)(), w = null !== (t = null == M ? void 0 : M[0]) && void 0 !== t ? t : L[0], F = (0, T.useTrackModerationAction)(a, {
      location: w,
      targetUserId: n.id
    }), k = (0, u.useStateFromStores)([I.default], () => {
      var e;
      return null !== (e = I.default.getUserVoiceChannelId(a, n.id)) && void 0 !== e ? e : void 0
    }, [a, n.id]), B = l.useCallback(() => {
      F(T.ModerationActionType.COPY_ID)
    }, [F]), x = (0, u.useStateFromStores)([S.default], () => S.default.isMember(a, n.id), [a, n.id]), V = (0, D.default)(n.id, a), Y = (0, p.default)(n.id, R), H = (0, _.default)({
      guildId: a,
      userId: n.id,
      analyticsLocation: null != P ? P : b.location,
      analyticsLocations: [w],
      context: R
    }), j = (0, A.default)(n, w), K = (0, N.default)(n, a, null != s ? s : k, w), W = (0, U.default)(s, v), Z = (0, C.default)(n, a), q = (0, m.default)(n.id, a, !1, w), z = (0, f.default)({
      id: n.id,
      label: O.default.Messages.COPY_ID_USER,
      onSuccess: B
    }), X = (0, g.default)(n, a), Q = !!(null == n ? void 0 : n.isNonUserBot());
    return (0, i.jsxs)(o.Menu, {
      navId: "user-context",
      onClose: () => {
        (0, r.closeContextMenu)(), null == y || y()
      },
      "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: h,
      children: [!Q && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(o.MenuGroup, {
          children: [V, Y]
        }), (0, i.jsxs)(o.MenuGroup, {
          children: [H, j]
        }), x && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(o.MenuGroup, {
            children: K
          }), (0, i.jsxs)(o.MenuGroup, {
            children: [q, X]
          })]
        }), null != v ? W : null, G && null != Z ? (0, i.jsx)(o.MenuGroup, {
          children: Z
        }) : null]
      }), (0, i.jsx)(o.MenuGroup, {
        children: z
      })]
    })
  }, {
    object: R.AnalyticsObjects.CONTEXT_MENU
  }), [c.default.CONTEXT_MENU, c.default.GUILD_MODERATION_USER_MENU])