n.d(t, {
    S: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(512722), s = n.n(a), l = n(481060), r = n(558381), o = n(821849), c = n(15640), d = n(724870), u = n(87484), _ = n(928518), E = n(106976), m = n(689011), I = n(55563), T = n(981631);
async function h(e) {
    let {
            applicationId: t,
            skuId: n,
            initialPlanId: a,
            analyticsLocations: h,
            analyticsLocationObject: N
        } = e, f = I.Z.get(n);
    if (null == f) {
        let e = (await (0, r.oJ)(t)).find(e => e.sku.id === n);
        s()(null != e, 'Could not find store listing for sku'), e.sku.type === T.epS.SUBSCRIPTION_GROUP && await (0, E.rx)(t, e.id);
    }
    f = null != f ? f : I.Z.get(n), s()(null != f && f.applicationId === t, 'SKU must belong to application'), f.type === T.epS.SUBSCRIPTION && !(0, c.a)([f.id]) && await (0, o.GZ)(f.id);
    let p = function () {
        let e = _.Z.getWindow(T.KJ3.CHANNEL_CALL_POPOUT);
        return null == e || e.closed ? l.DEFAULT_MODAL_CONTEXT : l.POPOUT_MODAL_CONTEXT;
    }();
    if (f.type !== T.epS.SUBSCRIPTION)
        return new Promise((e, i) => {
            (0, u.Z)({
                applicationId: t,
                skuId: n,
                analyticsLocationObject: N,
                analyticsLocations: h,
                contextKey: p,
                onComplete: t => {
                    var n;
                    e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : []);
                },
                onClose: e => {
                    !e && i();
                }
            });
        });
    await function (e, t, n, a, s) {
        return (0, d.m)({
            applicationId: e,
            skuId: t,
            initialPlanId: n,
            analyticsLocationObject: a,
            analyticsLocations: s,
            renderHeader: (e, t, n) => (0, i.jsx)(m.t, {
                step: n,
                onClose: () => t(!1)
            })
        });
    }(t, n, a, N, h);
}
