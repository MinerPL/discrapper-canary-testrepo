t.d(n, {
    i: function () {
        return c;
    }
});
var i = t(735250), l = t(470079), r = t(512100), s = t(906732), o = t(626135), a = t(981631);
function c(e) {
    let {
            appId: n,
            skuId: t,
            ...c
        } = e, {analyticsLocations: d} = (0, s.ZP)();
    return l.useEffect(() => {
        o.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
            application_id: n,
            sku_id: t,
            location_stack: d
        });
    }, [
        d,
        n,
        t
    ]), (0, i.jsx)(r.u, { ...c });
}
