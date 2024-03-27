"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  r = n("272030"),
  u = n("838446"),
  i = n("158534"),
  d = n("798609"),
  l = n("846883"),
  o = n("812204"),
  c = n("389153"),
  f = n("243288"),
  m = n("321135"),
  p = n("873254"),
  h = n("861370"),
  M = n("726750"),
  x = n("170990"),
  g = n("304582"),
  v = n("72057"),
  S = n("563816"),
  C = n("489836"),
  j = n("406703"),
  I = n("343856"),
  _ = n("502533"),
  E = n("314838"),
  T = n("383161"),
  N = n("421602"),
  O = n("432487"),
  R = n("151200"),
  A = n("692986"),
  U = n("806179"),
  y = n("816106"),
  G = n("623879"),
  P = n("49111"),
  b = n("782340"),
  w = (0, i.default)((0, u.default)(function(e) {
    var t;
    let {
      user: n,
      channel: u,
      context: i,
      showChatItems: o = !0,
      showMediaItems: P = !1,
      showChannelCallItems: w = !1,
      showModalItems: L = !0,
      onSelect: F,
      onHeightUpdate: k
    } = e, D = (0, U.default)(n.id, null), z = (0, T.default)(n, null, i), W = (0, R.default)(n.id, u.id), B = (0, N.default)(n.id, i), H = (0, j.default)(n, i), Y = (0, v.default)({
      user: n,
      context: i
    }), X = (0, g.default)(n), Z = (0, y.default)(n.id), V = (0, O.default)(n.id, u.id), q = (0, A.default)(n.id), J = (0, _.default)(n.id, u.id), K = (0, E.default)(n), Q = (0, l.default)(null, n), $ = (0, x.default)(n), ee = (0, C.default)(n), et = (0, h.default)({
      id: n.id,
      label: b.default.Messages.COPY_ID_USER
    }), en = (0, G.default)(n.id), ea = (0, m.default)(n.id), es = (0, f.default)(u.id), er = (0, M.default)(n), eu = (0, p.default)(n.id), ei = (0, S.default)({
      commandType: d.ApplicationCommandType.USER,
      commandTargetId: n.id,
      channel: u,
      guildId: void 0,
      onHeightUpdate: k
    }), ed = (0, I.default)(n, u), el = (0, c.useIsUserInUserAppExperiment)({
      location: "GroupDMUserContextMenu"
    }), eo = n.isNonUserBot(), ec = u.isManaged(), ef = null === (t = u.recipients) || void 0 === t ? void 0 : t.includes(n.id);
    return (0, a.jsxs)(s.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": b.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: F,
      children: [!eo && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(s.MenuGroup, {
          children: er
        }), (0, a.jsxs)(s.MenuGroup, {
          children: [L && D, o && z, B, H, !ec && W, L && Y, L && X, en]
        }), P && (0, a.jsx)(s.MenuGroup, {
          children: Z
        }), ef && (0, a.jsxs)(s.MenuGroup, {
          children: [!ec && V, ed]
        }), (0, a.jsx)(s.MenuGroup, {
          children: L && Q
        }), (0, a.jsxs)(s.MenuGroup, {
          children: [P && q, P && J, el && ei, L && K, $, L && ee, P && eu]
        }), w && (0, a.jsxs)(s.MenuGroup, {
          children: [es, ea]
        })]
      }), (0, a.jsx)(s.MenuGroup, {
        children: et
      })]
    })
  }, {
    object: P.AnalyticsObjects.CONTEXT_MENU
  }), [o.default.CONTEXT_MENU, o.default.GROUP_DM_USER_MENU])