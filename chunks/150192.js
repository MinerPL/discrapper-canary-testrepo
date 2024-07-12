t.d(n, {
  j: function() {
return C;
  }
}), t(653041), t(47120);
var a, r, i, s, o = t(392711),
  l = t.n(o),
  c = t(442837),
  d = t(570140),
  u = t(823379),
  m = t(731455),
  f = t(689938);

function C(e, n) {
  return l().isEqual(e.map(e => [
e.categoryId,
e.name
  ]), n.map(e => [
e.categoryId,
e.name
  ]));
}
let _ = null,
  h = [],
  x = [],
  g = {};
class p extends(a = c.ZP.Store) {
  getPrimaryCategories() {
return h;
  }
  getDiscoveryCategories() {
let e = m.L3.map(e => x.find(n => n.categoryId === e)).filter(u.lm);
return [{
    categoryId: m.Hk,
    name: f.Z.Messages.HOME
  },
  ...e
];
  }
  getClanDiscoveryCategories() {
let e = m.L3.map(e => x.find(n => n.categoryId === e)).filter(u.lm);
return [{
    categoryId: m.Hk,
    name: f.Z.Messages.COMMUNITIES
  },
  ...e
];
  }
  getAllCategories() {
return x;
  }
  getFetchedLocale() {
return _;
  }
  getCategoryName(e) {
return e === m.Hk ? f.Z.Messages.HOME : g[e];
  }
}
s = 'GuildDiscoveryCategoryStore', (i = 'displayName') in(r = p) ? Object.defineProperty(r, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = s, n.Z = new p(d.Z, {
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
      }), g[t] = a;
    }
  }), null != n) {
  let {
    categoryId: e,
    name: t
  } = n;
  r.push({
    categoryId: e,
    name: t
  }), g[e] = t;
}
_ = a, h = r, x = i;
  }
});