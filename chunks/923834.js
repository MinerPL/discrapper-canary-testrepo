"use strict";
n.r(t), n("411104");
var i, o, l, u, a = n("442837"),
  s = n("570140");
let d = null;
class r extends(i = a.default.Store) {
  getCurrentPath() {
    return null != d ? d.pathname : null
  }
  getCurrentRoute() {
    return function(e) {
      let t = null != e && null != e.search ? e.search : "";
      return null != e ? "".concat(e.pathname).concat(t) : null
    }(d)
  }
  reset() {
    throw Error("Should not reset the store this way outside of a test environment")
  }
}
u = "ApplicationStoreLocationStore", (l = "displayName") in(o = r) ? Object.defineProperty(o, l, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[l] = u, t.default = new r(s.default, {
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    d = {
      ...t
    }
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    d = null
  }
})