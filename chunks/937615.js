n.d(t, {
    T3: function () {
        return c;
    },
    T4: function () {
        return l;
    },
    og: function () {
        return u;
    },
    xg: function () {
        return d;
    }
}),
    n(411104);
var r = n(221513),
    i = n(706454),
    a = n(74538),
    s = n(474936),
    o = n(689938);
function l(e, t, n) {
    var a;
    let s = null !== (a = null == n ? void 0 : n.localeOverride) && void 0 !== a ? a : i.default.locale;
    return (0, r.T4)(e, t, s, n);
}
function u(e, t, n) {
    if (t === s.rV.YEAR) return o.Z.Messages.BILLING_PRICE_PER_YEAR.format({ price: e });
    if (t === s.rV.MONTH && 1 === n) return o.Z.Messages.BILLING_PRICE_PER_MONTH.format({ price: e });
    if (t === s.rV.MONTH && n > 1)
        return o.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS.format({
            price: e,
            intervalCount: n
        });
    throw Error('Unsupported interval type: '.concat(t, ', and interval count: ').concat(n));
}
function c(e, t) {
    return Intl.NumberFormat(e, {
        style: 'percent',
        minimumFractionDigits: 0
    }).format(t);
}
function d(e) {
    let t = 'interval_count' in e ? e.interval_count : e.intervalCount,
        n = (0, a.aS)(e.id);
    return u(l(n.amount, n.currency), e.interval, t);
}
