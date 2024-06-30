n.d(t, {
    z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(772848), s = n(481060), l = n(976255), r = n(667), o = n(626135), c = n(981631);
function d(e) {
    let {
            guildProductListing: t,
            guildId: d,
            sourceAnalyticsLocations: u
        } = e, _ = !1, E = (0, a.Z)(), m = () => {
            _ = !0;
        };
    (0, s.openModalLazy)(async () => {
        let {default: e} = await Promise.all([
            n.e('96427'),
            n.e('77298'),
            n.e('23357'),
            n.e('15972'),
            n.e('12013'),
            n.e('6416'),
            n.e('39612'),
            n.e('32776'),
            n.e('95900'),
            n.e('37544')
        ]).then(n.bind(n, 578780));
        return n => (0, i.jsx)(e, {
            ...n,
            applicationId: t.application_id,
            skuId: t.id,
            sourceAnalyticsLocations: u,
            guildProductContext: {
                guildProductListingId: t.id,
                guildId: d
            },
            loadId: E,
            onComplete: m
        });
    }, {
        onCloseCallback: () => {
            !_ && o.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
                load_id: E,
                payment_type: c.Zuq[c.GZQ.ONE_TIME],
                is_gift: !1,
                location_stack: Array.isArray(u) ? u : [u]
            }), (0, l.fw)(), (0, r.p)();
        },
        onCloseRequest: c.dG4
    });
}
