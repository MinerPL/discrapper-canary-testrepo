a.d(n, {
    Z: function () {
        return u;
    }
});
var t = a(735250);
a(470079);
var s = a(120356), r = a.n(s), l = a(937615), i = a(474936), o = a(689938), c = a(342018);
function u(e) {
    let {
            price: n,
            currency: a,
            intervalType: s,
            className: u,
            intervalCount: d = 1,
            isPrepaidPaymentSource: _ = !1
        } = e, I = (0, l.T4)(n, a), E = null;
    return s === i.rV.YEAR ? E = o.Z.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({ price: I }) : s === i.rV.MONTH && 1 === d ? E = o.Z.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({ price: I }) : s === i.rV.MONTH && d > 1 && (E = o.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
        price: I,
        intervalCount: d
    })), (0, t.jsx)('div', {
        className: r()(c.pricePerInterval, u),
        'data-testid': 'PricePerInterval-'.concat(a),
        children: null == s || _ ? (0, t.jsx)('strong', { children: I }) : E
    });
}
