"use strict";
n.r(t);
var l = n("735250");
n("470079");
var u = n("481060"),
  i = n("239091"),
  r = n("883385"),
  a = n("108843"),
  o = n("100527"),
  d = n("906732"),
  c = n("931617"),
  s = n("981631"),
  _ = n("689938");
t.default = (0, a.default)((0, r.default)(function(e) {
  var t;
  let {
    user: n,
    guildId: r,
    onSelect: a,
    analyticsLocations: s,
    onCloseContextMenu: f
  } = e, {
    analyticsLocations: E
  } = (0, d.default)(o.default.CONTEXT_MENU), M = null !== (t = null == s ? void 0 : s[0]) && void 0 !== t ? t : E[0], A = (0, c.default)(n.id, r, !0, M);
  return (0, l.jsx)(u.Menu, {
    navId: "guild-moderation-roles",
    onClose: () => {
      (0, i.closeContextMenu)(), null == f || f()
    },
    "aria-label": _.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: a,
    children: (0, l.jsx)(u.MenuGroup, {
      children: A
    })
  })
}, {
  object: s.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.GUILD_MODERATION_USER_MENU])