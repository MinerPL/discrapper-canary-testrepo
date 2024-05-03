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
let d = {},
  c = {
    status: "unloaded"
  },
  f = {};
class E extends(a = i.default.Store) {
  getSearchResult(e) {
    let t = f[l().v3(JSON.stringify(e))];
    return null == t || t.loadedAt < Date.now() - o.default.Millis.HOUR ? c : t
  }
  hasLoadedStaticClanDiscovery(e) {
    return null != e && null != d[e]
  }
  getStaticClans(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : []
  }
}
u(E, "displayName", "ClanDiscoveryStore"), u(E, "persistKey", "ClanDiscoveryStore"), t.default = new E(r.default, {
  FETCH_STATIC_CLAN_LIST_SUCCESS: function(e) {
    d[e.game] = e.clans
  },
  FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: function(e) {
    f[e.criteriaHash] = e.searchResult
  }
})