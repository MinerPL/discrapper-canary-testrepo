a.d(n, {
    Z: function () {
        return i;
    }
});
var t = a(735250);
a(470079);
var s = a(937615), r = a(653798), l = a(689938);
function i(e) {
    let {invoice: n} = e;
    return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(r.R$, {
        label: l.Z.Messages.TAX_LABEL,
        value: (0, s.T4)(n.tax, n.currency)
    });
}
