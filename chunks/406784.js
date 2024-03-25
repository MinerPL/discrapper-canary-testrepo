"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var u = n("77078"),
  a = n("272030"),
  i = n("838446"),
  d = n("158534"),
  s = n("846883"),
  o = n("812204"),
  r = n("861370"),
  c = n("726750"),
  f = n("170990"),
  E = n("304582"),
  _ = n("72057"),
  S = n("489836"),
  T = n("406703"),
  g = n("314838"),
  p = n("421602"),
  M = n("692986"),
  A = n("806179"),
  v = n("816106"),
  I = n("623879"),
  m = n("49111"),
  C = n("782340"),
  h = (0, d.default)((0, i.default)(function(e) {
    let {
      user: t,
      showMediaItems: n = !1,
      mediaEngineContext: i,
      onSelect: d
    } = e, o = (0, A.default)(t.id), m = (0, p.default)(t.id), h = (0, T.default)(t), N = (0, _.default)({
      user: t
    }), O = (0, E.default)(t), R = (0, I.default)(t.id), y = (0, v.default)(t.id), U = (0, M.default)(t.id, i), b = (0, g.default)(t), P = (0, s.default)(null, t), x = (0, f.default)(t), D = (0, S.default)(t), V = (0, r.default)({
      id: t.id,
      label: C.default.Messages.COPY_ID_USER
    }), L = (0, c.default)(t), w = t.isNonUserBot();
    return (0, l.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: a.closeContextMenu,
      "aria-label": C.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: d,
      children: [!w && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.MenuGroup, {
          children: L
        }), (0, l.jsxs)(u.MenuGroup, {
          children: [o, m, h, N, O, R]
        }), n && (0, l.jsx)(u.MenuGroup, {
          children: y
        }), (0, l.jsx)(u.MenuGroup, {
          children: P
        }), (0, l.jsxs)(u.MenuGroup, {
          children: [n && U, b, x, D]
        })]
      }), (0, l.jsx)(u.MenuGroup, {
        children: V
      })]
    })
  }, {
    object: m.AnalyticsObjects.CONTEXT_MENU
  }), [o.default.CONTEXT_MENU, o.default.USER_GENERIC_MENU])