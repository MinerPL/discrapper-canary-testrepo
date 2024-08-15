var i, a, s, r, l = n(442837),
  o = n(570140);
let c = [];
class u extends(r = l.ZP.Store) {
  getEligibleGuildsForNagActivate() {
return c;
  }
}
s = 'CreatorMonetizationMarketingStore', (a = 'displayName') in(i = u) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new u(o.Z, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
let {
  eligibleGuilds: t
} = e;
c = t;
  }
});