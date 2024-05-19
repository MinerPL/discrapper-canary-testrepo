"use strict";
n.r(t);
var a, s = n("108131"),
  l = n.n(s),
  i = n("442837"),
  r = n("570140"),
  o = n("70956");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = [],
  c = !1,
  f = {
    status: "unloaded"
  },
  E = {};
class h extends(a = i.default.Store) {
  getSearchResult(e) {
    let t = E[l().v3(JSON.stringify(e))];
    return null == t || t.loadedAt < Date.now() - o.default.Millis.HOUR ? f : t
  }
  hasLoadedStaticClanDiscovery() {
    return c
  }
  getStaticClans() {
    return d
  }
}
u(h, "displayName", "ClanDiscoveryStore"), u(h, "persistKey", "ClanDiscoveryStore"), t.default = new h(r.default, {
  FETCH_STATIC_CLAN_LIST_SUCCESS: function(e) {
    d = e.clans, c = !0
  },
  FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: function(e) {
    E[e.criteriaHash] = e.searchResult
  }
})