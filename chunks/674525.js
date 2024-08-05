var i, s, a, r, l = n(442837),
  o = n(570140);
let c = [];
class u extends(r = l.ZP.Store) {
  getEligibleGuildsForNagActivate() {
return c;
  }
}
a = 'CreatorMonetizationMarketingStore', (s = 'displayName') in(i = u) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.Z = new u(o.Z, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
let {
  eligibleGuilds: t
} = e;
c = t;
  }
});