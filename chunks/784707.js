t.d(e, {
    Z: function () {
        return u;
    }
});
var l = t(598);
function u() {
    let {
            step: n,
            stepConfigs: e
        } = (0, l.usePaymentContext)(), t = e.find(e => e.key === n);
    return null == t ? void 0 : t.options;
}
