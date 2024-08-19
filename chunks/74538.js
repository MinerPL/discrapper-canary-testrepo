n.d(t, {
    Af: function () {
        return F;
    },
    Ap: function () {
        return ed;
    },
    CY: function () {
        return V;
    },
    Gf: function () {
        return z;
    },
    I5: function () {
        return y.I5;
    },
    JE: function () {
        return ev;
    },
    JP: function () {
        return Y;
    },
    L7: function () {
        return j;
    },
    M5: function () {
        return y.M5;
    },
    MY: function () {
        return eR;
    },
    PK: function () {
        return eh;
    },
    PV: function () {
        return eu;
    },
    Px: function () {
        return $;
    },
    Qo: function () {
        return eO;
    },
    Rd: function () {
        return K;
    },
    Rt: function () {
        return eA;
    },
    T4: function () {
        return Z;
    },
    U2: function () {
        return i;
    },
    Ue: function () {
        return eC;
    },
    V7: function () {
        return en;
    },
    W_: function () {
        return eT;
    },
    Wz: function () {
        return ex;
    },
    XK: function () {
        return eD;
    },
    Z8: function () {
        return el;
    },
    Zx: function () {
        return eL;
    },
    _O: function () {
        return eG;
    },
    a5: function () {
        return eS;
    },
    aS: function () {
        return H;
    },
    al: function () {
        return ey;
    },
    aq: function () {
        return Q;
    },
    bt: function () {
        return eE;
    },
    dn: function () {
        return eg;
    },
    eP: function () {
        return W;
    },
    gB: function () {
        return eb;
    },
    gq: function () {
        return X;
    },
    gy: function () {
        return ef;
    },
    he: function () {
        return ew;
    },
    if: function () {
        return eN;
    },
    jP: function () {
        return q;
    },
    k5: function () {
        return eU;
    },
    lY: function () {
        return ec;
    },
    qV: function () {
        return ee;
    },
    uV: function () {
        return ea;
    },
    uZ: function () {
        return eo;
    },
    v6: function () {
        return e_;
    },
    v9: function () {
        return eM;
    },
    yd: function () {
        return y.yd;
    },
    zL: function () {
        return et;
    },
    zV: function () {
        return em;
    }
}),
    n(411104),
    n(47120),
    n(733860),
    n(724458),
    n(653041);
var r,
    i,
    a,
    s,
    o = n(512722),
    l = n.n(o),
    u = n(913527),
    c = n.n(u),
    d = n(848246);
n(442837);
var _ = n(782568),
    E = n(710845),
    f = n(114064),
    h = n(803905),
    p = n(439017),
    m = n(301766),
    I = n(594174),
    T = n(351402),
    g = n(853872),
    S = n(509545),
    A = n(78839),
    N = n(122289),
    v = n(55935),
    O = n(424218),
    R = n(358085),
    C = n(380684),
    y = n(111361),
    D = n(74538),
    L = n(937615),
    b = n(981631),
    M = n(334431),
    P = n(474936),
    U = n(231338),
    w = n(689938);
