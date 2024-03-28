"use strict";
n.r(t), n.d(t, {
  useCanSeeSafetyEducationReportingCoachmark: function() {
    return o
  }
});
var a = n("399606"),
  s = n("826004"),
  l = n("594174"),
  i = n("51144"),
  r = n("335865");
let o = () => {
  let e = (0, s.useIsSafetyConsumerEducationReportingEnabled)(),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getCurrentUser()),
    n = (0, r.useUserIsInLargeGuilds)();
  return e && !(0, i.isNewUser)(t) && n
}