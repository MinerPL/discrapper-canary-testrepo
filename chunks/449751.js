"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var n = s("852229"),
  l = s("481060"),
  i = s("757698"),
  d = s("626135"),
  r = s("572004"),
  u = s("981631"),
  o = s("689938");

function c(e, t) {
  return r.SUPPORTS_COPY && e.type !== u.MessageTypes.GUILD_INVITE_REMINDER ? (0, a.jsx)(l.MenuItem, {
    id: "copy-link",
    label: o.default.Messages.COPY_MESSAGE_LINK,
    icon: i.default,
    action: () => {
      (0, n.copy)("".concat(location.protocol, "//").concat(location.host).concat(u.Routes.CHANNEL(t.guild_id, t.id, e.id))), d.default.track(u.AnalyticEvents.MESSAGE_LINK_COPIED, {
        message_id: e.id,
        channel: e.channel_id
      })
    }
  }) : null
}