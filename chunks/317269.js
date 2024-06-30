t.d(n, {
    TB: function () {
        return E;
    },
    VY: function () {
        return M;
    },
    ZP: function () {
        return L;
    }
}), t(47120), t(411104);
var i = t(735250), r = t(470079), o = t(512722), a = t.n(o), s = t(442837), l = t(481060), d = t(16084), c = t(987209), C = t(179118), u = t(912788), _ = t(509545), p = t(55563), f = t(74538), x = t(741245), h = t(474936), b = t(981631), g = t(689938), m = t(268279);
function I(e) {
    var n, t;
    let r, {
            planId: o,
            startingPremiumSubscriptionPlanId: l,
            paymentSourceType: d
        } = e, [c, C] = (0, s.Wu)([_.Z], () => [
            _.Z.get(l),
            _.Z.get(o)
        ]);
    if (a()(null != c && null != C, 'Missing startingPlan or newPlan'), n = l, t = o, h.Y1.indexOf(n) < h.Y1.indexOf(t))
        switch (o) {
        case h.Xh.PREMIUM_MONTH_TIER_1:
            r = g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, b.X7u.has(null != d ? d : b.HeQ.UNKNOWN) && (r = g.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
            break;
        case h.Xh.PREMIUM_MONTH_TIER_2:
            r = g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, b.X7u.has(null != d ? d : b.HeQ.UNKNOWN) && (r = g.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
            break;
        case h.Xh.PREMIUM_YEAR_TIER_1:
            r = g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, b.X7u.has(null != d ? d : b.HeQ.UNKNOWN) && (r = g.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
            break;
        case h.Xh.PREMIUM_YEAR_TIER_2:
            r = g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({ numFreeGuildSubscriptions: h.cb }), b.X7u.has(null != d ? d : b.HeQ.UNKNOWN) && (r = g.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({ numFreeGuildSubscriptions: h.cb }));
            break;
        case h.Xh.PREMIUM_3_MONTH_TIER_2:
        case h.Xh.PREMIUM_6_MONTH_TIER_2:
            r = g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
            break;
        case h.Xh.PREMIUM_MONTH_TIER_0:
        case h.Xh.PREMIUM_YEAR_TIER_0:
            r = g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
            break;
        default:
            throw Error('Unexpected planId: '.concat(o));
        }
    else if (c.skuId === h.Si.TIER_2 && C.skuId === h.Si.TIER_1)
        r = g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else
        switch (C.skuId) {
        case h.Si.TIER_0:
            r = g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
            break;
        case h.Si.TIER_1:
            r = g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
            break;
        case h.Si.TIER_2:
            r = 1 !== c.intervalCount ? g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
            break;
        default:
            throw Error('Unexpected skuId: '.concat(C.skuId));
        }
    return (0, i.jsx)('div', {
        className: m.text,
        children: r
    });
}
function L(e) {
    let n, t, {
            planId: o,
            enableNoPaymentTrial: c,
            startingPremiumSubscriptionPlanId: C,
            onClose: u,
            followupSKUInfo: L,
            isDowngrade: E,
            hideClose: M,
            postSuccessGuild: T,
            paymentSourceType: N
        } = e, {theme: S} = (0, l.useThemeContext)(), j = (0, s.e7)([p.Z], () => null != L ? p.Z.get(L.id) : null);
    r.useEffect(() => {
        if (null == L || null != j)
            return;
        let {
            applicationId: e,
            id: n
        } = L;
        (0, d.$N)(e, n).catch(b.VqG);
    }, [
        L,
        j
    ]);
    let A = e => {
        if (e.skuId === h.Si.TIER_0)
            return b.X7u.has(null != N ? N : b.HeQ.UNKNOWN) ? g.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
        if (e.skuId === h.Si.TIER_1)
            return b.X7u.has(null != N ? N : b.HeQ.UNKNOWN) ? g.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
        return b.X7u.has(null != N ? N : b.HeQ.UNKNOWN) ? g.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : c ? g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : g.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
    };
    if (null != j)
        n = (0, i.jsx)('div', {
            className: m.text,
            children: g.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({ skuName: j.name })
        });
    else if (null != C)
        n = (0, i.jsx)(I, {
            planId: o,
            startingPremiumSubscriptionPlanId: C
        });
    else if (null != T) {
        let e = _.Z.get(o);
        a()(null != e, 'Missing plan'), n = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: m.text,
                    children: A(e)
                }),
                (0, i.jsx)('div', {
                    className: m.text,
                    children: g.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({ guildName: T.name })
                })
            ]
        });
    } else {
        let e = _.Z.get(o);
        a()(null != e, 'Missing plan'), n = (0, i.jsx)('div', {
            className: m.text,
            children: A(e)
        });
    }
    let O = f.ZP.getPremiumType(o);
    return a()(null != O, 'premium type should not be null in purchase confirmation'), t = null != j ? g.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({ skuName: j.name }) : E ? g.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != T ? g.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : g.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, i.jsxs)('div', {
        className: m.confirmation,
        children: [
            (0, i.jsx)(x.C, {
                className: m.banner,
                theme: S,
                premiumType: O,
                type: b.X7u.has(null != N ? N : b.HeQ.UNKNOWN) ? x.C.Types.PREMIUM_PAYMENT_STARTED : null != C ? x.C.Types.PREMIUM_UPDATED : x.C.Types.PREMIUM_ACTIVATED
            }),
            n,
            M ? null : (0, i.jsx)(l.Button, {
                onClick: u,
                children: t
            })
        ]
    });
}
function E(e) {
    let {
            planId: n,
            onClose: t
        } = e, {
            giftRecipient: r,
            selectedGiftStyle: o,
            hasSentMessage: l,
            giftMessageError: d,
            isSendingMessage: p
        } = (0, c.wD)(), f = (0, s.e7)([_.Z], () => _.Z.get(n));
    a()(null != f, 'Missing plan');
    let x = (0, s.e7)([u.Z], () => u.Z.getGiftCode(f.skuId));
    return (0, i.jsx)(C.Z, {
        giftCode: x,
        subscriptionPlan: f,
        onClose: t,
        selectedGiftStyle: o,
        hasSentMessage: l,
        giftRecipient: r,
        giftMessageError: d,
        isSendingMessage: p
    });
}
function M() {
    return (0, i.jsxs)('div', {
        className: m.redirectConfirmation,
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-xl/bold',
                children: g.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER
            }),
            (0, i.jsxs)('div', {
                className: m.redirectBody,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: g.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY
                    }),
                    (0, i.jsx)('br', {}),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: g.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS
                    })
                ]
            })
        ]
    });
}
