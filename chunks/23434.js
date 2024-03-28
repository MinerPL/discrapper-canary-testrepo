"use strict";
n.r(t);
var r, o, s, a, i = n("442837"),
  l = n("570140");
let d = null;
class u extends(a = i.default.Store) {
  hasAction() {
    return null != d
  }
  getAction() {
    return d
  }
}

function E(e) {
  d = e.requiredAction
}
s = "UserRequiredActionStore", (o = "displayName") in(r = u) ? Object.defineProperty(r, o, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = s, t.default = new u(l.default, {
  CONNECTION_OPEN: E,
  USER_REQUIRED_ACTION_UPDATE: E
})