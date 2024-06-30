var i, a, s, l, r = n(442837), o = n(570140);
let c = [];
class d extends (l = r.ZP.Store) {
    getEligibleGuildsForNagActivate() {
        return c;
    }
}
s = 'CreatorMonetizationMarketingStore', (a = 'displayName') in (i = d) ? Object.defineProperty(i, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = s, t.Z = new d(o.Z, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function (e) {
        let {eligibleGuilds: t} = e;
        c = t;
    }
});
