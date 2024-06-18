"use strict";
n.d(t, {
  M: function() {
    return a
  }
});
var i, r, s, o, a, l, u = n(31775),
  _ = n.n(u),
  d = n(442837),
  c = n(570140);

function E(e) {
  let {
    query: t,
    guildId: n,
    page: i,
    categoryId: r,
    integrationType: s,
    minUserInstallCommandCount: o,
    excludeAppsWithCustomInstallUrl: a
  } = e;
  return "query:'".concat(t, "' guildId:").concat(n, " page:").concat(i, " categoryId:").concat(r, " integrationType:").concat(s, " minUserInstallCommandCount:").concat(o, " excludeAppsWithCustomInstallUrl:").concat(a)
}(i = a || (a = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
let I = new(_())({
    max: 20
  }),
  T = {};
class h extends(l = d.ZP.Store) {
  getSearchResults(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: s,
      minUserInstallCommandCount: o,
      excludeAppsWithCustomInstallUrl: a
    } = e, l = E({
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: s,
      minUserInstallCommandCount: o,
      excludeAppsWithCustomInstallUrl: a
    });
    return I.get(l)
  }
  getFetchState(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: s,
      minUserInstallCommandCount: o,
      excludeAppsWithCustomInstallUrl: a
    } = e;
    return T[E({
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: s,
      minUserInstallCommandCount: o,
      excludeAppsWithCustomInstallUrl: a
    })]
  }
}
o = "ApplicationDirectorySearchStore", (s = "displayName") in(r = h) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new h(c.Z, {
  APPLICATION_DIRECTORY_FETCH_SEARCH: function(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: s,
      minUserInstallCommandCount: o,
      excludeAppsWithCustomInstallUrl: a
    } = e, l = E({
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: s,
      minUserInstallCommandCount: o,
      excludeAppsWithCustomInstallUrl: a
    });
    T = {
      ...T,
      [l]: 0
    }
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      result: s,
      integrationType: o,
      minUserInstallCommandCount: a,
      excludeAppsWithCustomInstallUrl: l
    } = e, u = E({
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: o,
      minUserInstallCommandCount: a,
      excludeAppsWithCustomInstallUrl: l
    });
    I.set(u, {
      lastFetchTimeMs: Date.now(),
      ...s
    }), T = {
      ...T,
      [u]: 1
    }
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: s,
      minUserInstallCommandCount: o,
      excludeAppsWithCustomInstallUrl: a
    } = e, l = E({
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: s,
      minUserInstallCommandCount: o,
      excludeAppsWithCustomInstallUrl: a
    });
    T = {
      ...T,
      [l]: 2
    }
  }
})