"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var u = n("37983");
n("884691");
var a = n("77078"),
  l = n("272030"),
  s = n("901582"),
  i = n("158534"),
  r = n("812204"),
  o = n("861370"),
  d = n("421602"),
  c = n("806179"),
  f = n("49111"),
  p = n("782340"),
  E = (0, i.default)(function(e) {
    let {
      user: t,
      analyticsContext: n,
      onSelect: i
    } = e, r = (0, c.default)(t.id), E = (0, o.default)({
      id: t.id,
      label: p.default.Messages.COPY_ID_USER
    }), M = (0, d.default)(t.id), h = t.isNonUserBot();
    return (0, u.jsx)(s.default, {
      context: n,
      object: f.AnalyticsObjects.CONTEXT_MENU,
      children: (0, u.jsxs)(a.Menu, {
        navId: "user-context",
        onClose: l.closeContextMenu,
        "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
        onSelect: i,
        children: [(0, u.jsxs)(a.MenuGroup, {
          children: [!h && r, !h && M]
        }), (0, u.jsx)(a.MenuGroup, {
          children: E
        })]
      })
    })
  }, [r.default.CONTEXT_MENU, r.default.BANNED_USER_MENU])