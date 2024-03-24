"use strict";
s.r(t), s.d(t, {
  useIsMFAEnabled: function() {
    return r
  }
});
var a = s("65597"),
  l = s("900938"),
  n = s("697218"),
  i = s("49111");

function r() {
  let e = (0, a.useStateFromStores)([n.default], () => n.default.getCurrentUser()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getProps().mfaLevel),
    s = (null == e ? void 0 : e.mfaEnabled) === !0,
    r = t === i.MFALevels.ELEVATED;
  return {
    isUserMFAEnabled: s,
    isModerationMFAEnabled: r
  }
}