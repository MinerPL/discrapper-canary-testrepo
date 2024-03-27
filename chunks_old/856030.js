"use strict";
n.r(t), n.d(t, {
  useSafetyWarningsItem: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var a = n("446674"),
  r = n("77078"),
  s = n("277734"),
  l = n("764828"),
  u = n("559922"),
  o = n("697218"),
  d = n("782340");

function c(e) {
  let t = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    n = (0, a.useStateFromStores)([l.default], () => l.default.getChannelSafetyWarnings(e.id));
  return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(r.MenuItem, {
      id: "delete-safety-warnings",
      label: d.default.Messages.SAFETY_WARNINGS_DELETE,
      action: () => (0, u.deleteAllSafetyWarnings)(e.id)
    }), (0, i.jsx)(r.MenuItem, {
      id: "clear-safety-warnings",
      label: d.default.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
      action: () => (0, s.clearChannelSafetyWarnings)(e.id)
    })]
  })
}