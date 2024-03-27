"use strict";
n.r(t), n.d(t, {
  useUserIsTeen: function() {
    return s
  }
});
var i = n("446674"),
  a = n("697218"),
  r = n("499799");

function s(e) {
  let t = (0, i.useStateFromStores)([a.default], () => {
      var e;
      return null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    }),
    n = (0, r.useStaffTeenSafetyAssistAgeBypass)(e);
  return !1 === t || n
}