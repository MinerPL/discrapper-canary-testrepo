n.d(t, {
    Ae: function () {
        return o;
    },
    Wo: function () {
        return l;
    },
    e7: function () {
        return c;
    },
    zW: function () {
        return s;
    }
}),
    n(627341);
var r = n(278074),
    i = n(228168),
    a = n(439779);
let s = (e) => (t) => {
        if (t.hasBanner || t.hasProfileEffect) return e.premiumUserWithBanner;
        if (t.isPremium) {
            var n;
            return null !== (n = e.premiumUserWithoutBanner) && void 0 !== n ? n : e.default;
        }
        return e.default;
    },
    o = (e) => {
        let { profileType: t, user: n } = e;
        return (0, r.EQ)(t)
            .with(i.y0.POPOUT, i.y0.POMELO_POPOUT, () =>
                s({
                    premiumUserWithBanner: a.popoutBannerPremium,
                    premiumUserWithoutBanner: a.popoutNoBannerPremium,
                    default: a.popoutBanner
                })(n)
            )
            .with(i.y0.MODAL, () =>
                s({
                    premiumUserWithBanner: a.modalBannerPremium,
                    premiumUserWithoutBanner: a.modalBanner,
                    default: a.modalBanner
                })(n)
            )
            .with(i.y0.BITE_SIZE, () =>
                s({
                    premiumUserWithBanner: a.biteSizeBannerPremium,
                    premiumUserWithoutBanner: a.biteSizeBanner,
                    default: a.biteSizeBanner
                })(n)
            )
            .with(i.y0.FULL_SIZE, () =>
                s({
                    premiumUserWithBanner: a.fullSizeBannerPremium,
                    premiumUserWithoutBanner: a.fullSizeBanner,
                    default: a.fullSizeBanner
                })(n)
            )
            .with(i.y0.SETTINGS, () => a.settingsBanner)
            .with(i.y0.PANEL, () => a.panelBanner)
            .with(i.y0.CANCEL_MODAL, () => a.cancelModalBanner)
            .exhaustive();
    },
    l = (e) => {
        let { profileType: t, user: n } = e;
        return (0, r.EQ)(t)
            .with(i.y0.POPOUT, () =>
                s({
                    premiumUserWithBanner: 120,
                    premiumUserWithoutBanner: 90,
                    default: 60
                })(n)
            )
            .with(i.y0.MODAL, () =>
                s({
                    premiumUserWithBanner: 212,
                    premiumUserWithoutBanner: 106,
                    default: 106
                })(n)
            )
            .with(i.y0.BITE_SIZE, () => 105)
            .with(i.y0.FULL_SIZE, () => 210)
            .with(i.y0.POMELO_POPOUT, () => 64)
            .with(i.y0.SETTINGS, () => 100)
            .with(i.y0.PANEL, () => 120)
            .with(i.y0.CANCEL_MODAL, () => 42)
            .exhaustive();
    },
    u = Object.freeze({
        [i.y0.POPOUT]: 340,
        [i.y0.PANEL]: 340,
        [i.y0.MODAL]: 600,
        [i.y0.SETTINGS]: 660,
        [i.y0.POMELO_POPOUT]: 432,
        [i.y0.CANCEL_MODAL]: 172,
        [i.y0.BITE_SIZE]: 300,
        [i.y0.FULL_SIZE]: 600
    }),
    c = (e) => u[e];
