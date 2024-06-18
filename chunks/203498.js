"use strict";
t.d(s, {
  Z: function() {
    return i
  }
});
var n = t(2070);

function i() {
  let {
    createGuildApplication: e,
    submitting: s,
    error: t
  } = (0, n.Z)();
  return {
    enableGuildMonetizationForTeam: (s, t, n) => e(s, t, n, "guildcr".concat(s.id)),
    submitting: s,
    error: t
  }
}