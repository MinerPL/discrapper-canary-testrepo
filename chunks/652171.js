"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var l = a("481060"),
  u = a("239091"),
  s = a("984933"),
  d = a("904483"),
  i = a("522762"),
  r = a("466330"),
  o = a("981631"),
  c = a("689938");

function f(e) {
  let {
    guild: t,
    onSelect: a
  } = e, f = s.default.getDefaultChannel(t.id, !0, o.Permissions.CREATE_INSTANT_INVITE), E = (0, i.default)(t.id), I = (0, d.default)(t), _ = (0, r.default)({
    guild: t,
    source: o.InstantInviteSources.GUILD_CONTEXT_MENU,
    channel: f
  });
  return (0, n.jsxs)(l.Menu, {
    navId: "guild-context",
    "aria-label": c.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onClose: u.closeContextMenu,
    onSelect: a,
    children: [(0, n.jsx)(l.MenuGroup, {
      children: E
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [I, _]
    })]
  })
}