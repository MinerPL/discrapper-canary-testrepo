"use strict";
n.r(t), n.d(t, {
  isEligibleForPomelo: function() {
    return i
  },
  useIsEligibleForPomelo: function() {
    return r
  }
});
var s = n("399606"),
  a = n("594174"),
  l = n("918505");
let i = () => o(a.default.getCurrentUser(), (0, l.getPomeloEligibility)()),
  r = () => o((0, s.useStateFromStores)([a.default], () => a.default.getCurrentUser()), (0, l.usePomeloEligibility)());

function o(e, t) {
  return !(null == e || e.isPomelo()) && !!e.hasVerifiedEmailOrPhone() && !!t && !0
}