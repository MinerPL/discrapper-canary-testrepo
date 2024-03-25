"use strict";
n.r(t), n.d(t, {
  isAtGuildCapAndNonPremium: function() {
    return r
  }
}), n("446674"), n("139321");
var s = n("305961"),
  a = n("697218"),
  l = n("719923"),
  i = n("49111");

function r() {
  let e = s.default.getGuildCount() >= i.MAX_USER_GUILDS,
    t = l.default.canUseIncreasedGuildCap(a.default.getCurrentUser());
  return e && !t
}