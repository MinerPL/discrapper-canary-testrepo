"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return i
  },
  default: function() {
    return d
  }
}), n("222007");
var i, r, l = n("446674"),
  s = n("913144");
let u = new Map,
  o = new Map;
(r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
class a extends l.default.Store {
  getPriceTiersFetchStateForGuildAndType(e, t) {
    var n, i;
    return null !== (i = null === (n = o.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : 0
  }
  getPriceTiersForGuildAndType(e, t) {
    var n;
    return null === (n = u.get(e)) || void 0 === n ? void 0 : n.get(t)
  }
}
a.displayName = "CreatorMonetizationStore";
var d = new a(s.default, {
  CONNECTION_OPEN: function() {
    u.clear(), o.clear()
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    !o.has(t) && o.set(t, new Map), o.get(t).set(n, 1)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      priceTierType: n,
      priceTiers: i
    } = e;
    !o.has(t) && o.set(t, new Map), o.get(t).set(n, 2), !u.has(t) && u.set(t, new Map), u.get(t).set(n, i)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    !o.has(t) && o.set(t, new Map), o.get(t).set(n, 2)
  }
})