"use strict";
n.r(t), n.d(t, {
  useCanSeeSafetyEducationBlockMuteCoachmark: function() {
    return u
  },
  useSafetyEducationAATriggerPoint: function() {
    return d
  }
});
var a = n("399606"),
  s = n("650598"),
  l = n("941129"),
  i = n("594174"),
  r = n("51144"),
  o = n("335865");
let u = () => {
    let e = (0, l.useIsSafetyConsumerEducationBlockMuteEnabled)(),
      t = (0, a.useStateFromStores)([i.default], () => i.default.getCurrentUser()),
      n = (0, o.useUserIsInLargeGuilds)();
    return e && !(0, r.isNewUser)(t) && n
  },
  d = () => (0, s.useIsSafetyConsumerEducationAAEnabled)()