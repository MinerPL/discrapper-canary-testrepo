"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("446674"),
  r = n("913144");
let a = {};
class u extends l.default.Store {
  getEULA(e) {
    return a[e]
  }
}
u.displayName = "EULAStore";
var o = new u(r.default, {
  EULA_FETCH_SUCCESS: function(e) {
    let {
      eula: t
    } = e;
    a[t.id] = t
  }
})