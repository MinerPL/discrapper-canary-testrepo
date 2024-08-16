a.d(n, {
    Z: function () {
        return i;
    }
});
var t = a(442837),
    r = a(853872),
    o = a(78839);
function i() {
    let e = (0, t.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription());
    return (0, t.e7)([r.Z], () => {
        var n;
        return (null == e ? void 0 : e.paymentSourceId) != null ? (null === (n = r.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country) : null;
    });
}
