"use strict";
n.r(t), n.d(t, {
  isAtGuildCapAndNonPremium: function() {
    return r
  }
}), n("442837"), n("536442");
var s = n("430824"),
  a = n("594174"),
  l = n("74538"),
  i = n("981631");

function r() {
  let e = s.default.getGuildCount() >= i.MAX_USER_GUILDS,
    t = l.default.canUseIncreasedGuildCap(a.default.getCurrentUser());
  return e && !t
}