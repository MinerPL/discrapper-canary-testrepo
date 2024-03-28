"use strict";
n.r(t), n.d(t, {
  useUserIsTeen: function() {
    return i
  }
});
var a = n("442837"),
  l = n("594174"),
  s = n("699816");

function i(e) {
  let t = (0, a.useStateFromStores)([l.default], () => {
      var e;
      return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    }),
    n = (0, s.useStaffTeenSafetyAssistAgeBypass)(e);
  return !1 === t || n
}