"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("446674"),
  a = n("913144"),
  l = n("492249");
let i = null,
  r = [l.DispatchErrorCodes.REDISTRIBUTABLE_INSTALL_FAILED, l.DispatchErrorCodes.POST_INSTALL_FAILED, l.DispatchErrorCodes.POST_INSTALL_CANCELLED],
  o = [l.DispatchErrorCodes.APPLICATION_NOT_FOUND, l.DispatchErrorCodes.APPLICATION_LOAD_FAILED, l.DispatchErrorCodes.INTERRUPTED, l.DispatchErrorCodes.DESERIALIZATION_FAILED];
class u extends s.default.Store {
  getLastError() {
    return i
  }
}
u.displayName = "DispatchApplicationErrorStore";
var d = new u(a.default, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    null != i && null != i.code && r.includes(i.code) && (i = null)
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
    let {
      error: t
    } = e;
    i = null != t.code && o.includes(t.code) ? null : t
  }
})