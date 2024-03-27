"use strict";
s.r(t), s.d(t, {
  deepLinkRouteIfLanded: function() {
    return o
  },
  deepLinkRouteIfLandedAndNotAuthed: function() {
    return u
  }
});
var a = s("43982"),
  r = s("393414"),
  i = s("271938"),
  n = s("773336"),
  l = s("49111");
let o = n.isPlatformEmbedded ? l.NOOP : (e, t) => {
    if (!(0, r.hasNavigated)()) return a.default.request(l.RPCCommands.DEEP_LINK, {
      type: e,
      params: t
    })
  },
  u = n.isPlatformEmbedded ? l.NOOP : (e, t) => {
    if (!i.default.isAuthenticated()) return o(e, {
      ...t || {},
      fingerprint: i.default.getFingerprint()
    })
  }