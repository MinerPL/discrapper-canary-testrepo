var i, a = n(108131),
  s = n.n(a),
  r = n(442837),
  l = n(570140),
  o = n(70956),
  c = n(823379);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let u = [],
  _ = !1,
  h = !1,
  E = {
status: 'unloaded'
  },
  I = {};
class m extends(i = r.ZP.Store) {
  getSearchResult(e) {
let t = I[s().v3(JSON.stringify(e))];
return null == t || t.loadedAt < Date.now() - o.Z.Millis.HOUR ? E : t;
  }
  getSavedGuildsResult(e) {
return e.map(e => u.find(t => t.id === e)).filter(c.lm);
  }
  hasLoadedStaticClanDiscovery() {
return _;
  }
  getStaticClans() {
return u;
  }
  isLoading() {
return h;
  }
}
d(m, 'displayName', 'ClanDiscoveryStore'), d(m, 'persistKey', 'ClanDiscoveryStore'), t.Z = new m(l.Z, {
  FETCH_STATIC_CLAN_LIST_START: function() {
h = !0;
  },
  FETCH_STATIC_CLAN_LIST_SUCCESS: function(e) {
u = e.clans, _ = !0, h = !1;
  },
  FETCH_STATIC_CLAN_LIST_FAILURE: function() {
h = !1;
  },
  FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: function(e) {
I[e.criteriaHash] = e.searchResult;
  }
});