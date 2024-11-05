n.d(t, {
    Bg: function () {
        return w;
    },
    E5: function () {
        return z;
    },
    Fp: function () {
        return k;
    },
    JT: function () {
        return K;
    },
    L2: function () {
        return j;
    },
    MY: function () {
        return L;
    },
    Nz: function () {
        return G;
    },
    Q_: function () {
        return U;
    },
    TO: function () {
        return F;
    },
    Z0: function () {
        return M;
    },
    bT: function () {
        return B;
    },
    dM: function () {
        return Z;
    },
    dQ: function () {
        return V;
    },
    e$: function () {
        return Y;
    },
    iM: function () {
        return H;
    },
    pO: function () {
        return x;
    },
    xr: function () {
        return r;
    },
    z2: function () {
        return W;
    }
}),
    n(47120),
    n(757143),
    n(627341);
var r,
    i,
    a = n(278074),
    s = n(873546),
    o = n(442837),
    l = n(34756),
    u = n(100159),
    c = n(912788),
    d = n(594174),
    f = n(626135),
    _ = n(823379),
    h = n(74538),
    p = n(226951),
    m = n(73346),
    g = n(981631),
    E = n(474936),
    v = n(388032);
let I = p.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
    S = [I, ...['discordapp.com/gifts', 'discord.com/gifts'].map((e) => p.Z.escape(e))].join('|'),
    T = RegExp('(?: |^|https?://)(?:'.concat(S, ')/([a-z0-9-]+)'), 'gi'),
    b = [...['discord.com/billing/promotions', 'promos.discord.gg'].map((e) => p.Z.escape(e))].join('|'),
    y = RegExp('(?: |^|https?://)(?:'.concat(b, ')(/|(/)?\\?code=)([a-z0-9-]+)'), 'gi'),
    A = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => '['.concat('abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789', ']{').concat(e, '}'))
            .join('-?'),
    N = A(4, 4),
    C = A(4, 6),
    R = A(5, 3),
    O = [N, C, R, '[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}'].join('|'),
    D = new RegExp('^('.concat('WUMP-?', ')?(').concat(O, ')$'));
((i = r || (r = {}))[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.CUSTOM_STYLE = 1)] = 'CUSTOM_STYLE'), (i[(i.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = 'CUSTOM_MESSAGE_EMOJI_SOUNDBOARD');
let L = (e, t) => (s.tq || s.Em ? 0 : null != e || t ? 2 : 1),
    x = (e) => 0 !== L(e);
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return ''
        .concat(e, ':')
        .concat(null != t ? t : '', ':')
        .concat(null != n ? n : '');
}
function M(e) {
    let [t, n, r] = e.split(':');
    return {
        skuId: t,
        subscriptionPlanId: '' === n ? null : n,
        giftStyle: '' !== r && null != r ? Number.parseInt(r) : void 0
    };
}
function P(e) {
    return e.replace(/[^A-Za-z0-9]/g, '');
}
let k = (e) => (null == e ? void 0 : e.type) === g.uaV.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === g.hBH.GIFT,
    U = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = T.exec(e)) && n.size < 3; ) n.add(P(t[1]));
        for (; null != (t = y.exec(e)) && n.size < 3; ) n.add(P(t[t.length - 1]));
        return Array.from(n);
    };
