"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return r
  }
}), n("47120");
var r, i, l, s, o, u, a = n("442837"),
  c = n("570140");
let d = new Map,
  f = new Map;
(l = r || (r = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED";
class S extends(i = a.default.Store) {
  getPriceTiersFetchStateForGuildAndType(e, t) {
    var n, r;
    return null !== (r = null === (n = f.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : 0
  }
  getPriceTiersForGuildAndType(e, t) {
    var n;
    return null === (n = d.get(e)) || void 0 === n ? void 0 : n.get(t)
  }
}
u = "CreatorMonetizationStore", (o = "displayName") in(s = S) ? Object.defineProperty(s, o, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = u, t.default = new S(c.default, {
  CONNECTION_OPEN: function() {
    d.clear(), f.clear()
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    !f.has(t) && f.set(t, new Map), f.get(t).set(n, 1)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      priceTierType: n,
      priceTiers: r
    } = e;
    !f.has(t) && f.set(t, new Map), f.get(t).set(n, 2), !d.has(t) && d.set(t, new Map), d.get(t).set(n, r)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    !f.has(t) && f.set(t, new Map), f.get(t).set(n, 2)
  }
})