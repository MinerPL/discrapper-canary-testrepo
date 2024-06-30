n(47120);
var r = n(355467), i = n(496929), a = n(147913), o = n(594174), s = n(351402), l = n(78839), u = n(580130), c = n(630388), d = n(74538), _ = n(474936);
function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class f extends a.Z {
    constructor(...e) {
        super(...e), E(this, 'actions', {
            POST_CONNECTION_OPEN: () => {
                this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription();
            }
        }), E(this, 'maybeFetchSubscriptions', async () => {
            let e = o.default.getCurrentUser();
            if (d.ZP.isPremium(e)) {
                !l.ZP.hasFetchedSubscriptions() && await (0, r.jg)();
                let e = l.ZP.getPremiumSubscription();
                (null == e ? void 0 : e.paymentSourceId) == null && !u.Z.applicationIdsFetched.has(_.RQ) && await (0, i.yD)(_.RQ);
            }
        }), E(this, 'maybeFetchMostRecentSubscription', () => {
            let e = o.default.getCurrentUser();
            null != e && !d.ZP.isPremium(e) && null != e.purchasedFlags && ((0, c.yE)(e.purchasedFlags, _.in.PREMIUM_TIER_1) || (0, c.yE)(e.purchasedFlags, _.in.PREMIUM_TIER_2)) && (0, r.ou)();
        }), E(this, 'maybeFetchCountryCode', async () => {
            let e = o.default.getCurrentUser();
            d.ZP.isPremium(e) && !s.Z.ipCountryCodeLoaded && await this.fetchCountryCode();
        }), E(this, 'fetchCountryCode', async () => {
            await (0, r.GE)(), null != s.Z.ipCountryCode && await (0, r.tZ)();
        });
    }
}
t.Z = new f();
