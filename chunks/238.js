"use strict";
n.r(t);
var i, r, l, s, a = n("442837"),
  o = n("570140"),
  d = n("55563"),
  c = n("551428");
let u = {},
  f = {
    subscriptions: [],
    otps: []
  };
class m extends(s = a.default.Store) {
  initialize() {
    this.waitFor(d.default, c.default)
  }
  hasStorefront(e) {
    return !!u[e]
  }
  getStoreLayout(e) {
    var t;
    return null !== (t = u[e]) && void 0 !== t ? t : f
  }
}
l = "ApplicationStoreDirectoryStore", (r = "displayName") in(i = m) ? Object.defineProperty(i, r, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = l, t.default = new m(o.default, {
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      listings: n
    } = e;
    u[t] = n
  }
})