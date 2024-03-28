"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  useCanCreateOrAddGuildInDirectory: function() {
    return u
  }
});
var a = n("442837"),
  l = n("592125"),
  s = n("430824"),
  i = n("496675"),
  r = n("981631");

function o(e) {
  let t = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e.guildId)),
    n = (0, a.useStateFromStores)([l.default], () => l.default.getChannel(e.channelId)),
    o = (0, a.useStateFromStores)([i.default], () => i.default.can(r.Permissions.ADMINISTRATOR, t)),
    u = (0, a.useStateFromStores)([i.default], () => i.default.can(r.Permissions.MANAGE_MESSAGES, n));
  return {
    isEntryAdmin: o,
    canEdit: o || u,
    canRemove: o || u
  }
}

function u(e) {
  return (0, a.useStateFromStores)([i.default], () => i.default.can(r.Permissions.SEND_MESSAGES, e))
}