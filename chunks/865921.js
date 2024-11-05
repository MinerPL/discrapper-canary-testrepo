n.d(t, {
    v: function () {
        return _;
    }
}),
    n(47120);
var o = n(200651),
    r = n(192379),
    i = n(512722),
    a = n.n(i),
    c = n(399606),
    d = n(89057),
    l = n(597688),
    s = n(987209),
    u = n(563132),
    p = n(409813),
    f = n(456251),
    b = n(981631);
function _(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { blockedPayments: i, hasFetchedSkus: _, paymentSources: h, hasFetchedPaymentSources: g, application: x, skusById: m, selectedSkuId: v } = (0, u.usePaymentContext)(),
        { isGift: C } = (0, s.wD)(),
        [S, k] = r.useState(!0),
        B = (0, c.e7)([l.Z], () => l.Z.isFetchingCategories);
    return (r.useEffect(() => {
        let e = null != x;
        if (!!_ && !!g && !!e) k(B);
    }, [_, g, x, B]),
    r.useEffect(() => {
        if (S || i) return;
        a()(null != v, 'Expected selectedSkuId');
        let e = m[v];
        if (C && (null == e ? void 0 : e.productLine) === b.POd.COLLECTIBLES) {
            t(p.h8.GIFT_CUSTOMIZATION);
            return;
        }
        if (0 === Object.keys(h).length) {
            t(p.h8.ADD_PAYMENT_STEPS);
            return;
        }
        t(p.h8.REVIEW);
    }, [S, i, t, h, C, m, v]),
    S)
        ? (0, o.jsx)(f.Z, {})
        : i
          ? (0, o.jsx)(d.Vq, { onClose: n })
          : null;
}
