"use strict";
s.r(t), s.d(t, {
  useIsMFAEnabled: function() {
    return r
  }
});
var a = s("399606"),
  l = s("999382"),
  n = s("594174"),
  i = s("981631");

function r() {
  let e = (0, a.useStateFromStores)([n.default], () => n.default.getCurrentUser()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getProps().mfaLevel),
    s = (null == e ? void 0 : e.mfaEnabled) === !0;
  return {
    isUserMFAEnabled: s,
    isModerationMFAEnabled: t === i.MFALevels.ELEVATED
  }
}