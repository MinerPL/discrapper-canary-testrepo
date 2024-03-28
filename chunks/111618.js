"use strict";
n.r(t);
var a, i, l, s, u = n("442837"),
  r = n("570140");
let o = {};
class d extends(s = u.default.Store) {
  getOptions(e) {
    return o[e]
  }
}
l = "SendMessageOptionsStore", (i = "displayName") in(a = d) ? Object.defineProperty(a, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = l, t.default = new d(r.default, {
  MESSAGE_CREATE: function(e) {
    let {
      message: t,
      sendMessageOptions: n
    } = e;
    null != n && (o[t.id] = n), null != t.nonce && t.nonce in o && delete o[t.nonce]
  }
})