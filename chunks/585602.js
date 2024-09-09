t.d(n, {
    Z: function () {
        return a;
    }
});
var s = t(735250);
t(470079);
var r = t(937615),
    l = t(653798),
    i = t(689938);
function a(e) {
    let { invoice: n } = e;
    return n.taxInclusive || n.tax <= 0
        ? null
        : (0, s.jsx)(l.R$, {
              label: i.Z.Messages.TAX_LABEL,
              value: (0, r.T4)(n.tax, n.currency)
          });
}
