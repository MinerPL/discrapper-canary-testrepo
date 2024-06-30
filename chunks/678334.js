s.d(n, {
    Z: function () {
        return O;
    }
}), s(47120);
var l = s(735250), i = s(470079), t = s(512722), r = s.n(t), a = s(442837), c = s(481060), o = s(355467), u = s(906732), d = s(160913), _ = s(311821), m = s(459965), I = s(858987), E = s(975060), p = s(882712), N = s(855775), T = s(285952), S = s(626135), x = s(669079), h = s(74538), P = s(987209), A = s(598), v = s(632580), f = s(45572), M = s(919778), g = s(612853), C = s(981631), R = s(280755);
function O(e) {
    let {
            premiumSubscription: n,
            setPurchaseState: s,
            onBack: t,
            onNext: O,
            legalTermsNodeRef: L,
            flashLegalTerms: j,
            invoiceError: y,
            planError: Z,
            onPurchaseError: b,
            baseAnalyticsData: D,
            flowStartTime: G,
            trialId: U,
            planGroup: F,
            analyticsLocation: w,
            purchaseTokenAuthState: B,
            openInvoiceId: H,
            metadata: k,
            backButtonEligible: W,
            disablePurchase: Y,
            isTrial: K = !1
        } = e, {
            selectedPlan: V,
            priceOptions: z,
            setHasAcceptedTerms: X,
            setPurchaseError: J,
            purchaseType: q,
            paymentSourceId: Q,
            paymentSources: $,
            selectedSkuId: ee,
            skusById: en,
            skuPricePreviewsById: es,
            referralCode: el,
            contextMetadata: ei,
            invoicePreview: et
        } = (0, A.usePaymentContext)(), {
            isGift: er,
            selectedGiftStyle: ea,
            customGiftMessage: ec,
            emojiConfetti: eo,
            soundEffect: eu,
            giftRecipient: ed
        } = (0, P.wD)(), e_ = (0, x.MY)(ed), em = {};
    em.gift_style = ea, e_ === x.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (r()(null != ed, 'Gift recipient must be set at purchase review step for these gift options.'), em.recipient_id = ed.id, em.custom_message = ec, em.emoji_id = null == eo ? void 0 : eo.id, em.emoji_name = (null == eo ? void 0 : eo.id) == null ? null == eo ? void 0 : eo.surrogates : void 0, em.sound_id = null == eu ? void 0 : eu.soundId);
    let eI = null == V ? void 0 : V.id, eE = (0, M.sE)(U, z.paymentSourceId, eI), ep = (0, a.e7)([E.Z], () => E.Z.popupCallbackCalled), {analyticsLocations: eN} = (0, u.ZP)(), eT = null != Q ? $[Q] : null, [eS, ex] = i.useState(eE), [eh, eP] = i.useState(!1), {hasEntitlements: eA} = (0, m.H)(eI, er), ev = (0, h.Ap)(z.paymentSourceId), ef = eA || eE, eM = (0, d.U)(), eg = null, eC = null;
    if (q === C.GZQ.ONE_TIME) {
        var eR;
        r()(null != ee, 'SKU must be selected for one-time purchases'), eg = null !== (eR = en[ee]) && void 0 !== eR ? eR : null, r()(null != eg, 'SKU must exist and be fetched.');
        let e = es[ee], n = null != Q ? Q : N.c;
        eC = null != e ? e[n] : null;
    }
    let eO = async () => {
        await (0, v.H)({
            setPurchaseState: s,
            setHasAcceptedTerms: X,
            setIsSubmitting: ex,
            setPurchaseError: J,
            hasRedirectURL: eh,
            setHasRedirectURL: eP,
            isGift: er,
            baseAnalyticsData: D,
            analyticsLocation: w,
            analyticsLocations: eN,
            flowStartTime: G,
            subscriptionPlan: V,
            planGroup: F,
            trialId: U,
            priceOptions: z,
            paymentSource: eT,
            isPrepaidPaymentPastDue: eM,
            openInvoiceId: H,
            premiumSubscription: n,
            onNext: O,
            metadata: k,
            sku: eg,
            skuPricePreview: eC,
            purchaseType: q,
            referralCode: el,
            loadId: ei.loadId,
            giftInfoOptions: em,
            invoicePreview: et
        });
    };
    i.useEffect(() => {
        (async () => {
            if (!0 === ep)
                try {
                    if (null == E.Z.redirectedPaymentId)
                        return;
                    await (0, o.OP)(E.Z.redirectedPaymentId), s(f.A.COMPLETED), O();
                } catch (e) {
                    s(f.A.FAIL), b(e), S.default.track(C.rMx.PAYMENT_FLOW_FAILED, {
                        ...D,
                        payment_error_code: null == e ? void 0 : e.code,
                        payment_source_id: Q,
                        payment_source_type: null == eT ? void 0 : eT.type,
                        duration_ms: Date.now() - G
                    });
                } finally {
                    ex(!1), (0, o.K2)();
                }
            else
                B === p.I.SUCCESS && await eO();
        })();
    }, [ep]), i.useEffect(() => {
        eE && !er && null == n && eO();
    }, [
        eE,
        er,
        n
    ]);
    let eL = null != H || q === C.GZQ.ONE_TIME && !er;
    return eE ? null : (0, l.jsxs)(c.ModalFooter, {
        align: T.Z.Align.CENTER,
        children: [
            (0, l.jsx)(I.Z, {
                legalTermsNodeRef: L,
                invoiceError: y,
                planError: Z,
                disablePurchase: Y,
                flashLegalTerms: j,
                isSubmitting: eS,
                premiumSubscription: n,
                isGift: er,
                planGroup: F,
                isPrepaid: ev,
                isTrial: K,
                makePurchase: eO,
                needsPaymentSource: null == eT && !ef
            }),
            (0, l.jsx)(g.Z, {}),
            W && !eL ? (0, l.jsx)('div', {
                className: R.back,
                children: (0, l.jsx)(_.Z, { onClick: t })
            }) : null
        ]
    });
}
