n.d(t, {
    Af: function () {
        return B;
    },
    Ap: function () {
        return ec;
    },
    CY: function () {
        return F;
    },
    Gf: function () {
        return K;
    },
    I5: function () {
        return L.I5;
    },
    JE: function () {
        return eO;
    },
    JP: function () {
        return Z;
    },
    L7: function () {
        return Y;
    },
    M5: function () {
        return L.M5;
    },
    MY: function () {
        return ev;
    },
    PK: function () {
        return ef;
    },
    PV: function () {
        return el;
    },
    Px: function () {
        return X;
    },
    Qo: function () {
        return eR;
    },
    Rd: function () {
        return W;
    },
    Rt: function () {
        return eg;
    },
    T4: function () {
        return H;
    },
    U2: function () {
        return i;
    },
    Ue: function () {
        return eC;
    },
    V7: function () {
        return et;
    },
    W_: function () {
        return em;
    },
    Wz: function () {
        return eG;
    },
    XK: function () {
        return ey;
    },
    Z8: function () {
        return eo;
    },
    Zx: function () {
        return eD;
    },
    _O: function () {
        return ek;
    },
    a5: function () {
        return eS;
    },
    aS: function () {
        return V;
    },
    al: function () {
        return eL;
    },
    aq: function () {
        return q;
    },
    bt: function () {
        return e_;
    },
    dn: function () {
        return eT;
    },
    eP: function () {
        return j;
    },
    fr: function () {
        return eA;
    },
    gB: function () {
        return eb;
    },
    gq: function () {
        return Q;
    },
    gy: function () {
        return eE;
    },
    he: function () {
        return ew;
    },
    if: function () {
        return eN;
    },
    jP: function () {
        return z;
    },
    k5: function () {
        return eU;
    },
    lY: function () {
        return eu;
    },
    qV: function () {
        return J;
    },
    u0: function () {
        return eB;
    },
    uV: function () {
        return ei;
    },
    uZ: function () {
        return es;
    },
    v6: function () {
        return ed;
    },
    v9: function () {
        return eM;
    },
    yd: function () {
        return L.yd;
    },
    zL: function () {
        return ee;
    },
    zV: function () {
        return ep;
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
    I = n(301766),
    m = n(594174),
    T = n(351402),
    S = n(853872),
    g = n(509545),
    A = n(78839),
    N = n(122289),
    O = n(55935),
    R = n(424218),
    v = n(358085),
    C = n(380684),
    L = n(111361),
    y = n(937615),
    D = n(981631),
    b = n(334431),
    M = n(474936),
    P = n(231338),
    U = n(689938);
let w = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    x = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    G = new E.Z('PremiumUtils.tsx'),
    k = {
        [M.Xh.NONE_MONTH]: [M.Xh.NONE_YEAR, M.Xh.PREMIUM_YEAR_TIER_2, M.Xh.PREMIUM_MONTH_TIER_2, M.Xh.PREMIUM_YEAR_TIER_1, M.Xh.PREMIUM_MONTH_TIER_1],
        [M.Xh.NONE_YEAR]: [M.Xh.PREMIUM_YEAR_TIER_2, M.Xh.PREMIUM_MONTH_TIER_2, M.Xh.PREMIUM_YEAR_TIER_1, M.Xh.PREMIUM_MONTH_TIER_1],
        [M.Xh.PREMIUM_MONTH_TIER_0]: [M.Xh.PREMIUM_YEAR_TIER_2, M.Xh.PREMIUM_MONTH_TIER_2, M.Xh.PREMIUM_YEAR_TIER_1, M.Xh.PREMIUM_MONTH_TIER_1, M.Xh.PREMIUM_YEAR_TIER_0],
        [M.Xh.PREMIUM_YEAR_TIER_0]: [M.Xh.PREMIUM_YEAR_TIER_2, M.Xh.PREMIUM_MONTH_TIER_2, M.Xh.PREMIUM_YEAR_TIER_1, M.Xh.PREMIUM_MONTH_TIER_1],
        [M.Xh.PREMIUM_MONTH_TIER_1]: [M.Xh.PREMIUM_YEAR_TIER_2, M.Xh.PREMIUM_MONTH_TIER_2, M.Xh.PREMIUM_YEAR_TIER_1],
        [M.Xh.PREMIUM_YEAR_TIER_1]: [M.Xh.PREMIUM_YEAR_TIER_2],
        [M.Xh.PREMIUM_MONTH_TIER_2]: [M.Xh.PREMIUM_YEAR_TIER_2],
        [M.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [M.Xh.NONE_MONTH, M.Xh.NONE_YEAR, M.Xh.PREMIUM_YEAR_TIER_2, M.Xh.PREMIUM_MONTH_TIER_2, M.Xh.PREMIUM_YEAR_TIER_1, M.Xh.PREMIUM_MONTH_TIER_1, M.Xh.PREMIUM_YEAR_TIER_0, M.Xh.PREMIUM_MONTH_TIER_0]
    };
function B(e) {
    return e.items.find((e) => M.dJ.has(e.planId));
}
function F(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null !== (t = S.Z.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
        a = A.ZP.getPremiumTypeSubscription();
    return null != a && null != a.paymentSourceId && (i = a.paymentSourceId), V(e, n, r, { paymentSourceId: i });
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: i, currency: a } = r;
    if (null != g.Z.get(e)) {
        let r = D.tuJ.DEFAULT;
        n ? (r = D.tuJ.GIFT) : t && (r = D.tuJ.PREMIUM_TIER_1);
        let s = (function (e) {
            let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: D.tuJ.DEFAULT },
                i = H(e, {
                    paymentSourceId: t,
                    purchaseType: n
                });
            return (0 === i.length && G.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r) : i[0];
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
function H(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: D.tuJ.DEFAULT },
        r = (function (e, t) {
            let n = g.Z.get(e);
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
            if (null == r) throw (G.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
            return r;
        })(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            G.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), G.info('prices: '.concat(i));
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
        G.info('countryPrices: '.concat(JSON.stringify(r.countryPrices)));
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
function Z(e) {
    switch (e) {
        case M.EA.MONTH:
            return U.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
        case M.EA.YEAR:
            return U.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
        case M.EA.DAY:
        case M.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function Y(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : M.p9.TIER_2;
    if (t || n)
        switch (e) {
            case M.rV.MONTH:
                let s = (a === M.p9.TIER_0 ? U.Z.Messages.BASIC_GIFT_DURATION : U.Z.Messages.GIFT_DURATION).format({ timeInterval: U.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH });
                return i ? s : U.Z.Messages.PAYMENT_MODAL_ONE_MONTH;
            case M.rV.YEAR:
                let o = (a === M.p9.TIER_0 ? U.Z.Messages.BASIC_GIFT_DURATION : U.Z.Messages.GIFT_DURATION).format({ timeInterval: U.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR });
                return i ? o : U.Z.Messages.PAYMENT_MODAL_ONE_YEAR;
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case M.rV.MONTH:
            if (1 !== r) return U.Z.Messages.MULTI_MONTHS.format({ intervalCount: r });
            return U.Z.Messages.MONTHLY;
        case M.rV.YEAR:
            return U.Z.Messages.YEARLY;
        default:
            throw Error('Unexpected interval');
    }
}
function j(e) {
    switch (e) {
        case M.rV.MONTH:
            return U.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
        case M.rV.YEAR:
            return U.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
        default:
            throw Error('Unexpected interval');
    }
}
function W(e) {
    let t = M.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, N.q2)(n, { tags: { planId: e } }), n);
}
function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case M.Xh.PREMIUM_MONTH_TIER_0:
            return t ? U.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({ duration: r }) : n ? U.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : U.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0;
        case M.Xh.PREMIUM_YEAR_TIER_0:
            return t ? U.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({ duration: r }) : n ? U.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : U.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0;
        case M.Xh.PREMIUM_MONTH_TIER_1:
            return n ? U.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : U.Z.Messages.PREMIUM_PLAN_MONTH_TIER_1;
        case M.Xh.PREMIUM_YEAR_TIER_1:
            return n ? U.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : U.Z.Messages.PREMIUM_PLAN_YEAR_TIER_1;
        case M.Xh.PREMIUM_MONTH_TIER_2:
            return t ? U.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({ duration: r }) : n ? U.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : U.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2;
        case M.Xh.PREMIUM_YEAR_TIER_2:
            return t ? U.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({ duration: r }) : n ? U.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : U.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2;
        case M.Xh.PREMIUM_3_MONTH_TIER_2:
            return U.Z.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
        case M.Xh.PREMIUM_6_MONTH_TIER_2:
            return U.Z.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
        case M.Xh.PREMIUM_MONTH_GUILD:
            return n ? U.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : U.Z.Messages.PREMIUM_GUILD_PLAN_MONTH;
        case M.Xh.PREMIUM_YEAR_GUILD:
            return n ? U.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : U.Z.Messages.PREMIUM_GUILD_PLAN_YEAR;
        case M.Xh.PREMIUM_3_MONTH_GUILD:
            return U.Z.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
        case M.Xh.PREMIUM_6_MONTH_GUILD:
            return U.Z.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
        case M.Xh.PREMIUM_MONTH_LEGACY:
            return U.Z.Messages.PREMIUM_PLAN_MONTH;
        case M.Xh.PREMIUM_YEAR_LEGACY:
            return U.Z.Messages.PREMIUM_PLAN_YEAR;
    }
    let i = Error('Unsupported plan');
    throw ((0, N.q2)(i, { tags: { planId: e } }), i);
}
function z(e) {
    switch (e) {
        case M.Si.TIER_0:
            return U.Z.Messages.PREMIUM_TIER_0;
        case M.Si.TIER_1:
            return U.Z.Messages.PREMIUM_TIER_1;
        case M.Si.TIER_2:
            return U.Z.Messages.PREMIUM_TIER_2;
    }
    let t = Error('Unsupported sku');
    throw ((0, N.q2)(t, { tags: { skuId: e } }), t);
}
function q(e) {
    switch (e) {
        case M.Xh.PREMIUM_MONTH_TIER_0:
        case M.Xh.PREMIUM_YEAR_TIER_0:
            return U.Z.Messages.PREMIUM_TIER_0;
        case M.Xh.PREMIUM_MONTH_TIER_1:
        case M.Xh.PREMIUM_YEAR_TIER_1:
            return U.Z.Messages.PREMIUM_TIER_1;
        case M.Xh.PREMIUM_MONTH_TIER_2:
        case M.Xh.PREMIUM_3_MONTH_TIER_2:
        case M.Xh.PREMIUM_6_MONTH_TIER_2:
        case M.Xh.PREMIUM_YEAR_TIER_2:
            return U.Z.Messages.PREMIUM_TIER_2;
    }
    let t = Error('Unsupported plan');
    throw ((0, N.q2)(t, { tags: { planId: e } }), t);
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case M.Xh.PREMIUM_MONTH_TIER_0:
        case M.Xh.PREMIUM_YEAR_TIER_0:
            return t ? 'Basic' : 'Nitro Basic';
        case M.Xh.PREMIUM_MONTH_TIER_1:
        case M.Xh.PREMIUM_YEAR_TIER_1:
            return t ? 'Classic' : 'Nitro Classic';
        case M.Xh.PREMIUM_MONTH_TIER_2:
        case M.Xh.PREMIUM_YEAR_TIER_2:
        case M.Xh.PREMIUM_3_MONTH_TIER_2:
        case M.Xh.PREMIUM_6_MONTH_TIER_2:
            return 'Nitro';
    }
    let n = Error('Unsupported plan');
    throw ((0, N.q2)(n, { tags: { planId: e } }), n);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case M.p9.TIER_0:
            return t ? 'Basic' : U.Z.Messages.PREMIUM_TIER_0;
        case M.p9.TIER_1:
            return t ? 'Classic' : U.Z.Messages.PREMIUM_TIER_1;
        case M.p9.TIER_2:
            return U.Z.Messages.PREMIUM_TIER_2;
    }
}
function $(e) {
    var t, n, r, i, a, s, o, l, u, d, E, f, h;
    let { subscription: p, planId: I, price: T, includePremiumGuilds: S, hasDiscountApplied: g, activeDiscountInfo: A, renewalInvoicePreview: N } = e,
        R = M.GP[I],
        v = ex(F(R.id), R.interval),
        C = eh(p) || (null == p.paymentSourceId && !p.isPurchasedExternally && !(null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium())),
        L = null != T,
        y = p.status === D.O0b.UNPAID && null !== p.latestInvoice && (null === (n = p.latestInvoice) || void 0 === n ? void 0 : n.status) === D.hUK.OPEN,
        b = C ? D.O0b.CANCELED : y ? D.O0b.UNPAID : p.status,
        P = null === (a = null !== (i = null == N ? void 0 : N.taxInclusive) && void 0 !== i ? i : null === (r = p.latestInvoice) || void 0 === r ? void 0 : r.taxInclusive) || void 0 === a || a,
        w = M.cb + (S ? ei(p.additionalPlans) : 0);
    switch (I) {
        case M.Xh.PREMIUM_MONTH_TIER_0:
        case M.Xh.PREMIUM_YEAR_TIER_0:
            switch (b) {
                case D.O0b.CANCELED:
                    return L ? (P ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({ price: T }) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({ price: T })) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
                case D.O0b.ACCOUNT_HOLD:
                    return L ? (P ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({ price: T }) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({ price: T })) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
                case D.O0b.UNPAID:
                    return U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
                case D.O0b.PAUSE_PENDING:
                    let x = null != p.pauseEndsAt ? c()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != x
                        ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: x
                          })
                        : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: p.currentPeriodEnd });
                case D.O0b.PAUSED:
                    return U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: null !== (s = p.pauseEndsAt) && void 0 !== s ? s : void 0 });
                case D.O0b.PAST_DUE:
                    return U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
                        endDate: (0, O.vc)(eu(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, _.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return L ? (P ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({ price: T }) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({ price: T })) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE;
            }
        case M.Xh.PREMIUM_MONTH_TIER_1:
        case M.Xh.PREMIUM_YEAR_TIER_1:
            switch (b) {
                case D.O0b.CANCELED:
                    return L ? (P ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({ price: T }) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({ price: T })) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
                case D.O0b.ACCOUNT_HOLD:
                    return L ? (P ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({ price: T }) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({ price: T })) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
                case D.O0b.UNPAID:
                    return U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
                case D.O0b.PAUSE_PENDING:
                    let G = null != p.pauseEndsAt ? c()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != G
                        ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: G
                          })
                        : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: p.currentPeriodEnd });
                case D.O0b.PAUSED:
                    return U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: null !== (o = p.pauseEndsAt) && void 0 !== o ? o : void 0 });
                case D.O0b.PAST_DUE:
                    return U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
                        endDate: (0, O.vc)(eu(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, _.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return L ? (P ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({ price: T }) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({ price: T })) : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE;
            }
        case M.Xh.PREMIUM_MONTH_TIER_2:
        case M.Xh.PREMIUM_YEAR_TIER_2:
        case M.Xh.PREMIUM_3_MONTH_TIER_2:
        case M.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (b) {
                case D.O0b.CANCELED:
                    return L
                        ? P
                            ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
                                  price: T,
                                  num: w
                              })
                            : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                                  price: T,
                                  num: w
                              })
                        : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({ num: w });
                case D.O0b.ACCOUNT_HOLD:
                    return L
                        ? P
                            ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
                                  price: T,
                                  num: w
                              })
                            : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                                  price: T,
                                  num: w
                              })
                        : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({ num: w });
                case D.O0b.UNPAID:
                    return U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({ num: w });
                case D.O0b.PAUSE_PENDING:
                    let k = null != p.pauseEndsAt ? c()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != k
                        ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: k
                          })
                        : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({ pauseDate: p.currentPeriodEnd });
                case D.O0b.PAUSED:
                    return U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({ resumeDate: null !== (l = p.pauseEndsAt) && void 0 !== l ? l : void 0 });
                case D.O0b.BILLING_RETRY:
                    return U.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO.format({ endDate: c()(p.currentPeriodStart).add(M.A5, 'days').toDate() });
                case D.O0b.PAST_DUE:
                    return U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
                        endDate: (0, O.vc)(eu(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, _.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return g
                        ? I === M.Xh.PREMIUM_YEAR_TIER_2
                            ? U.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                                  percent: null !== (u = null == A ? void 0 : A.percentage) && void 0 !== u ? u : M.Bo,
                                  regularPrice: v
                              })
                            : P
                              ? U.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                                    percent: null !== (d = null == A ? void 0 : A.percentage) && void 0 !== d ? d : M.M_,
                                    regularPrice: v,
                                    numMonths: null !== (E = null == A ? void 0 : A.duration) && void 0 !== E ? E : M.rt
                                })
                              : U.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
                                    percent: null !== (f = null == A ? void 0 : A.percentage) && void 0 !== f ? f : M.M_,
                                    regularPrice: v,
                                    numMonths: null !== (h = null == A ? void 0 : A.duration) && void 0 !== h ? h : M.rt
                                })
                        : L
                          ? P
                              ? U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
                                    price: T,
                                    num: w
                                })
                              : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
                                    price: T,
                                    num: w
                                })
                          : U.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({ num: w });
            }
        default:
            throw Error('Invalid planId '.concat(I));
    }
}
function J(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: i = !1, hasDiscountApplied: a = !1, activeDiscountInfo: s } = e,
        o = g.Z.get(r);
    return (
        l()(null != o, 'Missing plan'),
        $({
            subscription: n,
            planId: o.id,
            price: (function (e, t, n) {
                let r = e.invoiceItems.find((e) => {
                        let { subscriptionPlanId: t } = e;
                        return t === n.id;
                    }),
                    i =
                        null == r
                            ? V(n.id, !1, !1, {
                                  paymentSourceId: t.paymentSourceId,
                                  currency: t.currency
                              }).amount
                            : r.amount;
                return (0, y.og)((0, y.T4)(i, e.currency), n.interval, n.intervalCount);
            })(t, n, o),
            includePremiumGuilds: i,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoicePreview: t
        })
    );
}
function ee(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, I.Q0)(t) ? null : K(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return M.Z1.has(t);
                  }),
        a = (null == i ? void 0 : i.planId) === M.Xh.PREMIUM_MONTH_GUILD ? U.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == i ? void 0 : i.planId) === M.Xh.PREMIUM_YEAR_GUILD ? U.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null,
        s = null != a ? a.format({ num: null == i ? void 0 : i.quantity }) : void 0;
    if (null != r && null != s)
        return U.Z.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
            premiumDescription: r,
            premiumGuildDescription: s
        });
    if (null != r) return r;
    if (null != s) return s;
    else throw Error('Subscription without premium or premium guild subscription');
}
function et(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, isGift: a, isEligibleForTrial: s, defaultPlanId: o, defaultToMonthlyPlan: l } = e;
    if (null == t || !n) return [];
    let u = void 0 !== o && t === M.GP[o].skuId ? o : void 0;
    void 0 === u && l && !a && (u = M.IW[t]), s && !a && (void 0 === o || (l && M.No.has(o))) && p.k.trackExposure({ location: 'de805e_1' });
    let c = [];
    switch (t) {
        case M.Si.TIER_0:
            c = [M.Xh.PREMIUM_YEAR_TIER_0, M.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case M.Si.TIER_1:
            c = [M.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case M.Si.TIER_2:
            let d = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (M.o4.has(e)) {
                    let t = M.GP[e];
                    d = [...M.o4].filter((e) => {
                        let n = M.GP[e];
                        return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === M.Si.TIER_2;
                    });
                } else d = [];
            }
            c = [M.Xh.PREMIUM_YEAR_TIER_2, ...d, M.Xh.PREMIUM_MONTH_TIER_2];
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
function en(e) {
    let t = M.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, N.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function er(e) {
    var t;
    return null == e ? k.ALL : null !== (t = k[e]) && void 0 !== t ? t : [];
}
function ei(e) {
    let t = g.Z.getPlanIdsForSkus([eG(M.Si.GUILD)]);
    l()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let ea = new Set([M.Xh.NONE_MONTH, M.Xh.NONE_3_MONTH, M.Xh.NONE_6_MONTH, M.Xh.NONE_YEAR, M.Xh.PREMIUM_MONTH_TIER_0, M.Xh.PREMIUM_MONTH_TIER_1, M.Xh.PREMIUM_MONTH_TIER_2, M.Xh.PREMIUM_YEAR_TIER_0, M.Xh.PREMIUM_YEAR_TIER_1, M.Xh.PREMIUM_YEAR_TIER_2, M.Xh.PREMIUM_3_MONTH_TIER_2, M.Xh.PREMIUM_6_MONTH_TIER_2]);
function es(e) {
    return ea.has(e);
}
function eo(e) {
    return M.Z1.has(e);
}
function el(e) {
    return es(e) || eo(e);
}
function eu(e) {
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
        let t = e.isPurchasedViaApple ? M.$7 : M.Ue;
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
        let t = null == e.paymentSourceId ? M.UA : M.zp;
        return {
            days: t,
            expiresDate: c()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function ec(e) {
    if (null == e) return !1;
    let t = S.Z.getPaymentSource(e);
    return null != t && P.Uk.has(t.type);
}
function ed(e) {
    return e.isPurchasedExternally
        ? e.status === D.O0b.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: r } = e,
                  i = ei(n);
              return 0 === (null != t ? ei(t.additionalPlans) : null) && 0 !== i ? D.O0b.CANCELED : r;
          })(e) === D.O0b.CANCELED;
}
function e_(e) {
    var t, n, r;
    let { subscription: i, user: a, price: s, renewalInvoicePreview: o } = e,
        { planId: u, additionalPlans: c } = i,
        d = g.Z.get(u);
    l()(null != d, 'Missing plan');
    let _ = ei(c),
        E = eI(i.planId, i.paymentSourceId, i.currency, a).amount * _;
    if (null != o) {
        let e = o.invoiceItems.find((e) => M.Z1.has(e.subscriptionPlanId));
        null != e && (E = e.amount);
    }
    s = null != s ? s : (0, y.T4)(E, i.currency);
    let f = null === (r = null !== (n = null == o ? void 0 : o.taxInclusive) && void 0 !== n ? n : null === (t = i.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === r || r;
    if (ed(i))
        return i.isPurchasedViaGoogle
            ? U.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({ quantity: _ })
            : f
              ? U.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
                    quantity: _,
                    rate: (0, y.og)(s, d.interval, d.intervalCount)
                })
              : U.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                    quantity: _,
                    rate: (0, y.og)(s, d.interval, d.intervalCount)
                });
    switch (i.status) {
        case D.O0b.ACCOUNT_HOLD:
            return i.isPurchasedViaGoogle
                ? U.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
                      quantity: _,
                      boostQuantity: _
                  })
                : f
                  ? U.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, y.og)(s, d.interval, d.intervalCount)
                    })
                  : U.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, y.og)(s, d.interval, d.intervalCount)
                    });
        case D.O0b.PAUSE_PENDING:
        case D.O0b.PAUSED:
            return U.Z.Messages.GUILD_BOOSTING_DISABLED_HEADER;
        default:
            return i.isPurchasedViaGoogle
                ? U.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({ quantity: _ })
                : f
                  ? U.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
                        quantity: _,
                        rate: (0, y.og)(s, d.interval, d.intervalCount)
                    })
                  : U.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
                        quantity: _,
                        rate: (0, y.og)(s, d.interval, d.intervalCount)
                    });
    }
}
function eE(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? V(e.id, !1, r, t) : F(e.id, !1, r),
        a = (0, y.T4)(i.amount, i.currency);
    return e.currency !== P.pK.USD && !0 === n && (a = a.concat('*')), a;
}
function ef(e, t, n) {
    let r = eE(e, t, n);
    return (0, y.og)(r, e.interval, e.intervalCount);
}
function eh(e) {
    let { status: t, renewalMutations: n } = e;
    return t === D.O0b.CANCELED || (null != n && (0, I.Q0)(n.planId) && !e.isPurchasedExternally);
}
function ep(e) {
    return e === D.O0b.PAST_DUE || e === D.O0b.ACCOUNT_HOLD || e === D.O0b.BILLING_RETRY;
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
        a = g.Z.get(e);
    if (null == a) {
        let t = Error('Unsupported plan');
        throw ((0, N.q2)(t, { tags: { planId: e } }), t);
    }
    let s = g.Z.getForSkuAndInterval(eG(M.Si.GUILD), a.interval, a.intervalCount);
    if (null == s) {
        let t = Error('Unsupported plan');
        throw ((0, N.q2)(t, { tags: { planId: e } }), t);
    }
    return V(s.id, (0, L.I5)(r), !1, i);
}
function em(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case M.Xh.PREMIUM_MONTH_TIER_0:
                return U.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
            case M.Xh.PREMIUM_YEAR_TIER_0:
                return U.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
            case M.Xh.PREMIUM_MONTH_TIER_1:
                return U.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
            case M.Xh.PREMIUM_YEAR_TIER_1:
                return U.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
            case M.Xh.PREMIUM_MONTH_TIER_2:
                return U.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
            case M.Xh.PREMIUM_YEAR_TIER_2:
                return U.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2;
        }
    switch (r) {
        case M.Xh.PREMIUM_MONTH_TIER_0:
            return n ? U.Z.Messages.BILLING_SELECT_PLAN : U.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
        case M.Xh.PREMIUM_YEAR_TIER_0:
            return n ? U.Z.Messages.BILLING_SELECT_PLAN : U.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
        case M.Xh.PREMIUM_MONTH_TIER_1:
            return n ? U.Z.Messages.BILLING_SELECT_PLAN : U.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
        case M.Xh.PREMIUM_YEAR_TIER_1:
            return n ? U.Z.Messages.BILLING_SELECT_PLAN : U.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
        case M.Xh.PREMIUM_MONTH_TIER_2:
            return n ? U.Z.Messages.BILLING_SELECT_PLAN : U.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
        case M.Xh.PREMIUM_YEAR_TIER_2:
            return n ? U.Z.Messages.BILLING_SELECT_PLAN : U.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
        case M.Xh.PREMIUM_3_MONTH_TIER_2:
        case M.Xh.PREMIUM_6_MONTH_TIER_2:
            return U.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({ intervalCount: t.intervalCount });
        case M.Xh.NONE_MONTH:
        case M.Xh.NONE_YEAR:
        case M.Xh.NONE_3_MONTH:
        case M.Xh.NONE_6_MONTH:
        case M.Xh.PREMIUM_MONTH_GUILD:
        case M.Xh.PREMIUM_YEAR_GUILD:
        case M.Xh.PREMIUM_3_MONTH_GUILD:
        case M.Xh.PREMIUM_6_MONTH_GUILD:
            return U.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT;
    }
    let i = Error('User is purchasing an unsupported plan');
    throw ((0, N.q2)(i, { tags: { planId: r } }), i);
}
function eT(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = g.Z.get(t);
    return (
        l()(null != n, 'Missing subscriptionPlan'),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    );
}
function eS(e) {
    let { intervalType: t = M.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case M.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? U.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({ weeks: n / 7 }) : U.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({ weeks: n / 7 });
            return r ? U.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({ days: n }) : U.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({ days: n });
        case M.rV.MONTH:
            return r ? U.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({ months: n }) : U.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({ months: n });
        case M.rV.YEAR:
            return r ? U.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({ years: n }) : U.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({ years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eg(e) {
    let { intervalType: t = M.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case M.rV.DAY:
            if (n >= 7 && n % 7 == 0) return U.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({ weeks: n / 7 });
            return U.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({ days: n });
        case M.rV.MONTH:
            return U.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({ months: n });
        case M.rV.YEAR:
            return U.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({ years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eA(e) {
    if (null != e && null != e.subscription_trial) {
        let t = e.subscription_trial;
        return eg({
            intervalType: t.interval,
            intervalCount: t.interval_count
        });
    }
    return null;
}
function eN(e) {
    let { intervalType: t = M.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case M.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? U.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({ weeks: n / 7 }) : U.Z.Messages.DURATION_WEEKS.format({ weeks: n / 7 });
            return r ? U.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: n }) : U.Z.Messages.DURATION_DAYS.format({ days: n });
        case M.rV.MONTH:
            return r ? U.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({ months: n }) : U.Z.Messages.DURATION_MONTHS.format({ months: n });
        case M.rV.YEAR:
            return r ? U.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: n }) : U.Z.Messages.DURATION_YEARS.format({ years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eO(e, t) {
    switch (e) {
        case D.gg$.APPLE_PARTNER:
        case D.gg$.APPLE:
            return w[t];
        case D.gg$.GOOGLE:
            return x[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eR(e, t) {
    return (0, L.I5)(e) || ep(null == t ? void 0 : t.status);
}
function ev(e, t) {
    var n, r;
    let i = [],
        a = (null !== (r = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== r ? r : e.items).find((e) => M.dJ.has(e.planId));
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
    return e.filter((e) => !M.dJ.has(e.planId));
}
function eL(e, t, n, r) {
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
function ey(e, t) {
    return eL(e, t, 1, M.dJ);
}
function eD(e, t, n) {
    return eL(e, n, t, M.Z1);
}
function eb(e) {
    var t;
    let n = null !== (t = e.find((e) => !('id' in e))) && void 0 !== t ? t : e.find((e) => M.dJ.has(e.planId));
    if (null != n) {
        let t = g.Z.get(n.planId);
        l()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = g.Z.get(e.planId);
                l()(null != r, 'Missing plan');
                let i = g.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
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
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = M.a1[e].fileSize;
    return (0, R.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function eP(e) {
    return null == e ? null : e.items.find((e) => M.Z1.has(e.planId));
}
function eU(e) {
    let t = null != e ? B(e) : null;
    return null != t ? en(t.planId) : null;
}
function ew(e) {
    if (null != e) {
        let t = B(e);
        if (null != t) return W(t.planId);
    }
}
function ex(e, t) {
    let n = (0, y.T4)(e.amount, e.currency),
        r = j(t);
    return ''.concat(n, '/').concat(r);
}
function eG(e) {
    return e;
}
function ek(e) {
    return 'isNitroLocked' in e;
}
function eB(e) {
    return null != e && M.OT.includes(e) ? 1 : 2;
}
t.ZP = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < 2592000000,
    isPremiumAtLeast: L.yd,
    isPremium: L.I5,
    isPremiumExactly: L.M5,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: V,
    getDefaultPrice: F,
    getInterval: function (e) {
        let t = M.GP[e];
        if (null != t)
            return {
                intervalType: t.interval,
                intervalCount: t.intervalCount
            };
        let n = Error('Unsupported plan');
        throw ((0, N.q2)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: Y,
    getIntervalStringAsNoun: j,
    getPremiumType: W,
    getDisplayName: K,
    getDisplayPremiumType: Q,
    getPremiumPlanOptions: et,
    getUpgradeEligibilities: er,
    getReverseTrialWeeks: eB,
    getPlanDescription: $,
    isPremiumSku: function (e) {
        return e === M.Si.TIER_0 || e === M.Si.TIER_1 || e === M.Si.TIER_2;
    },
    getClosestUpgrade: function (e) {
        let t = M.GP[e];
        if (null == t) throw Error('Unrecognized plan.');
        let { interval: n } = t,
            r = er(e);
        for (let e of Object.keys(M.GP)) {
            let { interval: t } = M.GP[e];
            if (n === t && r.includes(e)) return e;
        }
        return null;
    },
    getIntervalMonths: function (e, t) {
        if (e === M.rV.MONTH) return t;
        if (e === M.rV.YEAR) return 12 * t;
        throw Error(''.concat(e, ' interval subscription period not implemented'));
    },
    getUserMaxFileSize: C.h6,
    getSkuIdForPlan: en,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case M.p9.TIER_0:
                return M.Si.TIER_0;
            case M.p9.TIER_1:
                return M.Si.TIER_1;
            case M.p9.TIER_2:
                return M.Si.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        if (W(e) === M.p9.TIER_2) return M.cb;
        return 0;
    },
    getBillingInformationString: function (e, t) {
        var n, r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = a
                ? (0, y.T4)(
                      t.invoiceItems
                          .filter((e) => M.UD.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      t.currency
                  )
                : (0, y.T4)(t.total, t.currency);
        if (null != e.trialId && M.h8.includes(e.trialId) && null == e.paymentSourceId) return U.Z.Messages.REVERSE_TRIAL_PAYMENT_MODAL_INFO.format({ trialEnd: e.currentPeriodEnd });
        if (e.status === D.O0b.CANCELED) return U.Z.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({ endDate: t.subscriptionPeriodStart });
        if (e.status === D.O0b.PAUSE_PENDING)
            return U.Z.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
                pauseDate: e.currentPeriodEnd,
                resumeDate: null !== (n = e.pauseEndsAt) && void 0 !== n ? n : void 0
            });
        if (e.status === D.O0b.PAUSED)
            return null == e.pauseEndsAt
                ? a
                    ? U.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
                          planName: U.Z.Messages.PREMIUM,
                          price: s
                      })
                    : U.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO
                : a
                  ? U.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
                        planName: U.Z.Messages.PREMIUM,
                        resumeDate: e.pauseEndsAt,
                        price: s
                    })
                  : U.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({ resumeDate: e.pauseEndsAt });
        else if (e.status === D.O0b.PAST_DUE) {
            let t = eu(e).expiresDate;
            return (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (t = c()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (i = e.metadata) || void 0 === i ? void 0 : i.apple_grace_period_expires_date) != null && (t = c()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
                ? U.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
                      endDate: t.toDate(),
                      paymentGatewayName: P.Vz[e.paymentGateway],
                      paymentSourceLink: eO(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : U.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
                      endDate: t.toDate(),
                      price: s
                  });
        } else if (e.status === D.O0b.BILLING_RETRY)
            return U.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                endDate: c()(e.currentPeriodStart).add(M.A5, 'days').toDate(),
                price: s
            });
        else if (e.status === D.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, v.isAndroid)()
                ? U.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
                      endDate: c()(e.currentPeriodStart).add(M.gh, 'days').toDate(),
                      paymentGatewayName: P.Vz[e.paymentGateway],
                      paymentSourceLink: eO(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : U.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                      endDate: c()(e.currentPeriodStart).add(M.gh, 'days').toDate(),
                      price: s
                  });
        else
            return (function (e) {
                return null != e.paymentSourceId && ec(e.paymentSourceId);
            })(e)
                ? U.Z.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({ prepaidEndDate: e.currentPeriodEnd })
                : e.status === D.O0b.UNPAID
                  ? U.Z.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({ maxProcessingTimeInDays: M.Rg })
                  : e.isPurchasedExternally
                    ? U.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
                          renewalDate: t.subscriptionPeriodStart,
                          paymentGatewayName: P.Vz[e.paymentGateway],
                          subscriptionManagementLink: eO(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                      })
                    : a
                      ? U.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
                            planName: U.Z.Messages.PREMIUM,
                            renewalDate: t.subscriptionPeriodStart,
                            price: s
                        })
                      : U.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
                            renewalDate: t.subscriptionPeriodStart,
                            price: s
                        });
    },
    isSwitchingPlansDisabled: function (e) {
        return null != e.renewalMutations || null != e.trialEndsAt || e.status === D.O0b.PAST_DUE;
    },
    getSwitchingPlansDisabledMessage: function (e) {
        let t = null;
        return null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? U.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : U.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != e.trialEndsAt && (t = U.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), t;
    },
    isNoneSubscription: I.Q0,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === D.O0b.CANCELED || e.status === D.O0b.PAUSE_PENDING) return n;
        l()(null != t, 'Expected invoicePreview');
        let r = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return es(t);
        });
        return (n = null == r || (0, I.Q0)(r.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : r.subscriptionPlanId);
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === D.O0b.CANCELED || e.status === D.O0b.PAUSE_PENDING) return n;
        l()(null != t, 'Expected invoicePreview');
        let r = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return es(t);
        });
        return (null == r || (0, I.Q0)(r.subscriptionPlanId)) && (n = D.O0b.CANCELED), n;
    },
    isBaseSubscriptionCanceled: eh,
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
    getBillingReviewSubheader: em,
    getIntervalForInvoice: eT,
    getPremiumPlanItem: B,
    getGuildBoostPlanItem: eP,
    isBoostOnlySubscription: function (e) {
        return null != e && null == B(e) && null != eP(e);
    },
    getPremiumSkuIdForSubscription: eU,
    getPremiumTypeFromSubscription: ew,
    getPremiumTypeFromSubscriptionRenewalMutations: function (e) {
        if (null != e && null != e.renewalMutations) {
            let t = B(e.renewalMutations);
            if (null != t) return W(t.planId);
        }
    },
    getPremiumGradientColor: function (e) {
        switch (e) {
            case M.p9.TIER_0:
                return b.Rj.PREMIUM_TIER_0;
            case M.p9.TIER_1:
                return b.Rj.PREMIUM_TIER_1;
            case M.p9.TIER_2:
                return b.Rj.PREMIUM_TIER_2;
        }
    },
    castPremiumSubscriptionAsSkuId: eG,
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
    formatPriceString: ex,
    StreamQuality: i
});
