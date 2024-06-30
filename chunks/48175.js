t.d(e, {
    T: function () {
        return i;
    },
    Z: function () {
        return r;
    }
});
var l = t(639119), u = t(474936);
function i(n) {
    let {
        userTrialOffer: e,
        isGift: t,
        skuId: l
    } = n;
    return !t && null != e && null != l && u.nG[e.trial_id].skus.includes(l);
}
function r(n) {
    let {
            isGift: e,
            skuId: t,
            referralTrialOfferId: i
        } = n, r = (0, l.N)(i);
    return !e && null != r && null != t && u.nG[r.trial_id].skus.includes(t);
}
