n.d(t, {
    _: function () {
        return c;
    }
});
var s = n(442837), a = n(78839), r = n(74538), i = n(104494), l = n(639119), o = n(474936);
function c(e) {
    let {
            defaultResponse: t,
            onDiscountOffer: n,
            onNonSubscriber: c,
            onTier0TrialOffer: d,
            onTier2TrialOffer: _,
            onTier0TrialPeriod: u,
            onTier2TrialPeriod: E,
            onNonTier2Subscriber: T,
            onTier2Subscriber: I,
            onCustomCriteria: R
        } = e, C = (0, l.N)(), p = (0, i.Ng)(), g = (0, s.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()), A = r.ZP.getPremiumTypeFromSubscription(g);
    if (null != R) {
        let e = R();
        if (null != e)
            return e;
    }
    return null != C && o.nG[C.trial_id].skus.includes(o.Si.TIER_0) ? null != d ? d : t : null != C && o.nG[C.trial_id].skus.includes(o.Si.TIER_2) ? null != _ ? _ : t : null != g && null != g.trialId && A === o.p9.TIER_0 ? null != u ? u : t : null != g && null != g.trialId && A === o.p9.TIER_2 ? null != E ? E : t : null != p ? null != n ? n : t : null == A ? null != c ? c : t : A === o.p9.TIER_0 || A === o.p9.TIER_1 ? null != T ? T : t : A === o.p9.TIER_2 ? null != I ? I : t : t;
}
