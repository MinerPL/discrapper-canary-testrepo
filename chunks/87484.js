t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var l = t(772848), r = t(481060), s = t(976255), o = t(667), a = t(626135), c = t(981631);
function d(e) {
    let {
            applicationId: n,
            skuId: d,
            onClose: u,
            onComplete: m,
            analyticsLocations: S,
            analyticsLocationObject: _,
            contextKey: p
        } = e, f = !1, h = (0, l.Z)();
    (0, r.openModalLazy)(async () => {
        let {default: e} = await Promise.all([
            t.e('96427'),
            t.e('77298'),
            t.e('23357'),
            t.e('15972'),
            t.e('12013'),
            t.e('6416'),
            t.e('39612'),
            t.e('32776'),
            t.e('95900'),
            t.e('95854'),
            t.e('90803')
        ]).then(t.bind(t, 409600));
        return t => {
            let {
                onClose: l,
                ...r
            } = t;
            return (0, i.jsx)(e, {
                ...r,
                loadId: h,
                applicationId: n,
                skuId: d,
                analyticsLocations: S,
                analyticsLocationObject: _,
                onClose: e => {
                    l(), null == u || u(e);
                },
                onComplete: e => {
                    f = !0, null == m || m(e);
                }
            });
        };
    }, {
        contextKey: p,
        onCloseCallback: () => {
            !f && a.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
                load_id: h,
                payment_type: c.Zuq[c.GZQ.ONE_TIME],
                location: _,
                is_gift: !1,
                application_id: n,
                location_stack: S
            }), (0, s.fw)(), (0, o.p)(), null == u || u(f);
        },
        onCloseRequest: c.dG4
    });
}
