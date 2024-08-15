n.d(t, {
	H: function () {
		return r;
	}
});
var i = n(544891),
	a = n(960048),
	s = n(981631);
async function r(e) {
	let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
	try {
		let e = await i.tn.post({
			url: s.ANM.PREMIUM_MARKETING,
			body: {
				user_trial_offer: t,
				user_discount: n,
				user_discount_offer: r
			}
		});
		if (e.ok) return e.body;
		return a.Z.captureMessage('fetchPremiumMarketingContentWithUserOffer failed'), [];
	} catch (e) {
		return a.Z.captureException(e), [];
	}
}
