"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("446674"),
  l = n("913144");
let a = {};
class u extends r.default.Store {
  getEULA(e) {
    return a[e]
  }
}
u.displayName = "EULAStore";
var o = new u(l.default, {
  EULA_FETCH_SUCCESS: function(e) {
    let {
      eula: t
    } = e;
    a[t.id] = t
  }
})