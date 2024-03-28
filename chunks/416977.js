"use strict";
u.r(t), u.d(t, {
  default: function() {
    return l
  }
});
var n = u("735250");
u("470079");
var a = u("442837"),
  s = u("481060"),
  d = u("45114"),
  r = u("306680"),
  c = u("490897"),
  i = u("689938");

function l(e) {
  let t = (0, a.useStateFromStores)([r.default], () => r.default.hasUnread(e, c.ReadStateTypes.GUILD_EVENT), [e]);
  return (0, n.jsx)(s.MenuItem, {
    id: "mark-events-read",
    label: i.default.Messages.MARK_AS_READ,
    action: function() {
      (0, d.ackGuildFeature)(e, c.ReadStateTypes.GUILD_EVENT)
    },
    disabled: !t
  })
}