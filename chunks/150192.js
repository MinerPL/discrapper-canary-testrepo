"use strict";
n.r(t), n.d(t, {
  areDiscoveryCategoriesEqual: function() {
    return h
  }
}), n("653041"), n("47120");
var a, i, r, s, l = n("392711"),
  o = n.n(l),
  c = n("442837"),
  d = n("570140"),
  u = n("823379"),
  f = n("731455"),
  m = n("689938");

function h(e, t) {
  return o().isEqual(e.map(e => [e.categoryId, e.name]), t.map(e => [e.categoryId, e.name]))
}
let E = null,
  T = [],
  p = [],
  _ = {};
class C extends(a = c.default.Store) {
  getPrimaryCategories() {
    return T
  }
  getDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => p.find(t => t.categoryId === e)).filter(u.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: m.default.Messages.HOME
    }, ...e]
  }
  getClanDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => p.find(t => t.categoryId === e)).filter(u.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: m.default.Messages.COMMUNITIES
    }, ...e]
  }
  getAllCategories() {
    return p
  }
  getFetchedLocale() {
    return E
  }
  getCategoryName(e) {
    return e === f.DISCOVERY_ALL_CATEGORIES_ID ? m.default.Messages.HOME : _[e]
  }
}
s = "GuildDiscoveryCategoryStore", (r = "displayName") in(i = C) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.default = new C(d.default, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let t, {
        categories: n,
        locale: a
      } = e,
      i = [],
      r = [];
    if (n.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
        let {
          id: n,
          name: a,
          is_primary: s
        } = e;
        if (n !== f.DEFAULT_DISCOVERY_CATEGORY_ID) {
          if (n === f.OTHER_DISCOVERY_CATEGORY_ID) {
            t = {
              categoryId: n,
              name: a
            };
            return
          }!0 === s && i.push({
            categoryId: n,
            name: a
          }), r.push({
            categoryId: n,
            name: a
          }), _[n] = a
        }
      }), null != t) {
      let {
        categoryId: e,
        name: n
      } = t;
      i.push({
        categoryId: e,
        name: n
      }), _[e] = n
    }
    E = a, T = i, p = r
  }
})