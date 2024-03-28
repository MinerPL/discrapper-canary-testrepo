"use strict";
s.r(a);
var t = s("735250");
s("470079");
var d = s("468026"),
  u = s("434404"),
  l = s("689938");
a.default = e => (0, t.jsx)(d.default, {
  title: l.default.Messages.GEO_RESTRICTED_MODAL_TITLE,
  body: l.default.Messages.GEO_RESTRICTED_MODAL_BODY.format({
    serverName: e.name
  }),
  cancelText: l.default.Messages.LEAVE_SERVER,
  onCancel: () => {
    u.default.leaveGuild(e.guildId)
  },
  confirmText: l.default.Messages.OK,
  ...e
})