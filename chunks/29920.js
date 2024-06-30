n.d(t, {
    H: function () {
        return r;
    }
});
var i = n(544891), s = n(960048), a = n(981631);
async function r(e) {
    let {
        userTrialOffer: t,
        userDiscount: n,
        userDiscountOffer: r
    } = e;
    try {
        let e = await i.tn.post({
            url: a.ANM.PREMIUM_MARKETING,
            body: {
                user_trial_offer: t,
                user_discount: n,
                user_discount_offer: r
            }
        });
        if (e.ok)
            return e.body;
        return s.Z.captureMessage('fetchPremiumMarketingContentWithUserOffer failed'), [];
    } catch (e) {
        return s.Z.captureException(e), [];
    }
}
