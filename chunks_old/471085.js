"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
});
var n = l("37983");
l("884691");
var u = l("77078"),
  i = l("272030"),
  o = l("901582"),
  r = l("158534"),
  a = l("812204"),
  d = l("861370"),
  s = l("421602"),
  c = l("806179"),
  f = l("97508"),
  M = l("49111"),
  O = l("782340"),
  h = (0, r.default)(function(e) {
    let {
      user: t,
      guildId: l,
      analyticsContext: r,
      onSelect: a
    } = e, h = (0, c.default)(t.id), E = (0, f.default)(t.id, l), R = (0, d.default)({
      id: t.id,
      label: O.default.Messages.COPY_ID_USER
    }), p = (0, s.default)(t.id), v = t.isNonUserBot();
    return (0, n.jsx)(o.default, {
      context: r,
      object: M.AnalyticsObjects.CONTEXT_MENU,
      children: (0, n.jsxs)(u.Menu, {
        navId: "user-context",
        onClose: i.closeContextMenu,
        "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
        onSelect: a,
        children: [(0, n.jsxs)(u.MenuGroup, {
          children: [!v && h, !v && p]
        }), (0, n.jsx)(u.MenuGroup, {
          children: !v && E
        }), (0, n.jsx)(u.MenuGroup, {
          children: R
        })]
      })
    })
  }, [a.default.CONTEXT_MENU, a.default.AUDIT_LOG_USER_MENU])