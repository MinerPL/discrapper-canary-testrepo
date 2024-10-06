t.d(n, {
    K: function () {
        return L;
    },
    Z: function () {
        return R;
    }
}),
    t(789020);
var s = t(735250);
t(470079);
var r = t(512722),
    i = t.n(r),
    l = t(481060),
    a = t(115130),
    c = t(906732),
    o = t(598),
    u = t(630388),
    I = t(74538),
    _ = t(296848),
    E = t(244923),
    T = t(981631),
    d = t(231338),
    N = t(689938),
    M = t(423654),
    A = t(74316);
function L(e) {
    let { purchaseType: n, plan: t, premiumSubscription: s, isGift: r, planGroup: l, isPrepaidPaymentSource: a, inReverseTrial: c } = e;
    if (n === d.GZ.ONE_TIME) return r ? N.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : N.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
    if ((i()(null != t, 'Subscription plan must be selected to render SubscriptionReviewButton'), r)) return N.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
    if (c) return N.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
    if ((0, I.PV)(t.id)) {
        if (a) return N.Z.Messages.BILLING_SELECT_PLAN;
        if (null != s) return s.isPaused ? N.Z.Messages.RESUME : (0, _.R4)(s, t.id, l) ? N.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : N.Z.Messages.BILLING_SWITCH_PLAN_CHANGE;
        return (0, I.W_)(null, t);
    }
    return N.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN;
}
function P(e, n) {
    null != e.current && (e.current.scrollIntoView({ behavior: 'smooth' }), n());
}
function R(e) {
    var n;
    let { legalTermsNodeRef: t, invoiceError: r, planError: i, disablePurchase: I, flashLegalTerms: _, isSubmitting: d, premiumSubscription: R, isGift: m, planGroup: S, isPrepaid: U, isTrial: p, makePurchase: O, needsPaymentSource: v, inReverseTrial: C, onNext: h } = e,
        { application: f, selectedPlan: g, hasAcceptedTerms: x, purchaseType: Z, paymentSourceId: B, activeSubscription: b, devShelfFetchState: D } = (0, o.usePaymentContext)(),
        G = L({
            purchaseType: Z,
            plan: g,
            premiumSubscription: R,
            isGift: m,
            planGroup: S,
            isPrepaidPaymentSource: U,
            inReverseTrial: C
        }),
        { analyticsLocations: j } = (0, c.ZP)();
    if (null != r || null != i || I)
        return (0, s.jsx)(l.Button, {
            color: l.Button.Colors.GREEN,
            disabled: !0,
            children: G
        });
    if (v)
        return (0, s.jsx)(l.Tooltip, {
            text: N.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
            children: (e) =>
                (0, s.jsx)(l.Button, {
                    ...e,
                    color: l.Button.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    disabled: !0,
                    children: G
                })
        });
    if ((0, u.yE)(null !== (n = null == f ? void 0 : f.flags) && void 0 !== n ? n : 0, T.udG.EMBEDDED) && D === a.O.LOADING)
        return (0, s.jsx)(l.Tooltip, {
            text: N.Z.Messages.BILLING_LOADING_DEVELOPER_ACTIVITY_SHELF,
            children: (e) =>
                (0, s.jsx)(l.Button, {
                    ...e,
                    color: l.Button.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    disabled: !0,
                    children: G
                })
        });
    else if (p)
        return (0, s.jsxs)(l.ShinyButton, {
            innerClassName: M.innerButton,
            'data-testid': x ? 'purchase' : 'submitButton',
            onClick: x ? O : () => P(t, _),
            color: l.Button.Colors.GREEN,
            submitting: d,
            children: [
                (0, s.jsx)('img', {
                    alt: '',
                    className: M.nitroIcon,
                    src: A
                }),
                G
            ]
        });
    else if (!x)
        return (0, s.jsx)(l.Tooltip, {
            text: N.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: (e) =>
                (0, s.jsx)(l.Button, {
                    ...e,
                    color: l.Button.Colors.GREEN,
                    type: 'submit',
                    onClick: () => P(t, _),
                    'data-testid': 'submitButton',
                    children: G
                })
        });
    else if (C && null != b && null != B)
        return (0, s.jsx)(E.Z, {
            activeSubscription: b,
            onNext: h,
            isSubmitting: d,
            paymentSourceId: B,
            buttonLabel: G,
            analyticsLocations: j
        });
    else
        return (0, s.jsx)(l.Button, {
            'data-testid': 'purchase',
            onClick: O,
            color: l.Button.Colors.GREEN,
            submitting: d,
            children: G
        });
}
