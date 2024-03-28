"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var n = a("735250");
a("470079");
var l = a("442837"),
  i = a("481060"),
  u = a("239091"),
  r = a("812206"),
  d = a("731646"),
  s = a("283595"),
  o = a("499502"),
  c = a("955809"),
  f = a("332845"),
  I = a("78874"),
  A = a("350758"),
  _ = a("149835"),
  T = a("38346"),
  E = a("683609"),
  N = a("679879"),
  p = a("981631"),
  L = a("689938");

function C(e) {
  let {
    application: t,
    libraryApplication: a,
    analyticsContext: l,
    onSelect: r
  } = e, d = {
    ...null != l ? l.location : null,
    object: p.AnalyticsObjects.CONTEXT_MENU
  }, s = (0, I.default)(a, d), C = (0, A.default)(a), g = (0, T.default)(a), M = (0, N.default)(a), O = (0, E.default)(a), b = (0, f.default)(a, t), P = (0, _.default)(a, t), S = (0, o.default)(a, t), h = (0, c.default)(t);
  return (0, n.jsxs)(i.Menu, {
    navId: "game-context",
    onClose: u.closeContextMenu,
    "aria-label": L.default.Messages.APPLICATION_ACTIONS_MENU_LABEL,
    onSelect: r,
    children: [s, C, g, M, O, b, P, (0, n.jsx)(i.MenuGroup, {
      children: S
    }), (0, n.jsx)(i.MenuGroup, {
      children: h
    })]
  })
}

function g(e) {
  let {
    applicationId: t,
    branchId: a
  } = e, i = (0, l.useStateFromStores)([r.default], () => r.default.getApplication(t), [t]), u = (0, l.useStateFromStores)([s.default], () => null != a ? s.default.getLibraryApplication(t, a) : s.default.getActiveLibraryApplication(t), [t, a]);
  return null == i || null == u ? (0, n.jsx)(d.default, {
    ...e,
    id: t,
    label: L.default.Messages.COPY_ID_APPLICATION
  }) : (0, n.jsx)(C, {
    ...e,
    application: i,
    libraryApplication: u
  })
}