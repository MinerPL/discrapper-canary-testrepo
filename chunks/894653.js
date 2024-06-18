"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = [],
  _ = null;
class d extends(o = a.ZP.Store) {
  getLastFetchTimeMs() {
    return _
  }
  getCategories() {
    return u
  }
}
s = "ApplicationDirectoryCategoriesStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new d(l.Z, {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(e) {
    let {
      categories: t
    } = e;
    u = t, _ = Date.now()
  }
})