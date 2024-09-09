t.d(n, {
    K: function () {
        return N;
    },
    Z: function () {
        return A;
    }
});
var s = t(735250);
t(470079);
var r = t(512722),
    l = t.n(r),
    i = t(481060),
    a = t(906732),
    c = t(598),
    o = t(74538),
    u = t(296848),
    I = t(244923),
    _ = t(231338),
    E = t(689938),
    T = t(357831),
    d = t(74316);
function N(e) {
    let { purchaseType: n, plan: t, premiumSubscription: s, isGift: r, planGroup: i, isPrepaidPaymentSource: a, inReverseTrial: c } = e;
    if (n === _.GZ.ONE_TIME) return r ? E.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : E.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
    if ((l()(null != t, 'Subscription plan must be selected to render SubscriptionReviewButton'), r)) return E.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
    if (c) return E.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
    if ((0, o.PV)(t.id)) {
        if (a) return E.Z.Messages.BILLING_SELECT_PLAN;
        if (null != s) return s.isPaused ? E.Z.Messages.RESUME : (0, u.R4)(s, t.id, i) ? E.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : E.Z.Messages.BILLING_SWITCH_PLAN_CHANGE;
        return (0, o.W_)(null, t);
    }
    return E.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN;
}
function M(e, n) {
    null != e.current && (e.current.scrollIntoView({ behavior: 'smooth' }), n());
}
function A(e) {
    let { legalTermsNodeRef: n, invoiceError: t, planError: r, disablePurchase: l, flashLegalTerms: o, isSubmitting: u, premiumSubscription: _, isGift: A, planGroup: L, isPrepaid: P, isTrial: R, makePurchase: S, needsPaymentSource: m, inReverseTrial: U, onNext: p } = e,
        { selectedPlan: v, hasAcceptedTerms: C, purchaseType: O, paymentSourceId: h, activeSubscription: f } = (0, c.usePaymentContext)(),
        g = N({
            purchaseType: O,
            plan: v,
            premiumSubscription: _,
            isGift: A,
            planGroup: L,
            isPrepaidPaymentSource: P,
            inReverseTrial: U
        }),
        { analyticsLocations: x } = (0, a.ZP)();
    if (null != t || null != r || l)
        return (0, s.jsx)(i.Button, {
            color: i.Button.Colors.GREEN,
            disabled: !0,
            children: g
        });
    if (m)
        return (0, s.jsx)(i.Tooltip, {
            text: E.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
            children: (e) =>
                (0, s.jsx)(i.Button, {
                    ...e,
                    color: i.Button.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    disabled: !0,
                    children: g
                })
        });
    if (R)
        return (0, s.jsxs)(i.ShinyButton, {
            innerClassName: T.innerButton,
            'data-testid': C ? 'purchase' : 'submitButton',
            onClick: C ? S : () => M(n, o),
            color: i.Button.Colors.GREEN,
            submitting: u,
            children: [
                (0, s.jsx)('img', {
                    alt: '',
                    className: T.nitroIcon,
                    src: d
                }),
                g
            ]
        });
    else if (!C)
        return (0, s.jsx)(i.Tooltip, {
            text: E.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: (e) =>
                (0, s.jsx)(i.Button, {
                    ...e,
                    color: i.Button.Colors.GREEN,
                    type: 'submit',
                    onClick: () => M(n, o),
                    'data-testid': 'submitButton',
                    children: g
                })
        });
    else if (U && null != f && null != h)
        return (0, s.jsx)(I.Z, {
            activeSubscription: f,
            onNext: p,
            isSubmitting: u,
            paymentSourceId: h,
            buttonLabel: g,
            analyticsLocations: x
        });
    else
        return (0, s.jsx)(i.Button, {
            'data-testid': 'purchase',
            onClick: S,
            color: i.Button.Colors.GREEN,
            submitting: u,
            children: g
        });
}
