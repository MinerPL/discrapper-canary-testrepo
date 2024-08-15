t.d(n, {
  j: function() {
return f;
  }
}), t(653041), t(47120);
var a, r, i, s, o = t(392711),
  l = t.n(o),
  c = t(442837),
  d = t(570140),
  u = t(823379),
  m = t(731455),
  _ = t(689938);

function f(e, n) {
  return l().isEqual(e.map(e => [
e.categoryId,
e.name
  ]), n.map(e => [
e.categoryId,
e.name
  ]));
}
let C = null,
  h = [],
  x = [],
  p = {};
class g extends(a = c.ZP.Store) {
  getPrimaryCategories() {
return h;
  }
  getDiscoveryCategories() {
let e = m.L3.map(e => x.find(n => n.categoryId === e)).filter(u.lm);
return [{
    categoryId: m.Hk,
    name: _.Z.Messages.HOME
  },
  ...e
];
  }
  getClanDiscoveryCategories() {
let e = m.L3.map(e => x.find(n => n.categoryId === e)).filter(u.lm);
return [{
    categoryId: m.Hk,
    name: _.Z.Messages.COMMUNITIES
  },
  ...e
];
  }
  getAllCategories() {
return x;
  }
  getFetchedLocale() {
return C;
  }
  getCategoryName(e) {
return e === m.Hk ? _.Z.Messages.HOME : p[e];
  }
}
s = 'GuildDiscoveryCategoryStore', (i = 'displayName') in(r = g) ? Object.defineProperty(r, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = s, n.Z = new g(d.Z, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
let n, {
    categories: t,
    locale: a
  } = e,
  r = [],
  i = [];
if (t.sort((e, n) => e.name < n.name ? -1 : 1).forEach(e => {
    let {
      id: t,
      name: a,
      is_primary: s
    } = e;
    if (t !== m.o3) {
      if (t === m.dc) {
        n = {
          categoryId: t,
          name: a
        };
        return;
      }!0 === s && r.push({
        categoryId: t,
        name: a
      }), i.push({
        categoryId: t,
        name: a
      }), p[t] = a;
    }
  }), null != n) {
  let {
    categoryId: e,
    name: t
  } = n;
  r.push({
    categoryId: e,
    name: t
  }), p[e] = t;
}
C = a, h = r, x = i;
  }
});