"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("442837"),
  s = n("430824"),
  l = n("496675"),
  i = n("312146"),
  r = n("981631");

function o(e) {
  let t = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e)),
    n = (0, i.useGuildEligibleForMediaChannels)(t),
    o = l.default.can(r.Permissions.MANAGE_CHANNELS, t);
  return n && o
}