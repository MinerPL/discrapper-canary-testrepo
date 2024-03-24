"use strict";
n.r(t), n.d(t, {
  useCanSeeSafetyEducationReportingCoachmark: function() {
    return o
  }
});
var a = n("65597"),
  s = n("127205"),
  l = n("697218"),
  i = n("158998"),
  r = n("332164");
let o = () => {
  let e = (0, s.useIsSafetyConsumerEducationReportingEnabled)(),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getCurrentUser()),
    n = (0, r.useUserIsInLargeGuilds)();
  return e && !(0, i.isNewUser)(t) && n
}