function G() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? (e = '/'.concat(t)) : ((n = location.host), (e = '/gifts/'.concat(t))), ''.concat(location.protocol, '//').concat(n).concat(e);
}
async function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let r = (
            await (0, m.Kb)({
                url: g.ANM.GIFT_CODE_RESOLVE(e),
                query: {
                    with_application: t,
                    with_subscription_plan: n
                },
                oldFormErrors: !0
            })
        ).body;
        return (
            f.default.track(
                g.rMx.GIFT_CODE_RESOLVED,
                {
                    resolved: !0,
                    gift_code: r.code,
                    gift_code_max_uses: r.max_uses,
                    sku_id: r.store_listing.sku.id,
                    sku_type: r.store_listing.sku.type,
                    application_id: r.store_listing.sku.application_id,
                    store_title: r.store_listing.sku.name
                },
                { flush: !0 }
            ),
            r
        );
    } catch (t) {
        throw (
            (f.default.track(g.rMx.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e
            }),
            new l.Z(t))
        );
    }
}
function Z(e, t) {
    f.default.track(g.rMx.GIFT_CODE_COPIED, {
        ...(0, u.Z)(t, !1, !1),
        ...e.analyticsData
    });
}
function F(e, t, n, r, i, a, s) {
    return null == n && (r || i || null == e) ? (!s || a || r || i ? (r && (t.isSubscription || null != e) ? g.wZ8.SUCCESS : g.wZ8.CONFIRM) : g.wZ8.OPEN) : g.wZ8.ERROR;
}
function V(e, t, n) {
    switch (e) {
        case g.wZ8.ERROR:
            return v.intl.formatToMarkdownString(v.t.JUvC0t, {});
        case g.wZ8.SUCCESS:
            return t.isSubscription ? v.intl.formatToPlainString(v.t['1C2BGx'], { skuName: n.name }) : v.intl.string(v.t['+BNMcH']);
        case g.wZ8.CONFIRM:
        default:
            return t.isSubscription ? v.intl.formatToPlainString(v.t['2VN4Nz'], { skuName: n.name }) : v.intl.string(v.t.RmamAA);
    }
}
function j(e, t, n) {
    switch (e) {
        case g.wZ8.ERROR:
            return v.intl.string(v.t.w19zb2);
        case g.wZ8.SUCCESS:
            if (__OVERLAY__) return v.intl.string(v.t.zW87EB);
            if (t.isSubscription) return v.intl.string(v.t.ex5TKi);
            return v.intl.string(v.t.OOkjqq);
        case g.wZ8.OPEN:
            return v.intl.string(v.t.F8ktcn);
        case g.wZ8.CONFIRM:
        default:
            if (null != n && n) return v.intl.string(v.t.n6I6k5);
            if (null != t.giftStyle) return t.isClaimed ? v.intl.string(v.t.OgpR0d) : v.intl.string(v.t['2BWscn']);
            return t.isSubscription ? v.intl.string(v.t.wQ1FHx) : v.intl.string(v.t.OgpR0d);
    }
}
function H(e) {
    let { step: t, sku: n, libraryApplication: r, error: i, accepted: s, accepting: o, onGoToLibrary: l, subscriptionPlan: u = null } = e;
    switch (t) {
        case g.wZ8.ERROR:
            return Y(r, i, s, o, l);
        case g.wZ8.SUCCESS:
            if (null != u) {
                var c;
                return (
                    (c = u),
                    (0, a.EQ)(c)
                        .with(
                            {
                                interval: E.rV.MONTH,
                                premiumSubscriptionType: E.p9.TIER_2
                            },
                            () => v.intl.formatToPlainString(v.t['vFfV+P'], { timeInterval: v.intl.string(v.t.FPybU1) })
                        )
                        .with(
                            {
                                interval: E.rV.YEAR,
                                premiumSubscriptionType: E.p9.TIER_2
                            },
                            () => v.intl.formatToPlainString(v.t['vFfV+P'], { timeInterval: v.intl.string(v.t.tfqrho) })
                        )
                        .with(
                            {
                                interval: E.rV.MONTH,
                                premiumSubscriptionType: E.p9.TIER_1
                            },
                            () => v.intl.formatToPlainString(v.t.gjKbFx, { intervalCount: c.intervalCount })
                        )
                        .with(
                            {
                                interval: E.rV.YEAR,
                                premiumSubscriptionType: E.p9.TIER_1
                            },
                            () => v.intl.formatToPlainString(v.t.GIe7Bw, { intervalCount: c.intervalCount })
                        )
                        .otherwise(() => v.intl.string(v.t['5ayf7+']))
                );
            }
            return v.intl.formatToPlainString(v.t['3CPsbm'], { skuName: n.name });
        case g.wZ8.CONFIRM:
        default:
            if (null != u) {
                let e = u.interval === E.rV.MONTH ? v.t.P9eTKi : v.t.d8rUd3;
                return v.intl.format(e, {
                    skuName: n.name,
                    intervalCount: u.intervalCount
                });
            }
            return v.intl.formatToPlainString(v.t.l6Ea4e, { skuName: n.name });
    }
}
function Y(e, t, n, r, i) {
    let a = v.intl.format(v.t['5zyz9/'], { onGoToLibrary: i });
    return null != (n || r ? void 0 : e)
        ? a
        : null == t
          ? null
          : (function (e, t) {
                switch (e.code) {
                    case g.evJ.INVALID_GIFT_SELF_REDEMPTION:
                        return v.intl.string(v.t.wa9h7O);
                    case g.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        return v.intl.string(v.t.Iw2TUV);
                    case g.evJ.INVALID_GIFT_REDEMPTION_OWNED:
                        return v.intl.string(v.t.mdLtb2);
                    case g.evJ.UNKNOWN_GIFT_CODE:
                        return v.intl.string(v.t.roztIi);
                    case g.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
                        return v.intl.formatToPlainString(v.t['4YTHKy'], { planName: (0, h.M5)(t, E.p9.TIER_2) ? v.intl.string(v.t['lG6a5+']) : v.intl.string(v.t['FSOz7+']) });
                    case g.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
                        return v.intl.string(v.t['9i1J39']);
                    case g.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
                        return v.intl.string(v.t.U26WX1);
                    case g.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
                        return v.intl.string(v.t.ypuSd3);
                    case g.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
                        return v.intl.string(v.t.mXMmWF);
                    default:
                        return v.intl.string(v.t['s9+XlJ']);
                }
            })(t, d.default.getCurrentUser());
}
function W(e, t, n) {
    let r = t.applicationId,
        i = e.length > 0 ? e : [r],
        a = i.map((e) => n.getLibraryApplication(r, e, !0)).filter(_.lm);
    return a.length === i.length ? a[0] : null;
}
function K(e) {
    let t = e.trim().split('/').pop().match(D);
    if (null == t) return null;
    let [n, r, i] = t;
    return null == i ? null : i.replace(/-/g, '');
}
let z = (e, t) =>
    (0, o.e7)([c.Z], () => {
        if (null == e || !t) return null;
        let n = c.Z.getGiftCode(e);
        return null == n || '' === n ? null : n;
    });
