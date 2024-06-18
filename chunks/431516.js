"use strict";
t.d(s, {
  N: function() {
    return r
  }
});
var n = t(399606),
  i = t(999382),
  l = t(594174),
  a = t(981631);

function r() {
  let e = (0, n.e7)([l.default], () => l.default.getCurrentUser()),
    s = (0, n.e7)([i.Z], () => i.Z.getProps().mfaLevel),
    t = (null == e ? void 0 : e.mfaEnabled) === !0;
  return {
    isUserMFAEnabled: t,
    isModerationMFAEnabled: s === a.BpS.ELEVATED
  }
}