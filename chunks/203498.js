"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("2070");

function l() {
  let {
    createGuildApplication: e,
    submitting: t,
    error: s
  } = (0, a.default)();
  return {
    enableGuildMonetizationForTeam: (t, s, a) => e(t, s, a, "guildcr".concat(t.id)),
    submitting: t,
    error: s
  }
}