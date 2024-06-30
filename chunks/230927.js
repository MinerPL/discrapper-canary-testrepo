n.d(t, {
    g: function () {
        return u;
    }
}), n(47120);
var r = n(442837), i = n(509545), a = n(74538), o = n(374649), s = n(104494), l = n(474936);
function u(e) {
    var t, n;
    let {
            priceOptions: u,
            preventFetch: c,
            selectedSkuId: d,
            isGift: _ = !1,
            planGroup: E,
            activeSubscription: f
        } = e, h = (0, s.z1)(), p = (0, r.e7)([i.Z], () => i.Z.get(l.Xh.PREMIUM_YEAR_TIER_2)), m = null == h ? void 0 : null === (t = h.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => l.GP[e].skuId === d), I = null != f && null != p ? (0, a.al)(f, p.id, 1, new Set(E)) : null, T = !_ && null != h && null != d && m, [g, S] = (0, o.ED)({
            subscriptionId: null !== (n = null == f ? void 0 : f.id) && void 0 !== n ? n : 'null',
            items: I,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: !T || null == f || c
        }), [A, N] = (0, o.ED)({
            items: [{
                    planId: l.Xh.PREMIUM_YEAR_TIER_2,
                    quantity: 1
                }],
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: !T || null != f || c
        });
    return null != g ? {
        annualInvoicePreview: g,
        annualInvoicePreviewError: S,
        isEligibleForAnnualDiscount: T
    } : null != A ? {
        annualInvoicePreview: A,
        annualInvoicePreviewError: N,
        isEligibleForAnnualDiscount: T
    } : {
        annualInvoicePreview: null,
        annualInvoicePreviewError: null,
        isEligibleForAnnualDiscount: T
    };
}
