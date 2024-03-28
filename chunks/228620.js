"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("481060"),
  i = n("239091"),
  u = n("37234"),
  r = n("108843"),
  o = n("100527"),
  s = n("299206"),
  d = n("703656"),
  c = n("852245"),
  _ = n("689938");
t.default = (0, r.default)(function(e) {
  let {
    channel: t,
    onSelect: n
  } = e, r = (0, c.default)(t), o = (0, s.default)({
    id: t.id,
    label: _.default.Messages.COPY_ID_CHANNEL
  });
  return (0, l.jsxs)(a.Menu, {
    navId: "channel-context",
    onClose: i.closeContextMenu,
    "aria-label": _.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, l.jsxs)(a.MenuGroup, {
      children: [r, t.isCategory() ? null : (0, l.jsx)(a.MenuItem, {
        id: "jump-to-channel",
        label: _.default.Messages.JUMP_TO_CHANNEL,
        action: () => {
          (0, d.transitionToGuild)(t.guild_id, t.id), (0, u.popLayer)()
        }
      })]
    }), (0, l.jsx)(a.MenuGroup, {
      children: o
    })]
  })
}, [o.default.CONTEXT_MENU, o.default.CHANNEL_AUDIT_LOG_MENU])