n.r(t), n.d(t, {
    STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
        return p;
    },
    default: function () {
        return f;
    }
}), n(47120);
var o = n(735250);
n(470079);
var r = n(100527), a = n(906732), i = n(987209), c = n(598), s = n(791785), l = n(961830), d = n(231338);
function u(e) {
    let {
            onClose: t,
            onComplete: n,
            transitionState: r,
            applicationId: i,
            analyticsLocationObject: l,
            skuId: d
        } = e, {} = (0, c.usePaymentContext)(), {analyticsLocations: u} = (0, a.ZP)();
    return (0, o.jsx)(s.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: i,
        skuId: d,
        initialPlanId: null,
        analyticsObject: l,
        analyticsLocations: u,
        transitionState: r
    });
}
let p = [
    l.WA,
    l.s2,
    ...l.yp,
    l.wo,
    l.F7
];
function f(e) {
    let {
            loadId: t,
            applicationId: n,
            skuId: s,
            analyticsLocations: l
        } = e, {analyticsLocations: f} = (0, a.ZP)(l, r.Z.PREMIUM_PAYMENT_MODAL);
    return (0, o.jsx)(a.Gt, {
        value: f,
        children: (0, o.jsx)(c.PaymentContextProvider, {
            loadId: t,
            stepConfigs: p,
            applicationId: n,
            skuIDs: [s],
            activeSubscription: null,
            purchaseType: d.GZ.ONE_TIME,
            children: (0, o.jsx)(i.KB, { children: (0, o.jsx)(u, { ...e }) })
        })
    });
}
