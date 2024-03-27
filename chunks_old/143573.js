"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("446674"),
  a = n("913144");
let l = !1;
class i extends s.default.Store {
  get blockedByProxy() {
    return l
  }
}
i.displayName = "ProxyBlockStore";
var r = new i(a.default, {
  PROXY_BLOCKED_REQUEST: function(e) {
    l = !0
  }
})