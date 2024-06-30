s.d(n, {
    H: function () {
        return p;
    }
}), s(47120);
var l = s(512722), i = s.n(l), t = s(570140), r = s(355467), a = s(976255), c = s(366939), o = s(16084), u = s(255078), d = s(626135), _ = s(74538), m = s(45572), I = s(981631), E = s(474936);
async function p(e) {
    let {
        setPurchaseState: n,
        setHasAcceptedTerms: s,
        setIsSubmitting: l,
        setPurchaseError: p,
        hasRedirectURL: N,
        setHasRedirectURL: T,
        isGift: S,
        baseAnalyticsData: x,
        analyticsLocation: h,
        analyticsLocations: P,
        flowStartTime: A,
        subscriptionPlan: v,
        planGroup: f,
        trialId: M,
        priceOptions: g,
        paymentSource: C,
        isPrepaidPaymentPastDue: R,
        openInvoiceId: O,
        premiumSubscription: L,
        onNext: j,
        metadata: y,
        sku: Z,
        skuPricePreview: b,
        purchaseType: D,
        referralCode: G,
        loadId: U,
        giftInfoOptions: F,
        invoicePreview: w
    } = e;
    n(m.A.PURCHASING), s(!0), l(!0), t.Z.wait(a.fw), p(null);
    try {
        let e, s, l;
        if (d.default.track(I.rMx.PAYMENT_FLOW_COMPLETED, {
                ...x,
                subtotal: null == w ? void 0 : w.subtotal,
                tax: null == w ? void 0 : w.tax,
                expected_amount: null == w ? void 0 : w.total,
                expected_currency: null == w ? void 0 : w.currency,
                duration_ms: Date.now() - A
            }), N)
            return;
        if (D === I.GZQ.ONE_TIME)
            i()(null != Z, 'SKU must exist and be fetched.'), i()(null != b, 'SKUPricePreview must exist.'), e = await (0, o.ZZ)(Z.applicationId, Z.id, {
                expectedAmount: b.amount,
                expectedCurrency: b.currency,
                isGift: S,
                paymentSource: C,
                loadId: U,
                giftInfoOptions: F
            });
        else if (i()(null != v, 'Missing subscriptionPlan'), S) {
            i()(null != w, 'Missing invoicePreview');
            let n = w.total, s = w.currency;
            e = await (0, o.ZZ)(E.RQ, v.skuId, {
                expectedAmount: n,
                expectedCurrency: s,
                paymentSource: C,
                subscriptionPlanId: v.id,
                isGift: !0,
                loadId: U,
                giftInfoOptions: F
            });
        } else if (R && null != O && null != C && null != L)
            e = I.Uk1.has(C.type) ? await (0, r.G)(L, O, C, g.currency) : await (0, r.Mg)(L, {
                paymentSource: C,
                currency: g.currency
            }, P, h, U);
        else if (null != L) {
            let n = (0, _.al)(L, v.id, 1, new Set(f)), s = {
                    paymentSource: C,
                    currency: g.currency
                };
            L.status === I.O0b.PAUSED ? s.status = I.O0b.ACTIVE : s.items = n, e = await (0, r.Mg)(L, s, P, h, U);
        } else
            e = await (0, c.Ld)({
                planId: v.id,
                currency: g.currency,
                paymentSource: C,
                trialId: M,
                metadata: y,
                referralCode: G,
                loadId: U
            });
        if (e.redirectConfirmation) {
            T(null != e.redirectURL);
            return;
        }
        n(m.A.COMPLETED), 'subscription' in e ? s = null != e.subscription ? u.Z.createFromServer(e.subscription) : null : 'entitlements' in e && (l = null != e.entitlements ? e.entitlements : void 0), j(s, l);
    } catch (e) {
        n(m.A.FAIL), p(e), d.default.track(I.rMx.PAYMENT_FLOW_FAILED, {
            ...x,
            payment_error_code: null == e ? void 0 : e.code,
            payment_source_id: null == C ? void 0 : C.id,
            payment_source_type: null == C ? void 0 : C.type,
            duration_ms: Date.now() - A
        });
    } finally {
        !N && l(!1);
    }
}
