t.d(n, {
  M: function() {
return i;
  }
}), t(47120);
var i, r, o, l, u, s, a = t(442837),
  c = t(570140);
let d = new Map(),
  _ = new Map();
(o = i || (i = {}))[o.NOT_FETCHED = 0] = 'NOT_FETCHED', o[o.FETCHING = 1] = 'FETCHING', o[o.FETCHED = 2] = 'FETCHED';
class f extends(r = a.ZP.Store) {
  getPriceTiersFetchStateForGuildAndType(e, n) {
var t, i;
return null !== (i = null === (t = _.get(e)) || void 0 === t ? void 0 : t.get(n)) && void 0 !== i ? i : 0;
  }
  getPriceTiersForGuildAndType(e, n) {
var t;
return null === (t = d.get(e)) || void 0 === t ? void 0 : t.get(n);
  }
}
s = 'CreatorMonetizationStore', (u = 'displayName') in(l = f) ? Object.defineProperty(l, u, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[u] = s, n.Z = new f(c.Z, {
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
  priceTiers: i
} = e;
!_.has(n) && _.set(n, new Map()), _.get(n).set(t, 2), !d.has(n) && d.set(n, new Map()), d.get(n).set(t, i);
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
let {
  guildId: n,
  priceTierType: t
} = e;
!_.has(n) && _.set(n, new Map()), _.get(n).set(t, 2);
  }
});