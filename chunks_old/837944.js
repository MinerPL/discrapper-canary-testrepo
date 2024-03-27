"use strict";
n.r(t), n.d(t, {
  useCanSeeSafetyEducationBlockMuteCoachmark: function() {
    return u
  },
  useSafetyEducationAATriggerPoint: function() {
    return d
  }
});
var a = n("65597"),
  s = n("607742"),
  l = n("415929"),
  i = n("697218"),
  r = n("158998"),
  o = n("332164");
let u = () => {
    let e = (0, l.useIsSafetyConsumerEducationBlockMuteEnabled)(),
      t = (0, a.useStateFromStores)([i.default], () => i.default.getCurrentUser()),
      n = (0, o.useUserIsInLargeGuilds)();
    return e && !(0, r.isNewUser)(t) && n
  },
  d = () => (0, s.useIsSafetyConsumerEducationAAEnabled)()