"use strict";
o.r(n), o.d(n, {
  default: function() {
    return c
  }
});
var t = o("735250");
o("470079");
var l = o("481060"),
  s = o("239091"),
  a = o("689938");

function c(e) {
  let {
    roleId: n,
    onLeaveRole: o,
    onSelect: c
  } = e;
  return (0, t.jsx)(l.Menu, {
    navId: "guild-role-connections-context",
    "aria-label": a.default.Messages.CONNECTIONS_ROLES_CHANNEL_LEAVE_VERIFIED_ROLE,
    onClose: s.closeContextMenu,
    onSelect: c,
    children: (0, t.jsx)(l.MenuGroup, {
      children: (0, t.jsx)(l.MenuItem, {
        id: "guild-role-connections-leave-role",
        label: a.default.Messages.CONNECTIONS_ROLES_CHANNEL_LEAVE_VERIFIED_ROLE,
        action: o,
        color: "danger"
      }, n)
    })
  }, n)
}