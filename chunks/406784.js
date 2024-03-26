"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  u = n("272030"),
  r = n("838446"),
  a = n("158534"),
  o = n("846883"),
  s = n("812204"),
  d = n("861370"),
  c = n("726750"),
  f = n("170990"),
  g = n("304582"),
  _ = n("72057"),
  h = n("489836"),
  E = n("406703"),
  S = n("314838"),
  m = n("421602"),
  v = n("692986"),
  p = n("806179"),
  T = n("816106"),
  M = n("623879"),
  C = n("49111"),
  I = n("782340"),
  A = (0, a.default)((0, r.default)(function(e) {
    let {
      user: t,
      showMediaItems: n = !1,
      mediaEngineContext: r,
      onSelect: a
    } = e, s = (0, p.default)(t.id), C = (0, m.default)(t.id), A = (0, E.default)(t), P = (0, _.default)({
      user: t
    }), b = (0, g.default)(t), y = (0, M.default)(t.id), N = (0, T.default)(t.id), O = (0, v.default)(t.id, r), R = (0, S.default)(t), U = (0, o.default)(null, t), L = (0, f.default)(t), D = (0, h.default)(t), x = (0, d.default)({
      id: t.id,
      label: I.default.Messages.COPY_ID_USER
    }), V = (0, c.default)(t), w = t.isNonUserBot();
    return (0, l.jsxs)(i.Menu, {
      navId: "user-context",
      onClose: u.closeContextMenu,
      "aria-label": I.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: a,
      children: [!w && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.MenuGroup, {
          children: V
        }), (0, l.jsxs)(i.MenuGroup, {
          children: [s, C, A, P, b, y]
        }), n && (0, l.jsx)(i.MenuGroup, {
          children: N
        }), (0, l.jsx)(i.MenuGroup, {
          children: U
        }), (0, l.jsxs)(i.MenuGroup, {
          children: [n && O, R, L, D]
        })]
      }), (0, l.jsx)(i.MenuGroup, {
        children: x
      })]
    })
  }, {
    object: C.AnalyticsObjects.CONTEXT_MENU
  }), [s.default.CONTEXT_MENU, s.default.USER_GENERIC_MENU])