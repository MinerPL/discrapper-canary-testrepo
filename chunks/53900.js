a.d(n, {
    Z: function () {
        return l;
    }
});
var t = a(442837), s = a(853872), r = a(78839);
function l() {
    let e = (0, t.e7)([r.ZP], () => r.ZP.getPremiumTypeSubscription());
    return (0, t.e7)([s.Z], () => {
        var n;
        return (null == e ? void 0 : e.paymentSourceId) != null ? null === (n = s.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null;
    });
}
