n.d(s, {
    TB: function () {
        return j;
    },
    VY: function () {
        return g;
    },
    ZP: function () {
        return N;
    }
}),
    n(47120),
    n(411104);
var t = n(735250),
    r = n(470079),
    i = n(512722),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    C = n(16084),
    d = n(987209),
    c = n(179118),
    u = n(912788),
    _ = n(509545),
    p = n(55563),
    x = n(74538),
    h = n(741245),
    L = n(474936),
    f = n(981631),
    I = n(689938),
    E = n(977885);
function M(e) {
    var s, n;
    let r,
        { planId: i, startingPremiumSubscriptionPlanId: o, paymentSourceType: C } = e,
        [d, c] = (0, a.Wu)([_.Z], () => [_.Z.get(o), _.Z.get(i)]);
    if ((l()(null != d && null != c, 'Missing startingPlan or newPlan'), (s = o), (n = i), L.Y1.indexOf(s) < L.Y1.indexOf(n)))
        switch (i) {
            case L.Xh.PREMIUM_MONTH_TIER_1:
                (r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1), f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (r = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
                break;
            case L.Xh.PREMIUM_MONTH_TIER_2:
                (r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH), f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (r = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
                break;
            case L.Xh.PREMIUM_YEAR_TIER_1:
                (r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR), f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (r = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
                break;
            case L.Xh.PREMIUM_YEAR_TIER_2:
                (r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({ numFreeGuildSubscriptions: L.cb })), f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (r = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({ numFreeGuildSubscriptions: L.cb }));
                break;
            case L.Xh.PREMIUM_3_MONTH_TIER_2:
            case L.Xh.PREMIUM_6_MONTH_TIER_2:
                r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
                break;
            case L.Xh.PREMIUM_MONTH_TIER_0:
            case L.Xh.PREMIUM_YEAR_TIER_0:
                r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                break;
            default:
                throw Error('Unexpected planId: '.concat(i));
        }
    else if (d.skuId === L.Si.TIER_2 && c.skuId === L.Si.TIER_1) r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else
        switch (c.skuId) {
            case L.Si.TIER_0:
                r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                break;
            case L.Si.TIER_1:
                r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
                break;
            case L.Si.TIER_2:
                r = 1 !== d.intervalCount ? I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
                break;
            default:
                throw Error('Unexpected skuId: '.concat(c.skuId));
        }
    return (0, t.jsx)('div', {
        className: E.text,
        children: r
    });
}
function N(e) {
    let s,
        n,
        { planId: i, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: c, onClose: u, followupSKUInfo: N, isDowngrade: j, hideClose: g, postSuccessGuild: T, paymentSourceType: m } = e,
        { theme: S } = (0, o.useThemeContext)(),
        A = (0, a.e7)([p.Z], () => (null != N ? p.Z.get(N.id) : null));
    r.useEffect(() => {
        if (null == N || null != A) return;
        let { applicationId: e, id: s } = N;
        (0, C.$N)(e, s).catch(f.VqG);
    }, [N, A]);
    let O = (e) => {
        if (e.skuId === L.Si.TIER_0) return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
        if (e.skuId === L.Si.TIER_1) return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
        return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : d ? I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
    };
    if (null != A)
        s = (0, t.jsx)('div', {
            className: E.text,
            children: I.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({ skuName: A.name })
        });
    else if (null != c)
        s = (0, t.jsx)(M, {
            planId: i,
            startingPremiumSubscriptionPlanId: c
        });
    else if (null != T) {
        let e = _.Z.get(i);
        l()(null != e, 'Missing plan'),
            (s = (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)('div', {
                        className: E.text,
                        children: O(e)
                    }),
                    (0, t.jsx)('div', {
                        className: E.text,
                        children: I.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({ guildName: T.name })
                    })
                ]
            }));
    } else {
        let e = _.Z.get(i);
        l()(null != e, 'Missing plan'),
            (s = (0, t.jsx)('div', {
                className: E.text,
                children: O(e)
            }));
    }
    let R = x.ZP.getPremiumType(i);
    return (
        l()(null != R, 'premium type should not be null in purchase confirmation'),
        (n = null != A ? I.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({ skuName: A.name }) : j ? I.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != T ? I.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : I.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON),
        (0, t.jsxs)('div', {
            className: E.confirmation,
            children: [
                (0, t.jsx)(h.C, {
                    className: E.banner,
                    theme: S,
                    premiumType: R,
                    type: f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? h.C.Types.PREMIUM_PAYMENT_STARTED : null != c ? h.C.Types.PREMIUM_UPDATED : h.C.Types.PREMIUM_ACTIVATED
                }),
                s,
                g
                    ? null
                    : (0, t.jsx)(o.Button, {
                          onClick: u,
                          children: n
                      })
            ]
        })
    );
}
function j(e) {
    let { planId: s, onClose: n, halloweenDecoPurchase: r } = e,
        { giftRecipient: i, selectedGiftStyle: o, hasSentMessage: C, giftMessageError: p, isSendingMessage: x } = (0, d.wD)(),
        h = (0, a.e7)([_.Z], () => _.Z.get(s));
    l()(null != h, 'Missing plan');
    let L = (0, a.e7)([u.Z], () => u.Z.getGiftCode(h.skuId));
    return (0, t.jsx)(c.Z, {
        giftCode: L,
        subscriptionPlan: h,
        onClose: n,
        selectedGiftStyle: o,
        hasSentMessage: C,
        giftRecipient: i,
        giftMessageError: p,
        isSendingMessage: x,
        halloweenDecoPurchase: r
    });
}
function g() {
    return (0, t.jsxs)('div', {
        className: E.redirectConfirmation,
        children: [
            (0, t.jsx)(o.Heading, {
                variant: 'heading-xl/bold',
                children: I.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER
            }),
            (0, t.jsxs)('div', {
                className: E.redirectBody,
                children: [
                    (0, t.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: I.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY
                    }),
                    (0, t.jsx)('br', {}),
                    (0, t.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: I.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS
                    })
                ]
            })
        ]
    });
}
