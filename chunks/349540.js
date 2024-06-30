n(47120);
var r = n(147913), i = n(594174), a = n(74538), o = n(163684), s = n(748770), l = n(474936);
class u extends r.Z {
    onPostConnectionOpen() {
        this.maybeFetchActiveOutboundPromotions();
    }
    maybeFetchActiveOutboundPromotions() {
        let e = i.default.getCurrentUser(), t = a.ZP.isPremium(e), n = o.g.getCurrentConfig({ location: 'maybeFetchActiveOutboundPromotions' }, {
                autoTrackExposure: !t,
                disable: t
            }).enabled;
        (a.ZP.isPremiumExactly(e, l.p9.TIER_2) || n) && (0, s.vM)();
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = {
            POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
            EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this)
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = new u();
