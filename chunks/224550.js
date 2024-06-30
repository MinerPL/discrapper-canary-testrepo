a(411104);
var t = a(735250);
a(470079);
var s = a(858987), r = a(122289), l = a(63063), i = a(74538), o = a(937615), c = a(296848), u = a(981631), d = a(474936), _ = a(689938), I = a(665988);
n.Z = function (e) {
    let n, a, E;
    let {
        subscriptionPlan: T,
        isGift: A,
        isEmbeddedIAP: N,
        renewalInvoice: P,
        paymentSourceType: M,
        hide: p,
        purchaseType: R,
        productLine: L,
        basePrice: f,
        currentSubscription: C
    } = e;
    if (p)
        return null;
    let m = null == e.planGroup ? [] : e.planGroup;
    if (null != P) {
        let e = i.ZP.getIntervalForInvoice(P);
        n = e.intervalType, a = e.intervalCount, E = (0, o.og)((0, o.T4)(P.total, P.currency), n, a);
    } else
        null != T && (n = T.interval, a = T.intervalCount);
    let S = (0, s.K)({
            purchaseType: R || u.GZQ.SUBSCRIPTION,
            plan: T,
            premiumSubscription: null == C ? null : C,
            isGift: !!A,
            planGroup: m,
            isPrepaidPaymentSource: !1
        }), b = '', v = '';
    if (N) {
        if (null != E && (null == P ? void 0 : P.subscriptionPeriodEnd) != null)
            b = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
                rate: E,
                renewalDate: P.subscriptionPeriodEnd
            });
        else
            switch (n) {
            case d.rV.MONTH:
                b = 1 === a ? _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({ intervalCount: a });
                break;
            case d.rV.YEAR:
                b = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                break;
            case void 0:
                v = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                    primaryText: S,
                    paidURL: u.EYA.PAID_TERMS
                }), b = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
                break;
            default:
                throw Error('Unexpected interval: '.concat(n));
            }
    } else if (R === u.GZQ.ONE_TIME)
        v = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
            primaryText: S,
            paidURL: u.EYA.PAID_TERMS
        }), b = L === u.POd.COLLECTIBLES ? A ? _.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : _.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT : _.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
    else if (null == T || A)
        switch (A && (v = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                primaryText: S,
                paidURL: u.EYA.PAID_TERMS
            })), n) {
        case d.rV.MONTH:
            b = A ? _.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY, b = A ? _.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === a ? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({ intervalCount: a });
            break;
        case d.rV.YEAR:
            b = A ? _.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
            break;
        case void 0:
            b = '';
            break;
        default:
            throw Error('Unexpected interval: '.concat(n));
        }
    else {
        let e;
        let t = (0, s.K)({
            purchaseType: u.GZQ.SUBSCRIPTION,
            plan: T,
            premiumSubscription: null == C ? null : C,
            isGift: !1,
            planGroup: m,
            isPrepaidPaymentSource: !1
        });
        if (null != f && null != n && null != a && (e = (0, o.og)((0, o.T4)(f.amount, f.currency), n, a)), null == e) {
            let e = Error('Missing base rate for legal fine print');
            (0, r.q2)(e, { tags: { planId: T.id } });
        }
        b = (null == C ? void 0 : C.isPaused) ? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_RESUME.format({
            primaryText: t,
            rate: e,
            paidURL: u.EYA.PAID_TERMS,
            contactLink: u.EYA.CONTACT,
            helpdeskArticle: l.Z.getArticleURL(u.BhN.BILLING)
        }) : null != C && (0, c.GY)(C, T.id, m) ? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
            primaryText: t,
            rate: e,
            paidURL: u.EYA.PAID_TERMS,
            contactLink: u.EYA.CONTACT,
            helpdeskArticle: l.Z.getArticleURL(u.BhN.BILLING)
        }) : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
            primaryText: t,
            rate: e,
            paidURL: u.EYA.PAID_TERMS,
            contactLink: u.EYA.CONTACT,
            helpdeskArticle: l.Z.getArticleURL(u.BhN.BILLING)
        });
    }
    return (0, t.jsxs)(t.Fragment, {
        children: [
            '' !== v && (0, t.jsxs)('div', {
                children: [
                    (0, t.jsx)('div', { children: v }),
                    (0, t.jsx)('div', { className: I.divider })
                ]
            }),
            '' !== b && (0, t.jsx)('div', { children: b }),
            M === u.HeQ.PAYSAFE_CARD && (0, t.jsx)('div', {
                className: I.paymentSourceNoticeCopy,
                children: _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
            }),
            M === u.HeQ.SOFORT && (0, t.jsxs)('div', {
                className: I.paymentSourceNoticeCopy,
                children: [
                    _.Z.Messages.SOFORT_MANDATE_AGREEMENT,
                    ' '
                ]
            })
        ]
    });
};
