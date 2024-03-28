"use strict";
n.r(t), n.d(t, {
  useUserIsInLargeGuilds: function() {
    return l
  }
});
var a = n("399606"),
  s = n("650774");

function l() {
  return (0, a.useStateFromStores)([s.default], () => Object.values(s.default.getMemberCounts()).some(e => e >= 200))
}