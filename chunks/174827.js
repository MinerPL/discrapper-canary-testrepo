n.d(s, {
    x: function () {
        return k;
    }
}),
    n(47120);
var t = n(735250),
    r = n(470079),
    i = n(512722),
    l = n.n(i),
    a = n(399606),
    o = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    u = n(374649),
    _ = n(650032),
    p = n(439017),
    x = n(857039),
    h = n(515593),
    L = n(104494),
    f = n(639119),
    I = n(642530),
    E = n(381507),
    M = n(314404),
    N = n(594174),
    j = n(509545),
    g = n(669079),
    T = n(63063),
    m = n(74538),
    S = n(987209),
    A = n(598),
    O = n(409813),
    R = n(51499),
    P = n(456251),
    Z = n(614277),
    v = n(809144),
    y = n(698708),
    b = n(981631),
    U = n(474936),
    H = n(689938),
    B = n(577581);
function k(e) {
    var s, n, i;
    let { handleStepChange: k, initialPlanId: F, subscriptionTier: G, trialId: w, referralTrialOfferId: D, handleClose: W } = e,
        { activeSubscription: Y, hasFetchedSubscriptions: K, paymentSourceId: V, paymentSources: X, selectedSkuId: Q, selectedPlan: z, step: q, defaultPlanId: J, priceOptions: $, isPremium: ee } = (0, A.usePaymentContext)(),
        { isGift: es, giftRecipient: en, giftMessage: et } = (0, S.wD)(),
        er = null != V ? X[V] : null,
        { newPlans: ei } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        el = (0, a.e7)([N.default], () => N.default.getCurrentUser()),
        ea = !es && null != Q && Q === U.Si.TIER_2 && null != el && el.hasHadPremium() && K && null == Y && (0, c.aQ)(er),
        eo = (0, f.N)(D),
        eC = !es && null != eo && null != Q && U.nG[eo.trial_id].skus.includes(Q),
        ed = (0, L.Ng)(),
        ec = null == ed ? void 0 : null === (s = ed.discount) || void 0 === s ? void 0 : s.plan_ids.some((e) => U.GP[e].skuId === Q),
        eu = !es && null != ed && null != Q && ec,
        e_ = null !== (n = eC || eu) && void 0 !== n && n,
        { defaultToMonthlyPlan: ep } = p.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        ex = r.useMemo(
            () =>
                (0, m.V7)({
                    skuId: Q,
                    isPremium: ee,
                    multiMonthPlans: ea ? ei : [],
                    currentSubscription: Y,
                    isGift: es,
                    isEligibleForTrial: eC,
                    defaultPlanId: J,
                    defaultToMonthlyPlan: ep
                }),
            [Q, ee, ei, Y, ea, es, eC, J, ep]
        ),
        eh = eu && ex.includes(U.Xh.PREMIUM_MONTH_TIER_2) ? U.Xh.PREMIUM_MONTH_TIER_2 : ex[0],
        eL = (0, a.e7)([j.Z], () => j.Z.get(eh)),
        ef = [
            {
                planId: null == eL ? void 0 : eL.id,
                quantity: 1
            }
        ],
        [eI, eE] = r.useState(e_),
        [eM, eN] = (0, u.ED)({
            items: ef,
            renewal: !1,
            preventFetch: !e_,
            applyEntitlements: !0,
            trialId: w,
            paymentSourceId: $.paymentSourceId,
            currency: $.currency
        }),
        ej = (0, x.Z)({ location: 'PremiumGiftPlanSelect' }) && (null == eL ? void 0 : eL.skuId) === U.Si.TIER_2;
    r.useEffect(() => {
        e_ && eE((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
    }, [eM, e_]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eI,
            5,
            {
                proratedInvoicePreview: eM,
                proratedInvoiceError: eN,
                isEligibleForOffer: e_
            },
            { tags: { app_context: 'billing' } }
        );
    let eg = null !== (i = null == eN ? void 0 : eN.message) && void 0 !== i ? i : H.Z.Messages.ERROR_GENERIC_TITLE,
        eT = e_ && null == eN,
        em = e_ && null != eN,
        eS = eT && null == Y && !!e_ && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
        { enabled: eA } = _._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eO = !es && (null == eL ? void 0 : eL.skuId) === U.Si.TIER_2 && (null == eo ? void 0 : eo.referrer_id) != null && eA,
        eR = null;
    return ((eR = eO ? (0, t.jsx)(E.Z, {}) : (0, t.jsx)(I.Z, {})), eS)
        ? (0, t.jsx)(P.Z, {})
        : (l()(null != q, 'Step should be set'),
          l()(ex.length > 0, 'Premium plan options should be set'),
          (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(v.P, { giftMessage: et }),
                  !(es && (0, g.pO)(en)) && (0, t.jsx)(R.Z, { isEligibleForTrial: eC }),
                  (0, t.jsxs)(Z.C3, {
                      children: [
                          eT && (0, t.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          eR,
                          (0, t.jsx)(y.Z, {}),
                          em
                              ? (0, t.jsx)(o.FormErrorBlock, { children: eg })
                              : (0, t.jsx)(M.O, {
                                    planOptions: ex,
                                    eligibleForMultiMonthPlans: ea,
                                    referralTrialOfferId: D,
                                    selectedPlanId: null == z ? void 0 : z.id,
                                    subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
                                    discountInvoiceItems: eu ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                    handleClose: W
                                }),
                          eT &&
                              (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      (0, t.jsx)('hr', { className: B.planSelectSeparatorLower }),
                                      (0, t.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: H.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({ link: T.Z.getArticleURL(b.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, t.jsxs)(Z.O3, {
                      children: [
                          ej
                              ? (0, t.jsxs)('div', {
                                    className: B.nitroweenFooterBanner,
                                    children: [
                                        (0, t.jsx)(h.Z, { size: o.AvatarSizes.SIZE_40 }),
                                        (0, t.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: H.Z.Messages.NITROWEEN_DESKTOP_GIFT_PURCHASE_DESCRIPTION
                                        })
                                    ]
                                })
                              : null,
                          (0, t.jsx)(o.ModalFooter, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, t.jsx)(M.M, {
                                  onStepChange: k,
                                  onBackClick: () => k(O.h8.SKU_SELECT),
                                  showBackButton: null == F && null == G,
                                  planOptions: ex,
                                  shouldRenderUpdatedPaymentModal: eT,
                                  isTrial: eC
                              })
                          })
                      ]
                  })
              ]
          }));
}