let x = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    G = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    k = new E.Z('PremiumUtils.tsx'),
    B = {
        [P.Xh.NONE_MONTH]: [P.Xh.NONE_YEAR, P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_MONTH_TIER_1],
        [P.Xh.NONE_YEAR]: [P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_MONTH_TIER_1],
        [P.Xh.PREMIUM_MONTH_TIER_0]: [P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_MONTH_TIER_1, P.Xh.PREMIUM_YEAR_TIER_0],
        [P.Xh.PREMIUM_YEAR_TIER_0]: [P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_MONTH_TIER_1],
        [P.Xh.PREMIUM_MONTH_TIER_1]: [P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1],
        [P.Xh.PREMIUM_YEAR_TIER_1]: [P.Xh.PREMIUM_YEAR_TIER_2],
        [P.Xh.PREMIUM_MONTH_TIER_2]: [P.Xh.PREMIUM_YEAR_TIER_2],
        [P.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [P.Xh.NONE_MONTH, P.Xh.NONE_YEAR, P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_MONTH_TIER_1, P.Xh.PREMIUM_YEAR_TIER_0, P.Xh.PREMIUM_MONTH_TIER_0]
    };
function F(e) {
    return e.items.find((e) => P.dJ.has(e.planId));
}
function V(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null !== (t = g.Z.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
        a = A.ZP.getPremiumTypeSubscription();
    return null != a && null != a.paymentSourceId && (i = a.paymentSourceId), H(e, n, r, { paymentSourceId: i });
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: i, currency: a } = r;
    if (null != S.Z.get(e)) {
        let r = b.tuJ.DEFAULT;
        n ? (r = b.tuJ.GIFT) : t && (r = b.tuJ.PREMIUM_TIER_1);
        let s = (function (e) {
            let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: b.tuJ.DEFAULT },
                i = Z(e, {
                    paymentSourceId: t,
                    purchaseType: n
                });
            return (0 === i.length && k.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r) : i[0];
        })(e, {
            paymentSourceId: i,
            purchaseType: r,
            currency: a
        });
        if (null == s) {
            let t = Error("Couldn't find price");
            throw (
                ((0, N.q2)(t, {
                    extra: { paymentSourceId: i },
                    tags: {
                        purchaseType: r.toString(),
                        planId: e,
                        currency: null != a ? a : 'unknown'
                    }
                }),
                t)
            );
        }
        return s;
    }
    let s = Error('Plan not found');
    throw (
        ((0, N.q2)(s, {
            tags: {
                planId: e,
                currency: null != a ? a : 'unknown'
            },
            extra: {
                ...r,
                isGift: n
            }
        }),
        s)
    );
}
((a = r || (r = {})).BUNDLE = 'bundle'), (a.TIER_0 = 'tier_0'), (a.TIER_1 = 'tier_1'), (a.TIER_2 = 'tier_2'), (a.PREMIUM_GUILD = 'premium_guild'), ((s = i || (i = {})).MID = 'mid'), (s.HIGH = 'high');
function Z(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: b.tuJ.DEFAULT },
        r = (function (e, t) {
            let n = S.Z.get(e);
            if (null == n) {
                let n = Error('Plan not found');
                throw (
                    ((0, N.q2)(n, {
                        tags: {
                            planId: e,
                            purchaseType: t.toString()
                        }
                    }),
                    n)
                );
            }
            if (null == n.prices) throw Error('No prices returned for '.concat(e, ', is your user in the experiment?'));
            let r = n.prices[t];
            if (null == r) throw (k.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
            return r;
        })(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            k.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), k.info('prices: '.concat(i));
            let a = Error('Missing prices for payment source on subscription plan');
            (0, N.q2)(a, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e
                }
            });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        k.info('countryPrices: '.concat(JSON.stringify(r.countryPrices)));
        let t = Error('Missing prices for country');
        throw (
            ((0, N.q2)(t, {
                tags: {
                    countryCode: r.countryPrices.countryCode,
                    planId: e
                }
            }),
            t)
        );
    }
    return r.countryPrices.prices;
}
function Y(e) {
    switch (e) {
        case P.EA.MONTH:
            return w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
        case P.EA.YEAR:
            return w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
        case P.EA.DAY:
        case P.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function j(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : P.p9.TIER_2;
    if (t || n)
        switch (e) {
            case P.rV.MONTH:
                let s = (a === P.p9.TIER_0 ? w.Z.Messages.BASIC_GIFT_DURATION : w.Z.Messages.GIFT_DURATION).format({ timeInterval: w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH });
                return i ? s : w.Z.Messages.PAYMENT_MODAL_ONE_MONTH;
            case P.rV.YEAR:
                let o = (a === P.p9.TIER_0 ? w.Z.Messages.BASIC_GIFT_DURATION : w.Z.Messages.GIFT_DURATION).format({ timeInterval: w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR });
                return i ? o : w.Z.Messages.PAYMENT_MODAL_ONE_YEAR;
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case P.rV.MONTH:
            if (1 !== r) return w.Z.Messages.MULTI_MONTHS.format({ intervalCount: r });
            return w.Z.Messages.MONTHLY;
        case P.rV.YEAR:
            return w.Z.Messages.YEARLY;
        default:
            throw Error('Unexpected interval');
    }
}
function W(e) {
    switch (e) {
        case P.rV.MONTH:
            return w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
        case P.rV.YEAR:
            return w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
        default:
            throw Error('Unexpected interval');
    }
}
function K(e) {
    let t = P.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, N.q2)(n, { tags: { planId: e } }), n);
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
            return t ? w.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({ duration: r }) : n ? w.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : w.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0;
        case P.Xh.PREMIUM_YEAR_TIER_0:
            return t ? w.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({ duration: r }) : n ? w.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : w.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0;
        case P.Xh.PREMIUM_MONTH_TIER_1:
            return n ? w.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : w.Z.Messages.PREMIUM_PLAN_MONTH_TIER_1;
        case P.Xh.PREMIUM_YEAR_TIER_1:
            return n ? w.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : w.Z.Messages.PREMIUM_PLAN_YEAR_TIER_1;
        case P.Xh.PREMIUM_MONTH_TIER_2:
            return t ? w.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({ duration: r }) : n ? w.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : w.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2;
        case P.Xh.PREMIUM_YEAR_TIER_2:
            return t ? w.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({ duration: r }) : n ? w.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : w.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2;
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
            return w.Z.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
            return w.Z.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
        case P.Xh.PREMIUM_MONTH_GUILD:
            return n ? w.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : w.Z.Messages.PREMIUM_GUILD_PLAN_MONTH;
        case P.Xh.PREMIUM_YEAR_GUILD:
            return n ? w.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : w.Z.Messages.PREMIUM_GUILD_PLAN_YEAR;
        case P.Xh.PREMIUM_3_MONTH_GUILD:
            return w.Z.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
        case P.Xh.PREMIUM_6_MONTH_GUILD:
            return w.Z.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
        case P.Xh.PREMIUM_MONTH_LEGACY:
            return w.Z.Messages.PREMIUM_PLAN_MONTH;
        case P.Xh.PREMIUM_YEAR_LEGACY:
            return w.Z.Messages.PREMIUM_PLAN_YEAR;
    }
    let i = Error('Unsupported plan');
    throw ((0, N.q2)(i, { tags: { planId: e } }), i);
}
function q(e) {
    switch (e) {
        case P.Si.TIER_0:
            return w.Z.Messages.PREMIUM_TIER_0;
        case P.Si.TIER_1:
            return w.Z.Messages.PREMIUM_TIER_1;
        case P.Si.TIER_2:
            return w.Z.Messages.PREMIUM_TIER_2;
    }
    let t = Error('Unsupported sku');
    throw ((0, N.q2)(t, { tags: { skuId: e } }), t);
}
function Q(e) {
    switch (e) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
        case P.Xh.PREMIUM_YEAR_TIER_0:
            return w.Z.Messages.PREMIUM_TIER_0;
        case P.Xh.PREMIUM_MONTH_TIER_1:
        case P.Xh.PREMIUM_YEAR_TIER_1:
            return w.Z.Messages.PREMIUM_TIER_1;
        case P.Xh.PREMIUM_MONTH_TIER_2:
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
        case P.Xh.PREMIUM_YEAR_TIER_2:
            return w.Z.Messages.PREMIUM_TIER_2;
    }
    let t = Error('Unsupported plan');
    throw ((0, N.q2)(t, { tags: { planId: e } }), t);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
        case P.Xh.PREMIUM_YEAR_TIER_0:
            return t ? 'Basic' : 'Nitro Basic';
        case P.Xh.PREMIUM_MONTH_TIER_1:
        case P.Xh.PREMIUM_YEAR_TIER_1:
            return t ? 'Classic' : 'Nitro Classic';
        case P.Xh.PREMIUM_MONTH_TIER_2:
        case P.Xh.PREMIUM_YEAR_TIER_2:
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
            return 'Nitro';
    }
    let n = Error('Unsupported plan');
    throw ((0, N.q2)(n, { tags: { planId: e } }), n);
}
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case P.p9.TIER_0:
            return t ? 'Basic' : w.Z.Messages.PREMIUM_TIER_0;
        case P.p9.TIER_1:
            return t ? 'Classic' : w.Z.Messages.PREMIUM_TIER_1;
        case P.p9.TIER_2:
            return w.Z.Messages.PREMIUM_TIER_2;
    }
}
function J(e) {
    var t, n, r, i, a, s, o, l, u, d;
    let { subscription: E, planId: f, price: h, includePremiumGuilds: p, hasDiscountApplied: m, activeDiscountInfo: T, renewalInvoicePreview: g } = e,
        S = P.GP[f],
        A = D.ZP.formatPriceString(D.ZP.getDefaultPrice(S.id), S.interval),
        N = ep(E) || (null == E.paymentSourceId && !E.isPurchasedExternally && !(null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium())),
        O = null != h,
        R = E.status === b.O0b.UNPAID && null !== E.latestInvoice && (null === (n = E.latestInvoice) || void 0 === n ? void 0 : n.status) === b.hUK.OPEN,
        C = N ? b.O0b.CANCELED : R ? b.O0b.UNPAID : E.status,
        y = null === (a = null !== (i = null == g ? void 0 : g.taxInclusive) && void 0 !== i ? i : null === (r = E.latestInvoice) || void 0 === r ? void 0 : r.taxInclusive) || void 0 === a || a,
        L = P.cb + (p ? ea(E.additionalPlans) : 0);
    switch (f) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
        case P.Xh.PREMIUM_YEAR_TIER_0:
            switch (C) {
                case b.O0b.CANCELED:
                    return O ? (y ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({ price: h }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({ price: h })) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
                case b.O0b.ACCOUNT_HOLD:
                    return O ? (y ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({ price: h }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({ price: h })) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
                case b.O0b.UNPAID:
                    return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
                case b.O0b.PAUSE_PENDING:
                    let M = null != E.pauseEndsAt ? c()(E.pauseEndsAt).diff(E.currentPeriodEnd, 'days') : null;
                    return null != M
                        ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                              pauseDate: E.currentPeriodEnd,
                              pauseDuration: M
                          })
                        : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: E.currentPeriodEnd });
                case b.O0b.PAUSED:
                    return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: E.pauseEndsAt });
                case b.O0b.PAST_DUE:
                    return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
                        endDate: (0, v.vc)(ec(E).expiresDate, 'LL'),
                        onClick: () => {
                            (0, _.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return O ? (y ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({ price: h }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({ price: h })) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE;
            }
        case P.Xh.PREMIUM_MONTH_TIER_1:
        case P.Xh.PREMIUM_YEAR_TIER_1:
            switch (C) {
                case b.O0b.CANCELED:
                    return O ? (y ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({ price: h }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({ price: h })) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
                case b.O0b.ACCOUNT_HOLD:
                    return O ? (y ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({ price: h }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({ price: h })) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
                case b.O0b.UNPAID:
                    return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
                case b.O0b.PAUSE_PENDING:
                    let U = null != E.pauseEndsAt ? c()(E.pauseEndsAt).diff(E.currentPeriodEnd, 'days') : null;
                    return null != U
                        ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                              pauseDate: E.currentPeriodEnd,
                              pauseDuration: U
                          })
                        : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: E.currentPeriodEnd });
                case b.O0b.PAUSED:
                    return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: E.pauseEndsAt });
                case b.O0b.PAST_DUE:
                    return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
                        endDate: (0, v.vc)(ec(E).expiresDate, 'LL'),
                        onClick: () => {
                            (0, _.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return O ? (y ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({ price: h }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({ price: h })) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE;
            }
        case P.Xh.PREMIUM_MONTH_TIER_2:
        case P.Xh.PREMIUM_YEAR_TIER_2:
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (C) {
                case b.O0b.CANCELED:
                    return O
                        ? y
                            ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
                                  price: h,
                                  num: L
                              })
                            : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                                  price: h,
                                  num: L
                              })
                        : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({ num: L });
                case b.O0b.ACCOUNT_HOLD:
                    return O
                        ? y
                            ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
                                  price: h,
                                  num: L
                              })
                            : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                                  price: h,
                                  num: L
                              })
                        : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({ num: L });
                case b.O0b.UNPAID:
                    return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({ num: L });
                case b.O0b.PAUSE_PENDING:
                    let x = null != E.pauseEndsAt ? c()(E.pauseEndsAt).diff(E.currentPeriodEnd, 'days') : null;
                    return null != x
                        ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                              pauseDate: E.currentPeriodEnd,
                              pauseDuration: x
                          })
                        : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: E.currentPeriodEnd });
                case b.O0b.PAUSED:
                    return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: E.pauseEndsAt });
                case b.O0b.BILLING_RETRY:
                    return w.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO.format({ endDate: c()(E.currentPeriodStart).add(P.A5, 'days') });
                case b.O0b.PAST_DUE:
                    return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
                        endDate: (0, v.vc)(ec(E).expiresDate, 'LL'),
                        onClick: () => {
                            (0, _.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return m
                        ? f === P.Xh.PREMIUM_YEAR_TIER_2
                            ? w.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                                  percent: null !== (s = null == T ? void 0 : T.percentage) && void 0 !== s ? s : P.Bo,
                                  regularPrice: A
                              })
                            : y
                              ? w.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                                    percent: null !== (o = null == T ? void 0 : T.percentage) && void 0 !== o ? o : P.M_,
                                    regularPrice: A,
                                    numMonths: null !== (l = null == T ? void 0 : T.duration) && void 0 !== l ? l : P.rt
                                })
                              : w.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
                                    percent: null !== (u = null == T ? void 0 : T.percentage) && void 0 !== u ? u : P.M_,
                                    regularPrice: A,
                                    numMonths: null !== (d = null == T ? void 0 : T.duration) && void 0 !== d ? d : P.rt
                                })
                        : O
                          ? y
                              ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
                                    price: h,
                                    num: L
                                })
                              : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
                                    price: h,
                                    num: L
                                })
                          : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({ num: L });
            }
        default:
            throw Error('Invalid planId '.concat(f));
    }
}
function ee(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: i = !1, hasDiscountApplied: a = !1, activeDiscountInfo: s } = e,
        o = S.Z.get(r);
    return (
        l()(null != o, 'Missing plan'),
        J({
            subscription: n,
            planId: o.id,
            price: (function (e, t, n) {
                let r = e.invoiceItems.find((e) => {
                        let { subscriptionPlanId: t } = e;
                        return t === n.id;
                    }),
                    i =
                        null == r
                            ? H(n.id, !1, !1, {
                                  paymentSourceId: t.paymentSourceId,
                                  currency: t.currency
                              }).amount
                            : r.amount;
                return (0, L.og)((0, L.T4)(i, e.currency), n.interval, n.intervalCount);
            })(t, n, o),
            includePremiumGuilds: i,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoicePreview: t
        })
    );
}
function et(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, m.Q0)(t) ? null : z(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return P.Z1.has(t);
                  }),
        a = (null == i ? void 0 : i.planId) === P.Xh.PREMIUM_MONTH_GUILD ? w.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == i ? void 0 : i.planId) === P.Xh.PREMIUM_YEAR_GUILD ? w.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null,
        s = null == a ? void 0 : a.format({ num: null == i ? void 0 : i.quantity });
    if (null != r && null != s)
        return w.Z.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
            premiumDescription: r,
            premiumGuildDescription: s
        });
    if (null != r) return r;
    if (null != s) return s;
    else throw Error('Subscription without premium or premium guild subscription');
}
function en(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, isGift: a, isEligibleForTrial: s, defaultPlanId: o, defaultToMonthlyPlan: l } = e;
    if (null == t || !n) return [];
    let u = void 0 !== o && t === P.GP[o].skuId ? o : void 0;
    void 0 === u && l && !a && (u = P.IW[t]), s && !a && (void 0 === o || (l && P.No.has(o))) && p.k.trackExposure({ location: 'de805e_1' });
    let c = [];
    switch (t) {
        case P.Si.TIER_0:
            c = [P.Xh.PREMIUM_YEAR_TIER_0, P.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case P.Si.TIER_1:
            c = [P.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case P.Si.TIER_2:
            let d = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (P.o4.has(e)) {
                    let t = P.GP[e];
                    d = [...P.o4].filter((e) => {
                        let n = P.GP[e];
                        return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === P.Si.TIER_2;
                    });
                } else d = [];
            }
            c = [P.Xh.PREMIUM_YEAR_TIER_2, ...d, P.Xh.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error('Unexpected SKU: '.concat(t));
    }
    if (void 0 !== u) {
        let e = c.indexOf(u);
        c.splice(e, 1), c.unshift(u);
    }
    return c;
}
function er(e) {
    let t = P.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, N.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function ei(e) {
    var t;
    return null == e ? B.ALL : null !== (t = B[e]) && void 0 !== t ? t : [];
}
function ea(e) {
    let t = S.Z.getPlanIdsForSkus([ex(P.Si.GUILD)]);
    l()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let es = new Set([P.Xh.NONE_MONTH, P.Xh.NONE_3_MONTH, P.Xh.NONE_6_MONTH, P.Xh.NONE_YEAR, P.Xh.PREMIUM_MONTH_TIER_0, P.Xh.PREMIUM_MONTH_TIER_1, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_0, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_3_MONTH_TIER_2, P.Xh.PREMIUM_6_MONTH_TIER_2]);
function eo(e) {
    return es.has(e);
}
function el(e) {
    return P.Z1.has(e);
}
function eu(e) {
    return eo(e) || el(e);
}
function ec(e) {
    var t, n, r, i, a;
    if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
        let t = c()(e.metadata.apple_grace_period_expires_date);
        return {
            days: c().duration(t.diff(e.currentPeriodStart)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_original_expires_date) != null) {
        let t = c()(e.metadata.google_grace_period_expires_date),
            n = c()(e.metadata.google_original_expires_date);
        return {
            days: c().duration(t.diff(n)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? P.$7 : P.Ue;
        return {
            days: t,
            expiresDate: c()(e.currentPeriodStart).add(t, 'days')
        };
    }
    if ((null === (i = e.metadata) || void 0 === i ? void 0 : i.grace_period_expires_date) != null)
        return {
            days: c()(null === (a = e.metadata) || void 0 === a ? void 0 : a.grace_period_expires_date).diff(e.currentPeriodStart, 'days'),
            expiresDate: c()(e.metadata.grace_period_expires_date)
        };
    {
        let t = null == e.paymentSourceId ? P.UA : P.zp;
        return {
            days: t,
            expiresDate: c()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function ed(e) {
    if (null == e) return !1;
    let t = g.Z.getPaymentSource(e);
    return null != t && U.Uk.has(t.type);
}
function e_(e) {
    return e.isPurchasedExternally
        ? e.status === b.O0b.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: r } = e,
                  i = ea(n);
              return 0 === (null != t ? ea(t.additionalPlans) : null) && 0 !== i ? b.O0b.CANCELED : r;
          })(e) === b.O0b.CANCELED;
}
function eE(e) {
    var t, n, r;
    let { subscription: i, user: a, price: s, renewalInvoicePreview: o } = e,
        { planId: u, additionalPlans: c } = i,
        d = S.Z.get(u);
    l()(null != d, 'Missing plan');
    let _ = ea(c),
        E = eI(i.planId, i.paymentSourceId, i.currency, a).amount * _;
    if (null != o) {
        let e = o.invoiceItems.find((e) => P.Z1.has(e.subscriptionPlanId));
        null != e && (E = e.amount);
    }
    s = null != s ? s : (0, L.T4)(E, i.currency);
    let f = null === (r = null !== (n = null == o ? void 0 : o.taxInclusive) && void 0 !== n ? n : null === (t = i.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === r || r;
    if (e_(i))
        return i.isPurchasedViaGoogle
            ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({ quantity: _ })
            : f
              ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
                    quantity: _,
                    rate: (0, L.og)(s, d.interval, d.intervalCount)
                })
              : w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                    quantity: _,
                    rate: (0, L.og)(s, d.interval, d.intervalCount)
                });
    switch (i.status) {
        case b.O0b.ACCOUNT_HOLD:
            return i.isPurchasedViaGoogle
                ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
                      quantity: _,
                      boostQuantity: _
                  })
                : f
                  ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, L.og)(s, d.interval, d.intervalCount)
                    })
                  : w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, L.og)(s, d.interval, d.intervalCount)
                    });
        case b.O0b.PAUSE_PENDING:
        case b.O0b.PAUSED:
            return w.Z.Messages.GUILD_BOOSTING_DISABLED_HEADER;
        default:
            return i.isPurchasedViaGoogle
                ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({ quantity: _ })
                : f
                  ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
                        quantity: _,
                        rate: (0, L.og)(s, d.interval, d.intervalCount)
                    })
                  : w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
                        quantity: _,
                        rate: (0, L.og)(s, d.interval, d.intervalCount)
                    });
    }
}
function ef(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? H(e.id, !1, r, t) : V(e.id, !1, r),
        a = (0, L.T4)(i.amount, i.currency);
    return e.currency !== U.pK.USD && !0 === n && (a = a.concat('*')), a;
}
function eh(e, t, n) {
    let r = ef(e, t, n);
    return (0, L.og)(r, e.interval, e.intervalCount);
}
function ep(e) {
    let { status: t, renewalMutations: n } = e;
    return t === b.O0b.CANCELED || (null != n && (0, m.Q0)(n.planId) && !e.isPurchasedExternally);
}
function em(e) {
    return e === b.O0b.PAST_DUE || e === b.O0b.ACCOUNT_HOLD || e === b.O0b.BILLING_RETRY;
}
function eI(e, t, n, r) {
    let i =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n
                  }
                : {
                      country: T.Z.ipCountryCodeWithFallback,
                      currency: n
                  },
        a = S.Z.get(e);
    if (null == a) {
        let t = Error('Unsupported plan');
        throw ((0, N.q2)(t, { tags: { planId: e } }), t);
    }
    let s = S.Z.getForSkuAndInterval(ex(P.Si.GUILD), a.interval, a.intervalCount);
    if (null == s) {
        let t = Error('Unsupported plan');
        throw ((0, N.q2)(t, { tags: { planId: e } }), t);
    }
    return H(s.id, (0, y.I5)(r), !1, i);
}
function eT(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case P.Xh.PREMIUM_MONTH_TIER_0:
                return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
            case P.Xh.PREMIUM_YEAR_TIER_0:
                return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
            case P.Xh.PREMIUM_MONTH_TIER_1:
                return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
            case P.Xh.PREMIUM_YEAR_TIER_1:
                return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
            case P.Xh.PREMIUM_MONTH_TIER_2:
                return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
            case P.Xh.PREMIUM_YEAR_TIER_2:
                return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2;
        }
    switch (r) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
            return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
        case P.Xh.PREMIUM_YEAR_TIER_0:
            return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
        case P.Xh.PREMIUM_MONTH_TIER_1:
            return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
        case P.Xh.PREMIUM_YEAR_TIER_1:
            return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
        case P.Xh.PREMIUM_MONTH_TIER_2:
            return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
        case P.Xh.PREMIUM_YEAR_TIER_2:
            return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
            return w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({ intervalCount: t.intervalCount });
        case P.Xh.NONE_MONTH:
        case P.Xh.NONE_YEAR:
        case P.Xh.NONE_3_MONTH:
        case P.Xh.NONE_6_MONTH:
        case P.Xh.PREMIUM_MONTH_GUILD:
        case P.Xh.PREMIUM_YEAR_GUILD:
        case P.Xh.PREMIUM_3_MONTH_GUILD:
        case P.Xh.PREMIUM_6_MONTH_GUILD:
            return w.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT;
    }
    let i = Error('User is purchasing an unsupported plan');
    throw ((0, N.q2)(i, { tags: { planId: r } }), i);
}
function eg(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = S.Z.get(t);
    return (
        l()(null != n, 'Missing subscriptionPlan'),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    );
}
function eS(e) {
    let { intervalType: t = P.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case P.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({ weeks: n / 7 }) : w.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({ weeks: n / 7 });
            return r ? w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({ days: n }) : w.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({ days: n });
        case P.rV.MONTH:
            return r ? w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({ months: n }) : w.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({ months: n });
        case P.rV.YEAR:
            return r ? w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({ years: n }) : w.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({ years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eA(e) {
    let { intervalType: t = P.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case P.rV.DAY:
            if (n >= 7 && n % 7 == 0) return w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({ weeks: n / 7 });
            return w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({ days: n });
        case P.rV.MONTH:
            return w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({ months: n });
        case P.rV.YEAR:
            return w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({ years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eN(e) {
    let { intervalType: t = P.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case P.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? w.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({ weeks: n / 7 }) : w.Z.Messages.DURATION_WEEKS.format({ weeks: n / 7 });
            return r ? w.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: n }) : w.Z.Messages.DURATION_DAYS.format({ days: n });
        case P.rV.MONTH:
            return r ? w.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({ months: n }) : w.Z.Messages.DURATION_MONTHS.format({ months: n });
        case P.rV.YEAR:
            return r ? w.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: n }) : w.Z.Messages.DURATION_YEARS.format({ years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function ev(e, t) {
    switch (e) {
        case b.gg$.APPLE_PARTNER:
        case b.gg$.APPLE:
            return x[t];
        case b.gg$.GOOGLE:
            return G[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eO(e, t) {
    return (0, y.I5)(e) || em(null == t ? void 0 : t.status);
}
function eR(e, t) {
    var n, r;
    let i = [],
        a = (null !== (r = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== r ? r : e.items).find((e) => P.dJ.has(e.planId));
    return (
        null != a && i.push(a),
        i.push(...t),
        i.map((t) => {
            for (let n of e.items)
                if (t.planId === n.planId)
                    return {
                        ...n,
                        ...t
                    };
            return t;
        })
    );
}
function eC(e) {
    return e.filter((e) => !P.dJ.has(e.planId));
}
function ey(e, t, n, r) {
    var i, a;
    l()(r.has(t), 'Expected planId in group');
    let s = !1,
        o = (null !== (a = null === (i = e.renewalMutations) || void 0 === i ? void 0 : i.items) && void 0 !== a ? a : e.items).map((e) =>
            r.has(e.planId)
                ? ((s = !0),
                  {
                      ...e,
                      quantity: n,
                      planId: t
                  })
                : e
        );
    if (!s) {
        let r = {
                planId: t,
                quantity: n
            },
            i = e.items.find((e) => e.planId === t);
        null != i && (r.id = i.id), o.push(r);
    }
    return o.filter((e) => 0 !== e.quantity);
}
function eD(e, t) {
    return ey(e, t, 1, P.dJ);
}
function eL(e, t, n) {
    return ey(e, n, t, P.Z1);
}
function eb(e) {
    var t;
    let n = null !== (t = e.find((e) => !('id' in e))) && void 0 !== t ? t : e.find((e) => P.dJ.has(e.planId));
    if (null != n) {
        let t = S.Z.get(n.planId);
        l()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = S.Z.get(e.planId);
                l()(null != r, 'Missing plan');
                let i = S.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return (
                    l()(null != i, 'Missing planForInterval'),
                    {
                        ...e,
                        planId: i.id
                    }
                );
            }));
    }
    return e;
}
function eM(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {
                  useSpace: !0,
                  useWithoutExperiment: !1
              };
    return (0, O.BU)(((0, C.Xv)() && e === P.p9.TIER_2 && !t.useWithoutExperiment ? P.m0[e].fileSize : P.a1[e].fileSize) / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function eP(e) {
    return null == e ? null : e.items.find((e) => P.Z1.has(e.planId));
}
function eU(e) {
    let t = null != e ? F(e) : null;
    return null != t ? er(t.planId) : null;
}
function ew(e) {
    if (null != e) {
        let t = F(e);
        if (null != t) return K(t.planId);
    }
}
function ex(e) {
    return e;
}
function eG(e) {
    return 'isNitroLocked' in e;
}
t.ZP = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < 2592000000,
    isPremiumAtLeast: y.yd,
    isPremium: y.I5,
    isPremiumExactly: y.M5,
    getPrice: H,
    getDefaultPrice: V,
    getInterval: function (e) {
        let t = P.GP[e];
        if (null != t)
            return {
                intervalType: t.interval,
                intervalCount: t.intervalCount
            };
        let n = Error('Unsupported plan');
        throw ((0, N.q2)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: j,
    getIntervalStringAsNoun: W,
    getPremiumType: K,
    getDisplayName: z,
    getDisplayPremiumType: X,
    getPremiumPlanOptions: en,
    getUpgradeEligibilities: ei,
    getPlanDescription: J,
    isPremiumSku: function (e) {
        return e === P.Si.TIER_0 || e === P.Si.TIER_1 || e === P.Si.TIER_2;
    },
    getClosestUpgrade: function (e) {
        let t = P.GP[e];
        if (null == t) throw Error('Unrecognized plan.');
        let { interval: n } = t,
            r = ei(e);
        for (let e of Object.keys(P.GP)) {
            let { interval: t } = P.GP[e];
            if (n === t && r.includes(e)) return e;
        }
        return null;
    },
    getIntervalMonths: function (e, t) {
        if (e === P.rV.MONTH) return t;
        if (e === P.rV.YEAR) return 12 * t;
        throw Error(''.concat(e, ' interval subscription period not implemented'));
    },
    getUserMaxFileSize: C.h6,
    getSkuIdForPlan: er,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case P.p9.TIER_0:
                return P.Si.TIER_0;
            case P.p9.TIER_1:
                return P.Si.TIER_1;
            case P.p9.TIER_2:
                return P.Si.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        if (K(e) === P.p9.TIER_2) return P.cb;
        return 0;
    },
    getBillingInformationString: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = n
                ? (0, L.T4)(
                      t.invoiceItems
                          .filter((e) => P.UD.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      t.currency
                  )
                : (0, L.T4)(t.total, t.currency);
        if (e.status === b.O0b.CANCELED) return w.Z.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({ endDate: t.subscriptionPeriodStart });
        if (e.status === b.O0b.PAUSE_PENDING)
            return w.Z.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
                pauseDate: e.currentPeriodEnd,
                resumeDate: e.pauseEndsAt
            });
        if (e.status === b.O0b.PAUSED)
            return null == e.pauseEndsAt
                ? n
                    ? w.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
                          planName: w.Z.Messages.PREMIUM,
                          price: r
                      })
                    : w.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO
                : n
                  ? w.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
                        planName: w.Z.Messages.PREMIUM,
                        resumeDate: e.pauseEndsAt,
                        price: r
                    })
                  : w.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({ resumeDate: e.pauseEndsAt });
        else if (e.status === b.O0b.PAST_DUE) {
            var i, a;
            let t = ec(e).expiresDate;
            return (e.isPurchasedViaGoogle && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_grace_period_expires_date) != null && (t = c()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (a = e.metadata) || void 0 === a ? void 0 : a.apple_grace_period_expires_date) != null && (t = c()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
                ? w.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
                      endDate: t,
                      paymentGatewayName: U.Vz[e.paymentGateway],
                      paymentSourceLink: ev(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : w.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
                      endDate: t,
                      price: r
                  });
        } else if (e.status === b.O0b.BILLING_RETRY)
            return w.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                endDate: c()(e.currentPeriodStart).add(P.A5, 'days'),
                price: r
            });
        else if (e.status === b.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, R.isAndroid)()
                ? w.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
                      endDate: c()(e.currentPeriodStart).add(P.gh, 'days'),
                      paymentGatewayName: U.Vz[e.paymentGateway],
                      paymentSourceLink: ev(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : w.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                      endDate: c()(e.currentPeriodStart).add(P.gh, 'days'),
                      price: r
                  });
        else
            return (function (e) {
                return null != e.paymentSourceId && ed(e.paymentSourceId);
            })(e)
                ? w.Z.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({ prepaidEndDate: e.currentPeriodEnd })
                : e.status === b.O0b.UNPAID
                  ? w.Z.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({ maxProcessingTimeInDays: P.Rg })
                  : e.isPurchasedExternally
                    ? w.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
                          renewalDate: t.subscriptionPeriodStart,
                          paymentGatewayName: U.Vz[e.paymentGateway],
                          subscriptionManagementLink: ev(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                      })
                    : n
                      ? w.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
                            planName: w.Z.Messages.PREMIUM,
                            renewalDate: t.subscriptionPeriodStart,
                            price: r
                        })
                      : w.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
                            renewalDate: t.subscriptionPeriodStart,
                            price: r
                        });
    },
    isNoneSubscription: m.Q0,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === b.O0b.CANCELED || e.status === b.O0b.PAUSE_PENDING) return n;
        l()(null != t, 'Expected invoicePreview');
        let r = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eo(t);
        });
        return (n = null == r || (0, m.Q0)(r.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : r.subscriptionPlanId);
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === b.O0b.CANCELED || e.status === b.O0b.PAUSE_PENDING) return n;
        l()(null != t, 'Expected invoicePreview');
        let r = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eo(t);
        });
        return (null == r || (0, m.Q0)(r.subscriptionPlanId)) && (n = b.O0b.CANCELED), n;
    },
    isBaseSubscriptionCanceled: ep,
    getPremiumGuildIntervalPrice: eI,
    hasAccountCredit: function (e) {
        return (
            null != e &&
            0 !== e.size &&
            Array.from(e).some((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
                return null != t && null != n && !r;
            })
        );
    },
    getBillingReviewSubheader: eT,
    getIntervalForInvoice: eg,
    getPremiumPlanItem: F,
    getGuildBoostPlanItem: eP,
    isBoostOnlySubscription: function (e) {
        return null != e && null == F(e) && null != eP(e);
    },
    getPremiumSkuIdForSubscription: eU,
    getPremiumTypeFromSubscription: ew,
    getPremiumTypeFromSubscriptionRenewalMutations: function (e) {
        if (null != e && null != e.renewalMutations) {
            let t = F(e.renewalMutations);
            if (null != t) return K(t.planId);
        }
    },
    getPremiumGradientColor: function (e) {
        switch (e) {
            case P.p9.TIER_0:
                return M.Rj.PREMIUM_TIER_0;
            case P.p9.TIER_1:
                return M.Rj.PREMIUM_TIER_1;
            case P.p9.TIER_2:
                return M.Rj.PREMIUM_TIER_2;
        }
    },
    castPremiumSubscriptionAsSkuId: ex,
    canUseAnimatedEmojis: function (e) {
        return (0, h.ks)(h.g_, e);
    },
    canUseEmojisEverywhere: function (e) {
        return (0, h.ks)(h.m_, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return (0, h.ks)(h._y, e);
    },
    canUseCustomCallSounds: function (e) {
        return (0, h.ks)(h.tj, e);
    },
    canUploadLargeFiles: function (e) {
        return (0, h.ks)(h.EQ, e);
    },
    canUseBadges: function (e) {
        return (0, h.ks)(h.Pl, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return (0, h.ks)(h.wN, e);
    },
    canEditDiscriminator: function (e) {
        return (0, h.ks)(h._G, e);
    },
    hasBoostDiscount: function (e) {
        return (0, h.ks)(h.j4, e);
    },
    canUseAnimatedAvatar: function (e) {
        return (0, h.ks)(h.lX, e);
    },
    canUseFancyVoiceChannelReactions: function (e) {
        return (0, h.ks)(h.Uw, e);
    },
    canInstallPremiumApplications: function (e) {
        return (0, h.ks)(h.zm, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return (0, h.ks)(h.zZ, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return (0, h.ks)(h.do, e);
    },
    canRedeemPremiumPerks: function (e) {
        return (0, h.ks)(h.ZE, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return (0, h.ks)(h.Ej, e);
    },
    canUsePremiumAppIcons: function (e) {
        return (0, h.ks)(h.Ct, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return (0, h.ks)(h.O1, e);
    },
    canUseClientThemes: function (e) {
        return (0, h.ks)(h.uw, e);
    },
    canStreamQuality: function (e, t) {
        return !!f.Z.hasActiveDemo(d.q.STREAM_HIGH_QUALITY) || ('high' === e ? (0, h.ks)(h.O8, t) : 'mid' === e && (0, h.ks)(h.g7, t));
    },
    hasFreeBoosts: function (e) {
        return (0, h.ks)(h.$0, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return (0, h.ks)(h.ME, e);
    },
    canUseCustomBackgrounds: function (e) {
        return (0, h.ks)(h.AN, e);
    },
    canUseCollectibles: function (e) {
        return (0, h.ks)(h._O, e);
    },
    canUseCustomNotificationSounds: function (e) {
        return (0, h.ks)(h.qH, e);
    },
    formatPriceString: function (e, t) {
        let n = (0, L.T4)(e.amount, e.currency),
            r = W(t);
        return ''.concat(n, '/').concat(r);
    },
    StreamQuality: i
});
