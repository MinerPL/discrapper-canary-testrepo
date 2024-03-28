"use strict";
n.r(t);
var u = n("735250");
n("470079");
var l = n("481060"),
  a = n("239091"),
  i = n("883385"),
  d = n("108843"),
  r = n("100527"),
  s = n("584836"),
  o = n("896680"),
  c = n("544642"),
  f = n("981631"),
  I = n("689938");
t.default = (0, d.default)((0, i.default)(function(e) {
  let {
    guildId: t,
    context: n,
    onSelect: i
  } = e, d = (0, c.default)(t, n), r = (0, o.default)(t, n), f = (0, s.default)(t, n);
  return (0, u.jsxs)(l.Menu, {
    navId: "moderation-raid-context",
    onClose: a.closeContextMenu,
    "aria-label": I.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: i,
    children: [(0, u.jsx)(l.MenuGroup, {
      children: r
    }), (0, u.jsxs)(l.MenuGroup, {
      children: [f, d]
    })]
  })
}, {
  object: f.AnalyticsObjects.CONTEXT_MENU
}), [r.default.CONTEXT_MENU, r.default.GUILD_MODERATION_RAID_MENU])