"use strict";
n.r(t), n.d(t, {
  useUserIsInLargeGuilds: function() {
    return l
  }
});
var a = n("65597"),
  s = n("525065");

function l() {
  let e = (0, a.useStateFromStores)([s.default], () => {
    let e = Object.values(s.default.getMemberCounts());
    return e.some(e => e >= 200)
  });
  return e
}