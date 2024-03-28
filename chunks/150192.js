"use strict";
n.r(t), n.d(t, {
  areDiscoveryCategoriesEqual: function() {
    return _
  }
}), n("653041"), n("47120");
var i, r, s, a, l = n("392711"),
  o = n.n(l),
  u = n("442837"),
  c = n("570140"),
  d = n("823379"),
  f = n("731455"),
  p = n("689938");

function _(e, t) {
  return o().isEqual(e.map(e => [e.categoryId, e.name]), t.map(e => [e.categoryId, e.name]))
}
let E = null,
  I = [],
  T = [],
  m = {};
class S extends(i = u.default.Store) {
  getPrimaryCategories() {
    return I
  }
  getDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.slice(1).map(e => T.find(t => t.categoryId === e.categoryId)).filter(d.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: p.default.Messages.HOME
    }, ...e]
  }
  getAllCategories() {
    return T
  }
  getFetchedLocale() {
    return E
  }
  getCategoryName(e) {
    return e === f.DISCOVERY_ALL_CATEGORIES_ID ? p.default.Messages.HOME : m[e]
  }
}
a = "GuildDiscoveryCategoryStore", (s = "displayName") in(r = S) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new S(c.default, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let t, {
        categories: n,
        locale: i
      } = e,
      r = [],
      s = [];
    if (n.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
        let {
          id: n,
          name: i,
          is_primary: a
        } = e;
        if (n !== f.DEFAULT_DISCOVERY_CATEGORY_ID) {
          if (n === f.OTHER_DISCOVERY_CATEGORY_ID) {
            t = {
              categoryId: n,
              name: i
            };
            return
          }!0 === a && r.push({
            categoryId: n,
            name: i
          }), s.push({
            categoryId: n,
            name: i
          }), m[n] = i
        }
      }), null != t) {
      let {
        categoryId: e,
        name: n
      } = t;
      r.push({
        categoryId: e,
        name: n
      }), m[e] = n
    }
    E = i, I = r, T = s
  }
})