t(411104);
var s = t(735250);
t(470079);
var r = t(442837),
    i = t(858987),
    l = t(78839),
    a = t(122289),
    c = t(63063),
    o = t(74538),
    u = t(937615),
    I = t(296848),
    _ = t(981631),
    E = t(474936),
    T = t(689938),
    d = t(191334);
n.Z = function (e) {
    let n, t, N, M;
    let { subscriptionPlan: A, isGift: L, isEmbeddedIAP: P, renewalInvoice: R, paymentSourceType: m, hide: S, purchaseType: U, productLine: p, basePrice: O, currentSubscription: v } = e,
        C = (0, r.e7)([l.ZP], () => l.ZP.inReverseTrial());
    if (S) return null;
    let h = null == e.planGroup ? [] : e.planGroup;
    if (null != R) {
        let e = o.ZP.getIntervalForInvoice(R);
        (n = e.intervalType), (t = e.intervalCount), (N = (0, u.og)((0, u.T4)(R.total, R.currency), n, t)), (M = (0, u.og)((0, u.T4)(R.subtotal, R.currency), n, t));
    } else null != A && ((n = A.interval), (t = A.intervalCount));
    let f = (0, i.K)({
            purchaseType: U || _.GZQ.SUBSCRIPTION,
            plan: A,
            premiumSubscription: null == v ? null : v,
            isGift: !!L,
            planGroup: h,
            isPrepaidPaymentSource: !1
        }),
        g = '',
        Z = '';
    if (P) {
        if (null != N && (null == R ? void 0 : R.subscriptionPeriodEnd) != null) g = T.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL_V2.format({ subtotalRate: M });
        else
            switch (n) {
                case E.rV.MONTH:
                    g = 1 === t ? T.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY_V2.format({}) : T.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH_V2.format({ intervalCount: t });
                    break;
                case E.rV.YEAR:
                    g = T.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY_V2.format({});
                    break;
                case void 0:
                    (Z = T.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                        primaryText: f,
                        paidURL: _.EYA.PAID_TERMS
                    })),
                        (g = T.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({}));
                    break;
                default:
                    throw Error('Unexpected interval: '.concat(n));
            }
    } else if (U === _.GZQ.ONE_TIME)
        (Z = T.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V3.format({
            primaryText: f,
            paidURL: _.EYA.PAID_TERMS
        })),
            (g = p === _.POd.COLLECTIBLES ? (L ? T.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : T.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT) : T.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT);
    else if (null == A || L)
        switch (
            (L &&
                (Z = T.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                    primaryText: f,
                    paidURL: _.EYA.PAID_TERMS
                })),
            n)
        ) {
            case E.rV.MONTH:
                (g = L ? T.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY), (g = L ? T.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === t ? T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({ intervalCount: t }));
                break;
            case E.rV.YEAR:
                g = L ? T.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                break;
            case void 0:
                g = '';
                break;
            default:
                throw Error('Unexpected interval: '.concat(n));
        }
    else {
        let e;
        let s = (0, i.K)({
            purchaseType: _.GZQ.SUBSCRIPTION,
            plan: A,
            premiumSubscription: null == v ? null : v,
            isGift: !1,
            planGroup: h,
            isPrepaidPaymentSource: !1
        });
        if ((null != O && null != n && null != t && (e = (0, u.og)((0, u.T4)(O.amount, O.currency), n, t)), null == e)) {
            let e = Error('Missing base rate for legal fine print');
            (0, a.q2)(e, { tags: { planId: A.id } });
        }
        g = (null == v ? void 0 : v.isPaused)
            ? T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_RESUME.format({
                  primaryText: s,
                  rate: e,
                  paidURL: _.EYA.PAID_TERMS,
                  contactLink: _.EYA.CONTACT,
                  helpdeskArticle: c.Z.getArticleURL(_.BhN.BILLING)
              })
            : null != v && (0, I.GY)(v, A.id, h)
              ? T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
                    primaryText: s,
                    rate: e,
                    paidURL: _.EYA.PAID_TERMS,
                    contactLink: _.EYA.CONTACT,
                    helpdeskArticle: c.Z.getArticleURL(_.BhN.BILLING)
                })
              : C && p === _.POd.BOOST && null != O
                ? T.Z.Messages.BILLING_BOOST_PURCHASE_IN_REVERSE_TRIAL_LEGAL_COPY.format({
                      price: (0, u.T4)(O.amount, O.currency),
                      paidServiceTermsArticle: _.EYA.PAID_TERMS,
                      contactUsArticle: _.EYA.CONTACT,
                      subscriptionFAQArticle: c.Z.getArticleURL(_.BhN.BILLING)
                  })
                : T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
                      primaryText: s,
                      rate: e,
                      paidURL: _.EYA.PAID_TERMS,
                      contactLink: _.EYA.CONTACT,
                      helpdeskArticle: c.Z.getArticleURL(_.BhN.BILLING)
                  });
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [
            '' !== Z &&
                (0, s.jsxs)('div', {
                    children: [(0, s.jsx)('div', { children: Z }), (0, s.jsx)('div', { className: d.divider })]
                }),
            '' !== g && (0, s.jsx)('div', { children: g }),
            m === _.HeQ.PAYSAFE_CARD &&
                (0, s.jsx)('div', {
                    className: d.paymentSourceNoticeCopy,
                    children: T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                }),
            m === _.HeQ.SOFORT &&
                (0, s.jsxs)('div', {
                    className: d.paymentSourceNoticeCopy,
                    children: [T.Z.Messages.SOFORT_MANDATE_AGREEMENT, ' ']
                })
        ]
    });
};
