"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var i = n("37983");
n("884691");
var l = n("77078"),
  r = n("272030"),
  u = n("838446"),
  a = n("158534"),
  s = n("798609"),
  o = n("846883"),
  d = n("812204"),
  f = n("389153"),
  c = n("243288"),
  h = n("321135"),
  m = n("873254"),
  g = n("861370"),
  v = n("726750"),
  p = n("170990"),
  M = n("304582"),
  P = n("72057"),
  C = n("563816"),
  b = n("489836"),
  _ = n("406703"),
  S = n("343856"),
  I = n("502533"),
  x = n("314838"),
  U = n("383161"),
  T = n("421602"),
  y = n("432487"),
  E = n("151200"),
  A = n("692986"),
  j = n("806179"),
  R = n("816106"),
  G = n("623879"),
  N = n("49111"),
  O = n("782340"),
  w = (0, a.default)((0, u.default)(function(e) {
    var t;
    let {
      user: n,
      channel: u,
      context: a,
      showChatItems: d = !0,
      showMediaItems: N = !1,
      showChannelCallItems: w = !1,
      showModalItems: F = !0,
      onSelect: L,
      onHeightUpdate: B
    } = e, z = (0, j.default)(n.id, null), D = (0, U.default)(n, null, a), k = (0, E.default)(n.id, u.id), H = (0, T.default)(n.id, a), W = (0, _.default)(n, a), Y = (0, P.default)({
      user: n,
      context: a
    }), X = (0, M.default)(n), Z = (0, R.default)(n.id), V = (0, y.default)(n.id, u.id), q = (0, A.default)(n.id), J = (0, I.default)(n.id, u.id), K = (0, x.default)(n), Q = (0, o.default)(null, n), $ = (0, p.default)(n), ee = (0, b.default)(n), et = (0, g.default)({
      id: n.id,
      label: O.default.Messages.COPY_ID_USER
    }), en = (0, G.default)(n.id), ei = (0, h.default)(n.id), el = (0, c.default)(u.id), er = (0, v.default)(n), eu = (0, m.default)(n.id), ea = (0, C.default)({
      commandType: s.ApplicationCommandType.USER,
      commandTargetId: n.id,
      channel: u,
      guildId: void 0,
      onHeightUpdate: B
    }), es = (0, S.default)(n, u), eo = (0, f.useIsUserInUserAppExperiment)({
      location: "GroupDMUserContextMenu"
    }), ed = n.isNonUserBot(), ef = u.isManaged(), ec = null === (t = u.recipients) || void 0 === t ? void 0 : t.includes(n.id);
    return (0, i.jsxs)(l.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: L,
      children: [!ed && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.MenuGroup, {
          children: er
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [F && z, d && D, H, W, !ef && k, F && Y, F && X, en]
        }), N && (0, i.jsx)(l.MenuGroup, {
          children: Z
        }), ec && (0, i.jsxs)(l.MenuGroup, {
          children: [!ef && V, es]
        }), (0, i.jsx)(l.MenuGroup, {
          children: F && Q
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [N && q, N && J, eo && ea, F && K, $, F && ee, N && eu]
        }), w && (0, i.jsxs)(l.MenuGroup, {
          children: [el, ei]
        })]
      }), (0, i.jsx)(l.MenuGroup, {
        children: et
      })]
    })
  }, {
    object: N.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.GROUP_DM_USER_MENU])