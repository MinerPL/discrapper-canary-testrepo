n.d(t, {
    Af: function () {
        return B;
    },
    Ap: function () {
        return ec;
    },
    CY: function () {
        return Z;
    },
    Gf: function () {
        return K;
    },
    I5: function () {
        return R.I5;
    },
    JE: function () {
        return ey;
    },
    JP: function () {
        return j;
    },
    L7: function () {
        return H;
    },
    M5: function () {
        return R.M5;
    },
    MY: function () {
        return eN;
    },
    PK: function () {
        return eh;
    },
    PV: function () {
        return el;
    },
    Px: function () {
        return X;
    },
    Qo: function () {
        return eA;
    },
    Rd: function () {
        return W;
    },
    Rt: function () {
        return eS;
    },
    T4: function () {
        return V;
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
        return eE;
    },
    Wz: function () {
        return eU;
    },
    XK: function () {
        return eO;
    },
    Z8: function () {
        return eo;
    },
    Zx: function () {
        return eD;
    },
    _O: function () {
        return eG;
    },
    a5: function () {
        return eI;
    },
    aS: function () {
        return F;
    },
    al: function () {
        return eR;
    },
    aq: function () {
        return q;
    },
    bt: function () {
        return ef;
    },
    dn: function () {
        return ev;
    },
    eP: function () {
        return Y;
    },
    fr: function () {
        return eT;
    },
    gB: function () {
        return eL;
    },
    gq: function () {
        return Q;
    },
    gy: function () {
        return e_;
    },
    he: function () {
        return eP;
    },
    if: function () {
        return eb;
    },
    jP: function () {
        return z;
    },
    k5: function () {
        return eM;
    },
    lY: function () {
        return eu;
    },
    qV: function () {
        return $;
    },
    sk: function () {
        return eZ;
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
        return ex;
    },
    yd: function () {
        return R.yd;
    },
    zL: function () {
        return ee;
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
var f = n(782568),
    _ = n(710845),
    h = n(114064),
    p = n(803905),
    m = n(439017),
    g = n(301766),
    E = n(594174),
    v = n(351402),
    I = n(853872),
    S = n(509545),
    T = n(78839),
    b = n(122289),
    y = n(55935),
    A = n(424218),
    N = n(358085),
    C = n(380684),
    R = n(111361),
    O = n(937615),
    D = n(981631),
    L = n(334431),
    x = n(474936),
    w = n(231338),
    M = n(388032);
let P = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    k = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    U = new _.Z('PremiumUtils.tsx'),
    G = {
        [x.Xh.NONE_MONTH]: [x.Xh.NONE_YEAR, x.Xh.PREMIUM_YEAR_TIER_2, x.Xh.PREMIUM_MONTH_TIER_2, x.Xh.PREMIUM_YEAR_TIER_1, x.Xh.PREMIUM_MONTH_TIER_1],
        [x.Xh.NONE_YEAR]: [x.Xh.PREMIUM_YEAR_TIER_2, x.Xh.PREMIUM_MONTH_TIER_2, x.Xh.PREMIUM_YEAR_TIER_1, x.Xh.PREMIUM_MONTH_TIER_1],
        [x.Xh.PREMIUM_MONTH_TIER_0]: [x.Xh.PREMIUM_YEAR_TIER_2, x.Xh.PREMIUM_MONTH_TIER_2, x.Xh.PREMIUM_YEAR_TIER_1, x.Xh.PREMIUM_MONTH_TIER_1, x.Xh.PREMIUM_YEAR_TIER_0],
        [x.Xh.PREMIUM_YEAR_TIER_0]: [x.Xh.PREMIUM_YEAR_TIER_2, x.Xh.PREMIUM_MONTH_TIER_2, x.Xh.PREMIUM_YEAR_TIER_1, x.Xh.PREMIUM_MONTH_TIER_1],
        [x.Xh.PREMIUM_MONTH_TIER_1]: [x.Xh.PREMIUM_YEAR_TIER_2, x.Xh.PREMIUM_MONTH_TIER_2, x.Xh.PREMIUM_YEAR_TIER_1],
        [x.Xh.PREMIUM_YEAR_TIER_1]: [x.Xh.PREMIUM_YEAR_TIER_2],
        [x.Xh.PREMIUM_MONTH_TIER_2]: [x.Xh.PREMIUM_YEAR_TIER_2],
        [x.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [x.Xh.NONE_MONTH, x.Xh.NONE_YEAR, x.Xh.PREMIUM_YEAR_TIER_2, x.Xh.PREMIUM_MONTH_TIER_2, x.Xh.PREMIUM_YEAR_TIER_1, x.Xh.PREMIUM_MONTH_TIER_1, x.Xh.PREMIUM_YEAR_TIER_0, x.Xh.PREMIUM_MONTH_TIER_0]
    };
function B(e) {
    return e.items.find((e) => x.dJ.has(e.planId));
}
function Z(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null !== (t = I.Z.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
        a = T.ZP.getPremiumTypeSubscription();
    return null != a && null != a.paymentSourceId && (i = a.paymentSourceId), F(e, n, r, { paymentSourceId: i });
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: i, currency: a } = r;
    if (null != S.Z.get(e)) {
        let r = D.tuJ.DEFAULT;
        n ? (r = D.tuJ.GIFT) : t && (r = D.tuJ.PREMIUM_TIER_1);
        let s = (function (e) {
            let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: D.tuJ.DEFAULT },
                i = V(e, {
                    paymentSourceId: t,
                    purchaseType: n
                });
            return (0 === i.length && U.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r) : i[0];
        })(e, {
            paymentSourceId: i,
            purchaseType: r,
            currency: a
        });
        if (null == s) {
            let t = Error("Couldn't find price");
            throw (
                ((0, b.q2)(t, {
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
        ((0, b.q2)(s, {
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
function V(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: D.tuJ.DEFAULT },
        r = (function (e, t) {
            let n = S.Z.get(e);
            if (null == n) {
                let n = Error('Plan not found');
                throw (
                    ((0, b.q2)(n, {
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
            if (null == r) throw (U.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
            return r;
        })(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            U.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), U.info('prices: '.concat(i));
            let a = Error('Missing prices for payment source on subscription plan');
            (0, b.q2)(a, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e
                }
            });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        U.info('countryPrices: '.concat(JSON.stringify(r.countryPrices)));
        let t = Error('Missing prices for country');
        throw (
            ((0, b.q2)(t, {
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
function j(e) {
    switch (e) {
        case x.EA.MONTH:
            return M.intl.string(M.t.FPybU1);
        case x.EA.YEAR:
            return M.intl.string(M.t.tfqrho);
        case x.EA.DAY:
        case x.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function H(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : x.p9.TIER_2;
    if (t || n)
        switch (e) {
            case x.rV.MONTH:
                let s = M.intl.formatToPlainString(a === x.p9.TIER_0 ? M.t.NPKsLy : M.t.poEovb, { timeInterval: M.intl.string(M.t.FPybU1) });
                return i ? s : M.intl.string(M.t.Mh9bTk);
            case x.rV.YEAR:
                let o = M.intl.formatToPlainString(a === x.p9.TIER_0 ? M.t.NPKsLy : M.t.poEovb, { timeInterval: M.intl.string(M.t.tfqrho) });
                return i ? o : M.intl.string(M.t.DRgqMj);
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case x.rV.MONTH:
            if (1 !== r) return M.intl.formatToPlainString(M.t['0UlZnJ'], { intervalCount: r });
            return M.intl.string(M.t['DKzs9/']);
        case x.rV.YEAR:
            return M.intl.string(M.t['/Q4HRE']);
        default:
            throw Error('Unexpected interval');
    }
}
function Y(e) {
    switch (e) {
        case x.rV.MONTH:
            return M.intl.string(M.t.FPybU1);
        case x.rV.YEAR:
            return M.intl.string(M.t.tfqrho);
        default:
            throw Error('Unexpected interval');
    }
}
function W(e) {
    let t = x.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, b.q2)(n, { tags: { planId: e } }), n);
}
function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case x.Xh.PREMIUM_MONTH_TIER_0:
            return t ? M.intl.format(M.t.TZXHNj, { duration: r }) : n ? M.intl.string(M.t['81iAgo']) : M.intl.string(M.t['0efVPz']);
        case x.Xh.PREMIUM_YEAR_TIER_0:
            return t ? M.intl.format(M.t.eqRhCw, { duration: r }) : n ? M.intl.string(M.t.UvzqY2) : M.intl.string(M.t.eoVuBg);
        case x.Xh.PREMIUM_MONTH_TIER_1:
            return n ? M.intl.string(M.t['g/dH5u']) : M.intl.string(M.t['7O6qSk']);
        case x.Xh.PREMIUM_YEAR_TIER_1:
            return n ? M.intl.string(M.t.pdZJam) : M.intl.string(M.t.Md5xbm);
        case x.Xh.PREMIUM_MONTH_TIER_2:
            return t ? M.intl.format(M.t.aI6QX1, { duration: r }) : n ? M.intl.string(M.t.SmVbHR) : M.intl.string(M.t.FKYNCw);
        case x.Xh.PREMIUM_YEAR_TIER_2:
            return t ? M.intl.format(M.t['1wBcPj'], { duration: r }) : n ? M.intl.string(M.t.JIq4Oz) : M.intl.string(M.t['cfu/5e']);
        case x.Xh.PREMIUM_3_MONTH_TIER_2:
            return M.intl.string(M.t.wCbINj);
        case x.Xh.PREMIUM_6_MONTH_TIER_2:
            return M.intl.string(M.t['e3/Ara']);
        case x.Xh.PREMIUM_MONTH_GUILD:
            return n ? M.intl.string(M.t['6ZR3Bw']) : M.intl.string(M.t.h80cx8);
        case x.Xh.PREMIUM_YEAR_GUILD:
            return n ? M.intl.string(M.t.YDpAzc) : M.intl.string(M.t.ZHkls7);
        case x.Xh.PREMIUM_3_MONTH_GUILD:
            return M.intl.string(M.t.EZHHBw);
        case x.Xh.PREMIUM_6_MONTH_GUILD:
            return M.intl.string(M.t.X2KDOz);
        case x.Xh.PREMIUM_MONTH_LEGACY:
            return M.intl.string(M.t['PD6k7+']);
        case x.Xh.PREMIUM_YEAR_LEGACY:
            return M.intl.string(M.t.LtJgTE);
    }
    let i = Error('Unsupported plan');
    throw ((0, b.q2)(i, { tags: { planId: e } }), i);
}
function z(e) {
    switch (e) {
        case x.Si.TIER_0:
            return M.intl.string(M.t['t9uG/v']);
        case x.Si.TIER_1:
            return M.intl.string(M.t['FSOz7+']);
        case x.Si.TIER_2:
            return M.intl.string(M.t['lG6a5+']);
    }
    let t = Error('Unsupported sku');
    throw ((0, b.q2)(t, { tags: { skuId: e } }), t);
}
function q(e) {
    switch (e) {
        case x.Xh.PREMIUM_MONTH_TIER_0:
        case x.Xh.PREMIUM_YEAR_TIER_0:
            return M.intl.string(M.t['t9uG/v']);
        case x.Xh.PREMIUM_MONTH_TIER_1:
        case x.Xh.PREMIUM_YEAR_TIER_1:
            return M.intl.string(M.t['FSOz7+']);
        case x.Xh.PREMIUM_MONTH_TIER_2:
        case x.Xh.PREMIUM_3_MONTH_TIER_2:
        case x.Xh.PREMIUM_6_MONTH_TIER_2:
        case x.Xh.PREMIUM_YEAR_TIER_2:
            return M.intl.string(M.t['lG6a5+']);
    }
    let t = Error('Unsupported plan');
    throw ((0, b.q2)(t, { tags: { planId: e } }), t);
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case x.Xh.PREMIUM_MONTH_TIER_0:
        case x.Xh.PREMIUM_YEAR_TIER_0:
            return t ? 'Basic' : 'Nitro Basic';
        case x.Xh.PREMIUM_MONTH_TIER_1:
        case x.Xh.PREMIUM_YEAR_TIER_1:
            return t ? 'Classic' : 'Nitro Classic';
        case x.Xh.PREMIUM_MONTH_TIER_2:
        case x.Xh.PREMIUM_YEAR_TIER_2:
        case x.Xh.PREMIUM_3_MONTH_TIER_2:
        case x.Xh.PREMIUM_6_MONTH_TIER_2:
            return 'Nitro';
    }
    let n = Error('Unsupported plan');
    throw ((0, b.q2)(n, { tags: { planId: e } }), n);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case x.p9.TIER_0:
            return t ? 'Basic' : M.intl.string(M.t['t9uG/v']);
        case x.p9.TIER_1:
            return t ? 'Classic' : M.intl.string(M.t['FSOz7+']);
        case x.p9.TIER_2:
            return M.intl.string(M.t['lG6a5+']);
    }
}
function J(e) {
    var t, n, r, i, a, s, o, l, u, d, _, h, p;
    let { subscription: m, planId: g, price: v, includePremiumGuilds: I, hasDiscountApplied: S, activeDiscountInfo: T, renewalInvoicePreview: b, hasFractionalPremiumWithSub: A } = e,
        N = x.GP[g],
        C = ek(Z(N.id), N.interval),
        R = ep(m) || (null == m.paymentSourceId && !m.isPurchasedExternally && !(null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium())),
        O = null != v,
        L = m.status === D.O0b.UNPAID && null !== m.latestInvoice && (null === (n = m.latestInvoice) || void 0 === n ? void 0 : n.status) === D.hUK.OPEN,
        w = R ? D.O0b.CANCELED : L ? D.O0b.UNPAID : m.status,
        P = null === (a = null !== (i = null == b ? void 0 : b.taxInclusive) && void 0 !== i ? i : null === (r = m.latestInvoice) || void 0 === r ? void 0 : r.taxInclusive) || void 0 === a || a,
        k = x.cb + (I ? ei(m.additionalPlans) : 0),
        U = O ? (P ? M.intl.format(M.t['cd+hqK'], { price: v }) : M.intl.format(M.t.NUkcpK, { price: v })) : M.intl.string(M.t.zYx3Y2),
        G = O ? (P ? M.intl.format(M.t.VsKcFB, { price: v }) : M.intl.format(M.t.hJ5xER, { price: v })) : M.intl.string(M.t['8rSipK']),
        B = O
            ? P
                ? M.intl.format(M.t['jRy6/P'], {
                      price: v,
                      num: k
                  })
                : M.intl.format(M.t.tTNE8P, {
                      price: v,
                      num: k
                  })
            : M.intl.format(M.t['U+z/HB'], { num: k });
    switch (g) {
        case x.Xh.PREMIUM_MONTH_TIER_0:
        case x.Xh.PREMIUM_YEAR_TIER_0:
            switch (w) {
                case D.O0b.CANCELED:
                    return O ? (P ? M.intl.format(M.t['USi/nZ'], { price: v }) : M.intl.format(M.t['FS//l5'], { price: v })) : M.intl.string(M.t.JshLzs);
                case D.O0b.ACCOUNT_HOLD:
                    return O ? (P ? M.intl.format(M.t['5mv+2t'], { price: v }) : M.intl.format(M.t.nkAEfX, { price: v })) : M.intl.format(M.t.SsLIXV, {});
                case D.O0b.UNPAID:
                    return M.intl.format(M.t.cmkbFB, {});
                case D.O0b.PAUSE_PENDING:
                    let F = null != m.pauseEndsAt ? c()(m.pauseEndsAt).diff(m.currentPeriodEnd, 'days') : null;
                    return null != F
                        ? M.intl.format(M.t.WUfODw, {
                              pauseDate: m.currentPeriodEnd,
                              pauseDuration: F
                          })
                        : M.intl.format(M.t.VlWufn, { pauseDate: m.currentPeriodEnd });
                case D.O0b.PAUSED:
                    if (A) return U;
                    return M.intl.format(M.t['6RTdZG'], { resumeDate: null !== (s = m.pauseEndsAt) && void 0 !== s ? s : void 0 });
                case D.O0b.PAST_DUE:
                    return M.intl.format(M.t['d+0vws'], {
                        endDate: (0, y.vc)(eu(m).expiresDate, 'LL'),
                        onClick: () => {
                            (0, f.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return U;
            }
        case x.Xh.PREMIUM_MONTH_TIER_1:
        case x.Xh.PREMIUM_YEAR_TIER_1:
            switch (w) {
                case D.O0b.CANCELED:
                    return O ? (P ? M.intl.format(M.t.cXy8Bg, { price: v }) : M.intl.format(M.t['C/XsHh'], { price: v })) : M.intl.string(M.t.K6tYFR);
                case D.O0b.ACCOUNT_HOLD:
                    return O ? (P ? M.intl.format(M.t.HBkIBg, { price: v }) : M.intl.format(M.t.ZsO1S0, { price: v })) : M.intl.format(M.t['0+/WHx'], {});
                case D.O0b.UNPAID:
                    return M.intl.format(M.t.McIzws, {});
                case D.O0b.PAUSE_PENDING:
                    let V = null != m.pauseEndsAt ? c()(m.pauseEndsAt).diff(m.currentPeriodEnd, 'days') : null;
                    return null != V
                        ? M.intl.format(M.t.WUfODw, {
                              pauseDate: m.currentPeriodEnd,
                              pauseDuration: V
                          })
                        : M.intl.format(M.t.VlWufn, { pauseDate: m.currentPeriodEnd });
                case D.O0b.PAUSED:
                    if (A) return G;
                    return M.intl.format(M.t['6RTdZG'], { resumeDate: null !== (o = m.pauseEndsAt) && void 0 !== o ? o : void 0 });
                case D.O0b.PAST_DUE:
                    return M.intl.format(M.t['d+0vws'], {
                        endDate: (0, y.vc)(eu(m).expiresDate, 'LL'),
                        onClick: () => {
                            (0, f.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return G;
            }
        case x.Xh.PREMIUM_MONTH_TIER_2:
        case x.Xh.PREMIUM_YEAR_TIER_2:
        case x.Xh.PREMIUM_3_MONTH_TIER_2:
        case x.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (w) {
                case D.O0b.CANCELED:
                    return O
                        ? P
                            ? M.intl.format(M.t.xoFgRk, {
                                  price: v,
                                  num: k
                              })
                            : M.intl.format(M.t.nXdbKi, {
                                  price: v,
                                  num: k
                              })
                        : M.intl.format(M.t.EcSdRE, { num: k });
                case D.O0b.ACCOUNT_HOLD:
                    return O
                        ? P
                            ? M.intl.format(M.t['5C/0QE'], {
                                  price: v,
                                  num: k
                              })
                            : M.intl.format(M.t.xfYkho, {
                                  price: v,
                                  num: k
                              })
                        : M.intl.format(M.t.ivjxcn, { num: k });
                case D.O0b.UNPAID:
                    return M.intl.format(M.t['0HopYW'], { num: k });
                case D.O0b.PAUSE_PENDING:
                    let j = null != m.pauseEndsAt ? c()(m.pauseEndsAt).diff(m.currentPeriodEnd, 'days') : null;
                    return null != j
                        ? M.intl.format(M.t.WUfODw, {
                              pauseDate: m.currentPeriodEnd,
                              pauseDuration: j
                          })
                        : M.intl.format(M.t.VlWufn, { pauseDate: m.currentPeriodEnd });
                case D.O0b.PAUSED:
                    if (A) return B;
                    return M.intl.format(M.t['6RTdZG'], { resumeDate: null !== (l = m.pauseEndsAt) && void 0 !== l ? l : void 0 });
                case D.O0b.BILLING_RETRY:
                    return M.intl.format(M.t['IlJ/HR'], { endDate: c()(m.currentPeriodStart).add(x.A5, 'days').toDate() });
                case D.O0b.PAST_DUE:
                    return M.intl.format(M.t['d+0vws'], {
                        endDate: (0, y.vc)(eu(m).expiresDate, 'LL'),
                        onClick: () => {
                            (0, f.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return S
                        ? g === x.Xh.PREMIUM_YEAR_TIER_2
                            ? M.intl.format(M.t['+qqh6u'], {
                                  percent: null !== (u = null == T ? void 0 : T.percentage) && void 0 !== u ? u : x.Bo,
                                  regularPrice: C
                              })
                            : P
                              ? M.intl.formatToPlainString(M.t['3Ziutb'], {
                                    percent: null !== (d = null == T ? void 0 : T.percentage) && void 0 !== d ? d : x.M_,
                                    regularPrice: C,
                                    numMonths: null !== (_ = null == T ? void 0 : T.duration) && void 0 !== _ ? _ : x.rt
                                })
                              : M.intl.formatToPlainString(M.t['G6+XOT'], {
                                    percent: null !== (h = null == T ? void 0 : T.percentage) && void 0 !== h ? h : x.M_,
                                    regularPrice: C,
                                    numMonths: null !== (p = null == T ? void 0 : T.duration) && void 0 !== p ? p : x.rt
                                })
                        : B;
            }
        default:
            throw Error('Invalid planId '.concat(g));
    }
}
function $(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: i = !1, hasDiscountApplied: a = !1, activeDiscountInfo: s, hasFractionalPremiumWithSub: o = !1 } = e,
        u = S.Z.get(r);
    return (
        l()(null != u, 'Missing plan'),
        J({
            subscription: n,
            planId: u.id,
            price: (function (e, t, n) {
                let r = e.invoiceItems.find((e) => {
                        let { subscriptionPlanId: t } = e;
                        return t === n.id;
                    }),
                    i =
                        null == r
                            ? F(n.id, !1, !1, {
                                  paymentSourceId: t.paymentSourceId,
                                  currency: t.currency
                              }).amount
                            : r.amount;
                return (0, O.og)((0, O.T4)(i, e.currency), n.interval, n.intervalCount);
            })(t, n, u),
            includePremiumGuilds: i,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: o
        })
    );
}
function ee(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, g.Q0)(t) ? null : K(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return x.Z1.has(t);
                  }),
        a = (null == i ? void 0 : i.planId) === x.Xh.PREMIUM_MONTH_GUILD ? M.t.Pi5yMD : (null == i ? void 0 : i.planId) === x.Xh.PREMIUM_YEAR_GUILD ? M.t.Pi5yMD : null,
        s = null != a ? M.intl.formatToPlainString(a, { num: null == i ? void 0 : i.quantity }) : void 0;
    if (null != r && null != s)
        return M.intl.formatToPlainString(M.t.FN5T9v, {
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
    let u = void 0 !== o && t === x.GP[o].skuId ? o : void 0;
    void 0 === u && l && !a && (u = x.IW[t]), s && !a && (void 0 === o || (l && x.No.has(o))) && m.k.trackExposure({ location: 'de805e_1' });
    let c = [];
    switch (t) {
        case x.Si.TIER_0:
            c = [x.Xh.PREMIUM_YEAR_TIER_0, x.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case x.Si.TIER_1:
            c = [x.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case x.Si.TIER_2:
            let d = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (x.o4.has(e)) {
                    let t = x.GP[e];
                    d = [...x.o4].filter((e) => {
                        let n = x.GP[e];
                        return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === x.Si.TIER_2;
                    });
                } else d = [];
            }
            c = [x.Xh.PREMIUM_YEAR_TIER_2, ...d, x.Xh.PREMIUM_MONTH_TIER_2];
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
    let t = x.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function er(e) {
    var t;
    return null == e ? G.ALL : null !== (t = G[e]) && void 0 !== t ? t : [];
}
function ei(e) {
    let t = S.Z.getPlanIdsForSkus([eU(x.Si.GUILD)]);
    l()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let ea = new Set([x.Xh.NONE_MONTH, x.Xh.NONE_3_MONTH, x.Xh.NONE_6_MONTH, x.Xh.NONE_YEAR, x.Xh.PREMIUM_MONTH_TIER_0, x.Xh.PREMIUM_MONTH_TIER_1, x.Xh.PREMIUM_MONTH_TIER_2, x.Xh.PREMIUM_YEAR_TIER_0, x.Xh.PREMIUM_YEAR_TIER_1, x.Xh.PREMIUM_YEAR_TIER_2, x.Xh.PREMIUM_3_MONTH_TIER_2, x.Xh.PREMIUM_6_MONTH_TIER_2]);
function es(e) {
    return ea.has(e);
}
function eo(e) {
    return x.Z1.has(e);
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
        let t = e.isPurchasedViaApple ? x.$7 : x.Ue;
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
        let t = null == e.paymentSourceId ? x.UA : x.zp;
        return {
            days: t,
            expiresDate: c()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function ec(e) {
    if (null == e) return !1;
    let t = I.Z.getPaymentSource(e);
    return null != t && w.Uk.has(t.type);
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
function ef(e) {
    var t, n, r;
    let { subscription: i, user: a, price: s, renewalInvoicePreview: o } = e,
        { planId: u, additionalPlans: c } = i,
        d = S.Z.get(u);
    l()(null != d, 'Missing plan');
    let f = ei(c),
        _ = eg(i.planId, i.paymentSourceId, i.currency, a).amount * f;
    if (null != o) {
        let e = o.invoiceItems.find((e) => x.Z1.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    s = null != s ? s : (0, O.T4)(_, i.currency);
    let h = null === (r = null !== (n = null == o ? void 0 : o.taxInclusive) && void 0 !== n ? n : null === (t = i.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === r || r;
    if (ed(i))
        return i.isPurchasedViaGoogle
            ? M.intl.format(M.t['3/WTrK'], { quantity: f })
            : h
              ? M.intl.format(M.t['0ozBSE'], {
                    quantity: f,
                    rate: (0, O.og)(s, d.interval, d.intervalCount)
                })
              : M.intl.format(M.t['yjsv/v'], {
                    quantity: f,
                    rate: (0, O.og)(s, d.interval, d.intervalCount)
                });
    switch (i.status) {
        case D.O0b.ACCOUNT_HOLD:
            return i.isPurchasedViaGoogle
                ? M.intl.format(M.t.Nlf3nZ, {
                      quantity: f,
                      boostQuantity: f
                  })
                : h
                  ? M.intl.format(M.t.oiRy7u, {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, O.og)(s, d.interval, d.intervalCount)
                    })
                  : M.intl.format(M.t['0QxOAg'], {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, O.og)(s, d.interval, d.intervalCount)
                    });
        case D.O0b.PAUSE_PENDING:
        case D.O0b.PAUSED:
            return M.intl.string(M.t.CduWAg);
        default:
            return i.isPurchasedViaGoogle
                ? M.intl.format(M.t['5iud9v'], { quantity: f })
                : h
                  ? M.intl.format(M.t.eDwrLC, {
                        quantity: f,
                        rate: (0, O.og)(s, d.interval, d.intervalCount)
                    })
                  : M.intl.format(M.t.ijSDcH, {
                        quantity: f,
                        rate: (0, O.og)(s, d.interval, d.intervalCount)
                    });
    }
}
function e_(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? F(e.id, !1, r, t) : Z(e.id, !1, r),
        a = (0, O.T4)(i.amount, i.currency);
    return e.currency !== w.pK.USD && !0 === n && (a = a.concat('*')), a;
}
function eh(e, t, n) {
    let r = e_(e, t, n);
    return (0, O.og)(r, e.interval, e.intervalCount);
}
function ep(e) {
    let { status: t, renewalMutations: n } = e;
    return t === D.O0b.CANCELED || (null != n && (0, g.Q0)(n.planId) && !e.isPurchasedExternally);
}
function em(e) {
    return e === D.O0b.PAST_DUE || e === D.O0b.ACCOUNT_HOLD || e === D.O0b.BILLING_RETRY;
}
function eg(e, t, n, r) {
    let i =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n
                  }
                : {
                      country: v.Z.ipCountryCodeWithFallback,
                      currency: n
                  },
        a = S.Z.get(e);
    if (null == a) {
        let t = Error('Unsupported plan');
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    let s = S.Z.getForSkuAndInterval(eU(x.Si.GUILD), a.interval, a.intervalCount);
    if (null == s) {
        let t = Error('Unsupported plan');
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    return F(s.id, (0, R.I5)(r), !1, i);
}
function eE(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case x.Xh.PREMIUM_MONTH_TIER_0:
                return M.intl.string(M.t['0ggVqK']);
            case x.Xh.PREMIUM_YEAR_TIER_0:
                return M.intl.string(M.t['jm+ZQ0']);
            case x.Xh.PREMIUM_MONTH_TIER_1:
                return M.intl.string(M.t.uph4Jy);
            case x.Xh.PREMIUM_YEAR_TIER_1:
                return M.intl.string(M.t['D/l7Ym']);
            case x.Xh.PREMIUM_MONTH_TIER_2:
                return M.intl.string(M.t['5l1Mub']);
            case x.Xh.PREMIUM_YEAR_TIER_2:
                return M.intl.string(M.t.G0mISU);
        }
    switch (r) {
        case x.Xh.PREMIUM_MONTH_TIER_0:
            return n ? M.intl.string(M.t.cRCCJy) : M.intl.string(M.t['/G3aKy']);
        case x.Xh.PREMIUM_YEAR_TIER_0:
            return n ? M.intl.string(M.t.cRCCJy) : M.intl.string(M.t['2eQpsL']);
        case x.Xh.PREMIUM_MONTH_TIER_1:
            return n ? M.intl.string(M.t.cRCCJy) : M.intl.string(M.t.gueLg4);
        case x.Xh.PREMIUM_YEAR_TIER_1:
            return n ? M.intl.string(M.t.cRCCJy) : M.intl.string(M.t['MhH/vb']);
        case x.Xh.PREMIUM_MONTH_TIER_2:
            return n ? M.intl.string(M.t.cRCCJy) : M.intl.string(M.t.LQVQIi);
        case x.Xh.PREMIUM_YEAR_TIER_2:
            return n ? M.intl.string(M.t.cRCCJy) : M.intl.string(M.t['0nfg19']);
        case x.Xh.PREMIUM_3_MONTH_TIER_2:
        case x.Xh.PREMIUM_6_MONTH_TIER_2:
            return M.intl.formatToPlainString(M.t.BCD4fX, { intervalCount: t.intervalCount });
        case x.Xh.NONE_MONTH:
        case x.Xh.NONE_YEAR:
        case x.Xh.NONE_3_MONTH:
        case x.Xh.NONE_6_MONTH:
        case x.Xh.PREMIUM_MONTH_GUILD:
        case x.Xh.PREMIUM_YEAR_GUILD:
        case x.Xh.PREMIUM_3_MONTH_GUILD:
        case x.Xh.PREMIUM_6_MONTH_GUILD:
            return M.intl.string(M.t.eUEeCg);
    }
    let i = Error('User is purchasing an unsupported plan');
    throw ((0, b.q2)(i, { tags: { planId: r } }), i);
}
function ev(e) {
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
function eI(e) {
    let { intervalType: t = x.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case x.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? M.intl.formatToPlainString(M.t.fRNBRU, { weeks: n / 7 }) : M.intl.formatToPlainString(M.t.EIpHEh, { weeks: n / 7 });
            return r ? M.intl.formatToPlainString(M.t['6Cdzo6'], { days: n }) : M.intl.formatToPlainString(M.t['kbBj/v'], { days: n });
        case x.rV.MONTH:
            return r ? M.intl.formatToPlainString(M.t.x5Mgxc, { months: n }) : M.intl.formatToPlainString(M.t['4SEnCQ'], { months: n });
        case x.rV.YEAR:
            return r ? M.intl.formatToPlainString(M.t['h+63ys'], { years: n }) : M.intl.formatToPlainString(M.t['9DFiHh'], { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eS(e) {
    let { intervalType: t = x.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case x.rV.DAY:
            if (n >= 7 && n % 7 == 0) return M.intl.formatToPlainString(M.t['8awlzM'], { weeks: n / 7 });
            return M.intl.formatToPlainString(M.t.ZsgnLC, { days: n });
        case x.rV.MONTH:
            return M.intl.formatToPlainString(M.t.Y0HCVV, { months: n });
        case x.rV.YEAR:
            return M.intl.formatToPlainString(M.t.ns1zkZ, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eT(e) {
    if (null != e && null != e.subscription_trial) {
        let t = e.subscription_trial;
        return eS({
            intervalType: t.interval,
            intervalCount: t.interval_count
        });
    }
    return null;
}
function eb(e) {
    let { intervalType: t = x.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case x.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? M.intl.formatToPlainString(M.t.iVZYys, { weeks: n / 7 }) : M.intl.formatToPlainString(M.t.EmoBDw, { weeks: n / 7 });
            return r ? M.intl.formatToPlainString(M.t.jzH70d, { days: n }) : M.intl.formatToPlainString(M.t.k2UNz8, { days: n });
        case x.rV.MONTH:
            return r ? M.intl.formatToPlainString(M.t.erUSmJ, { months: n }) : M.intl.formatToPlainString(M.t.kridzM, { months: n });
        case x.rV.YEAR:
            return r ? M.intl.formatToPlainString(M.t.IfYQVF, { years: n }) : M.intl.formatToPlainString(M.t.PClsr6, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function ey(e, t) {
    switch (e) {
        case D.gg$.APPLE_PARTNER:
        case D.gg$.APPLE:
            return P[t];
        case D.gg$.GOOGLE:
            return k[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eA(e, t) {
    return (0, R.I5)(e) || em(null == t ? void 0 : t.status);
}
function eN(e, t) {
    var n, r;
    let i = [],
        a = (null !== (r = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== r ? r : e.items).find((e) => x.dJ.has(e.planId));
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
    return e.filter((e) => !x.dJ.has(e.planId));
}
function eR(e, t, n, r) {
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
function eO(e, t) {
    return eR(e, t, 1, x.dJ);
}
function eD(e, t, n) {
    return eR(e, n, t, x.Z1);
}
function eL(e) {
    var t;
    let n = null !== (t = e.find((e) => !('id' in e))) && void 0 !== t ? t : e.find((e) => x.dJ.has(e.planId));
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
function ex(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = x.a1[e].fileSize;
    return (0, A.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function ew(e) {
    return null == e ? null : e.items.find((e) => x.Z1.has(e.planId));
}
function eM(e) {
    let t = null != e ? B(e) : null;
    return null != t ? en(t.planId) : null;
}
function eP(e) {
    if (null != e) {
        let t = B(e);
        if (null != t) return W(t.planId);
    }
}
function ek(e, t) {
    let n = (0, O.T4)(e.amount, e.currency),
        r = Y(t);
    return ''.concat(n, '/').concat(r);
}
function eU(e) {
    return e;
}
function eG(e) {
    return 'isNitroLocked' in e;
}
function eB(e) {
    return null != e && x.OT.includes(e) ? 1 : 2;
}
function eZ(e) {
    return e.reduce((e, t) => {
        let [n, r] = x.Cx[t.skuId],
            i = 1;
        switch (n) {
            case x.Se.HOUR:
                i = 1;
                break;
            case x.Se.DAY:
                i = 24;
        }
        return e + i * r;
    }, 0);
}
t.ZP = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < 2592000000,
    isPremiumAtLeast: R.yd,
    isPremium: R.I5,
    isPremiumExactly: R.M5,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: F,
    getDefaultPrice: Z,
    getInterval: function (e) {
        let t = x.GP[e];
        if (null != t)
            return {
                intervalType: t.interval,
                intervalCount: t.intervalCount
            };
        let n = Error('Unsupported plan');
        throw ((0, b.q2)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: H,
    getIntervalStringAsNoun: Y,
    getPremiumType: W,
    getDisplayName: K,
    getDisplayPremiumType: Q,
    getPremiumPlanOptions: et,
    getUpgradeEligibilities: er,
    getReverseTrialWeeks: eB,
    getPlanDescription: J,
    isPremiumSku: function (e) {
        return e === x.Si.TIER_0 || e === x.Si.TIER_1 || e === x.Si.TIER_2;
    },
    getClosestUpgrade: function (e) {
        let t = x.GP[e];
        if (null == t) throw Error('Unrecognized plan.');
        let { interval: n } = t,
            r = er(e);
        for (let e of Object.keys(x.GP)) {
            let { interval: t } = x.GP[e];
            if (n === t && r.includes(e)) return e;
        }
        return null;
    },
    getIntervalMonths: function (e, t) {
        if (e === x.rV.MONTH) return t;
        if (e === x.rV.YEAR) return 12 * t;
        throw Error(''.concat(e, ' interval subscription period not implemented'));
    },
    getUserMaxFileSize: C.h6,
    getSkuIdForPlan: en,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case x.p9.TIER_0:
                return x.Si.TIER_0;
            case x.p9.TIER_1:
                return x.Si.TIER_1;
            case x.p9.TIER_2:
                return x.Si.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        if (W(e) === x.p9.TIER_2) return x.cb;
        return 0;
    },
    getBillingInformationString: function (e, t) {
        var n, r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
            o =
                arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : {
                          fractionalState: x.a$.NONE,
                          endsAt: c()(0)
                      },
            l = a
                ? (0, O.T4)(
                      t.invoiceItems
                          .filter((e) => x.UD.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      t.currency
                  )
                : (0, O.T4)(t.total, t.currency);
        if (null != e.trialId && x.h8.includes(e.trialId) && null == e.paymentSourceId) return M.intl.format(M.t['7ZS2m5'], { trialEnd: e.currentPeriodEnd });
        if (e.status === D.O0b.CANCELED) return M.intl.format(M.t['Whp/qq'], { endDate: t.subscriptionPeriodStart });
        if (e.status === D.O0b.PAUSE_PENDING)
            return M.intl.format(M.t.uBLUGR, {
                pauseDate: e.currentPeriodEnd,
                resumeDate: null !== (n = e.pauseEndsAt) && void 0 !== n ? n : void 0
            });
        if (e.status === D.O0b.PAUSED)
            return o.fractionalState !== x.a$.NONE
                ? M.intl.format(M.t.Q18lRE, {
                      renewalDate: o.endsAt.toDate(),
                      price: l
                  })
                : null == e.pauseEndsAt
                  ? a
                      ? M.intl.format(M.t.KTYQCg, {
                            planName: M.intl.string(M.t.Ipxkoq),
                            price: l
                        })
                      : M.intl.string(M.t.fMz6Li)
                  : a
                    ? M.intl.format(M.t.zcgtzc, {
                          planName: M.intl.string(M.t.Ipxkoq),
                          resumeDate: e.pauseEndsAt,
                          price: l
                      })
                    : M.intl.format(M.t['V8+l6u'], { resumeDate: e.pauseEndsAt });
        else if (e.status === D.O0b.PAST_DUE) {
            let t = eu(e).expiresDate;
            return (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (t = c()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (i = e.metadata) || void 0 === i ? void 0 : i.apple_grace_period_expires_date) != null && (t = c()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
                ? M.intl.format(M.t.U2hb3d, {
                      endDate: t.toDate(),
                      paymentGatewayName: w.Vz[e.paymentGateway],
                      paymentSourceLink: ey(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : M.intl.format(M.t.qEIzys, {
                      endDate: t.toDate(),
                      price: l
                  });
        } else {
            if (e.status === D.O0b.BILLING_RETRY)
                return M.intl.format(M.t.EMTLOT, {
                    endDate: c()(e.currentPeriodStart).add(x.A5, 'days').toDate(),
                    price: l
                });
            if (e.status === D.O0b.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, N.isAndroid)()
                    ? M.intl.format(M.t.dtcxw8, {
                          endDate: c()(e.currentPeriodStart).add(x.gh, 'days').toDate(),
                          paymentGatewayName: w.Vz[e.paymentGateway],
                          paymentSourceLink: ey(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                      })
                    : M.intl.format(M.t.EMTLOT, {
                          endDate: c()(e.currentPeriodStart).add(x.gh, 'days').toDate(),
                          price: l
                      });
            if (
                (function (e) {
                    return null != e.paymentSourceId && ec(e.paymentSourceId);
                })(e)
            )
                return M.intl.format(M.t.awpB0N, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === D.O0b.UNPAID) return M.intl.format(M.t.CzTKoq, { maxProcessingTimeInDays: x.Rg });
            if (e.isPurchasedExternally)
                return M.intl.format(M.t.ZlWXgY, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: w.Vz[e.paymentGateway],
                    subscriptionManagementLink: ey(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                });
            let n = new Date(t.subscriptionPeriodStart);
            if (s.length > 0) {
                let e = eZ(s);
                n.setHours(n.getHours() + e);
            }
            return a
                ? M.intl.format(M.t.Vl3cEB, {
                      planName: M.intl.string(M.t.Ipxkoq),
                      renewalDate: n,
                      price: l
                  })
                : M.intl.format(M.t.Q18lRE, {
                      renewalDate: n,
                      price: l
                  });
        }
    },
    isSwitchingPlansDisabled: function (e, t) {
        return (null != t && t !== x.a$.NONE) || null != e.renewalMutations || null != e.trialEndsAt || e.status === D.O0b.PAST_DUE;
    },
    getSwitchingPlansDisabledMessage: function (e) {
        let t = null;
        return null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? M.intl.string(M.t['0rzJ4O']) : M.intl.string(M.t['9dLQ09'])), null != e.trialEndsAt && (t = M.intl.string(M.t.a9Mdb2)), t;
    },
    isNoneSubscription: g.Q0,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === D.O0b.CANCELED || e.status === D.O0b.PAUSE_PENDING) return n;
        l()(null != t, 'Expected invoicePreview');
        let r = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return es(t);
        });
        return (n = null == r || (0, g.Q0)(r.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : r.subscriptionPlanId);
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === D.O0b.CANCELED || e.status === D.O0b.PAUSE_PENDING) return n;
        l()(null != t, 'Expected invoicePreview');
        let r = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return es(t);
        });
        return (null == r || (0, g.Q0)(r.subscriptionPlanId)) && (n = D.O0b.CANCELED), n;
    },
    isBaseSubscriptionCanceled: ep,
    getPremiumGuildIntervalPrice: eg,
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
    getBillingReviewSubheader: eE,
    getIntervalForInvoice: ev,
    getPremiumPlanItem: B,
    getGuildBoostPlanItem: ew,
    isBoostOnlySubscription: function (e) {
        return null != e && null == B(e) && null != ew(e);
    },
    getPremiumSkuIdForSubscription: eM,
    getPremiumTypeFromSubscription: eP,
    getPremiumTypeFromSubscriptionRenewalMutations: function (e) {
        if (null != e && null != e.renewalMutations) {
            let t = B(e.renewalMutations);
            if (null != t) return W(t.planId);
        }
    },
    getPremiumGradientColor: function (e) {
        switch (e) {
            case x.p9.TIER_0:
                return L.Rj.PREMIUM_TIER_0;
            case x.p9.TIER_1:
                return L.Rj.PREMIUM_TIER_1;
            case x.p9.TIER_2:
                return L.Rj.PREMIUM_TIER_2;
        }
    },
    getUnactivatedFractionalPremiumHours: eZ,
    castPremiumSubscriptionAsSkuId: eU,
    canUseAnimatedEmojis: function (e) {
        return (0, p.ks)(p.g_, e);
    },
    canUseEmojisEverywhere: function (e) {
        return (0, p.ks)(p.m_, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return (0, p.ks)(p._y, e);
    },
    canUseCustomCallSounds: function (e) {
        return (0, p.ks)(p.tj, e);
    },
    canUploadLargeFiles: function (e) {
        return (0, p.ks)(p.EQ, e);
    },
    canUseBadges: function (e) {
        return (0, p.ks)(p.Pl, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return (0, p.ks)(p.wN, e);
    },
    canEditDiscriminator: function (e) {
        return (0, p.ks)(p._G, e);
    },
    hasBoostDiscount: function (e) {
        return (0, p.ks)(p.j4, e);
    },
    canUseAnimatedAvatar: function (e) {
        return (0, p.ks)(p.lX, e);
    },
    canUseFancyVoiceChannelReactions: function (e) {
        return (0, p.ks)(p.Uw, e);
    },
    canInstallPremiumApplications: function (e) {
        return (0, p.ks)(p.zm, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return (0, p.ks)(p.zZ, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return (0, p.ks)(p.do, e);
    },
    canRedeemPremiumPerks: function (e) {
        return (0, p.ks)(p.ZE, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return (0, p.ks)(p.Ej, e);
    },
    canUsePremiumAppIcons: function (e) {
        return (0, p.ks)(p.Ct, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return (0, p.ks)(p.O1, e);
    },
    canUseClientThemes: function (e) {
        return (0, p.ks)(p.uw, e);
    },
    canStreamQuality: function (e, t) {
        return !!h.Z.hasActiveDemo(d.q.STREAM_HIGH_QUALITY) || ('high' === e ? (0, p.ks)(p.O8, t) : 'mid' === e && (0, p.ks)(p.g7, t));
    },
    hasFreeBoosts: function (e) {
        return (0, p.ks)(p.$0, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return (0, p.ks)(p.ME, e);
    },
    canUseCustomBackgrounds: function (e) {
        return (0, p.ks)(p.AN, e);
    },
    canUseCollectibles: function (e) {
        return (0, p.ks)(p._O, e);
    },
    canUseCustomNotificationSounds: function (e) {
        return (0, p.ks)(p.qH, e);
    },
    formatPriceString: ek,
    StreamQuality: i
});
