t.d(n, {
  M: function() {
return r;
  }
}), t(47120);
var r, i, o, l, u, a, s = t(442837),
  c = t(570140);
let d = new Map(),
  _ = new Map();
(o = r || (r = {}))[o.NOT_FETCHED = 0] = 'NOT_FETCHED', o[o.FETCHING = 1] = 'FETCHING', o[o.FETCHED = 2] = 'FETCHED';
class f extends(i = s.ZP.Store) {
  getPriceTiersFetchStateForGuildAndType(e, n) {
var t, r;
return null !== (r = null === (t = _.get(e)) || void 0 === t ? void 0 : t.get(n)) && void 0 !== r ? r : 0;
  }
  getPriceTiersForGuildAndType(e, n) {
var t;
return null === (t = d.get(e)) || void 0 === t ? void 0 : t.get(n);
  }
}
a = 'CreatorMonetizationStore', (u = 'displayName') in(l = f) ? Object.defineProperty(l, u, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[u] = a, n.Z = new f(c.Z, {
  CONNECTION_OPEN: function() {
d.clear(), _.clear();
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function(e) {
let {
  guildId: n,
  priceTierType: t
} = e;
!_.has(n) && _.set(n, new Map()), _.get(n).set(t, 1);
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function(e) {
let {
  guildId: n,
  priceTierType: t,
  priceTiers: r
} = e;
!_.has(n) && _.set(n, new Map()), _.get(n).set(t, 2), !d.has(n) && d.set(n, new Map()), d.get(n).set(t, r);
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
let {
  guildId: n,
  priceTierType: t
} = e;
!_.has(n) && _.set(n, new Map()), _.get(n).set(t, 2);
  }
});