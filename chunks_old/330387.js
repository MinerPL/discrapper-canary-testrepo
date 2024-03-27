"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("446674"),
  i = n("913144");
let s = null;
class o extends r.default.Store {
  hasAction() {
    return null != s
  }
  getAction() {
    return s
  }
}

function a(e) {
  s = e.requiredAction
}
o.displayName = "UserRequiredActionStore";
var l = new o(i.default, {
  CONNECTION_OPEN: a,
  USER_REQUIRED_ACTION_UPDATE: a
})