n.d(t, {
    Bg: function () {
        return U;
    },
    E5: function () {
        return q;
    },
    Fp: function () {
        return G;
    },
    JT: function () {
        return z;
    },
    L2: function () {
        return Y;
    },
    MY: function () {
        return M;
    },
    Nz: function () {
        return B;
    },
    Q_: function () {
        return k;
    },
    TO: function () {
        return H;
    },
    Z0: function () {
        return w;
    },
    bT: function () {
        return F;
    },
    dM: function () {
        return V;
    },
    dQ: function () {
        return Z;
    },
    e$: function () {
        return W;
    },
    iM: function () {
        return j;
    },
    pO: function () {
        return P;
    },
    xr: function () {
        return r;
    },
    z2: function () {
        return K;
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
    _ = n(626135),
    E = n(823379),
    f = n(358085),
    h = n(74538),
    p = n(226951),
    m = n(73346),
    I = n(981631),
    T = n(474936),
    g = n(689938);
let S = p.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
    A = [S, ...['discordapp.com/gifts', 'discord.com/gifts'].map((e) => p.Z.escape(e))].join('|'),
    N = RegExp('(?: |^|https?://)(?:'.concat(A, ')/([a-z0-9-]+)'), 'gi'),
    v = [...['discord.com/billing/promotions', 'promos.discord.gg'].map((e) => p.Z.escape(e))].join('|'),
    O = RegExp('(?: |^|https?://)(?:'.concat(v, ')/([a-z0-9-]+)'), 'gi'),
    R = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => '['.concat('abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789', ']{').concat(e, '}'))
            .join('-?'),
    C = R(4, 4),
    y = R(4, 6),
    D = R(5, 3),
    L = [C, y, D, '[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}'].join('|'),
    b = new RegExp('^('.concat('WUMP-?', ')?(').concat(L, ')$'));
((i = r || (r = {}))[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.CUSTOM_STYLE = 1)] = 'CUSTOM_STYLE'), (i[(i.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = 'CUSTOM_MESSAGE_EMOJI_SOUNDBOARD');
let M = (e, t) => (s.tq || s.Em ? 0 : null != e || t ? 2 : 1),
    P = (e) => 0 !== M(e);
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return ''
        .concat(e, ':')
        .concat(null != t ? t : '', ':')
        .concat(null != n ? n : '');
}
function w(e) {
    let [t, n, r] = e.split(':');
    return {
        skuId: t,
        subscriptionPlanId: '' === n ? null : n,
        giftStyle: '' !== r && null != r ? Number.parseInt(r) : void 0
    };
}
function x(e) {
    return e.replace(/[^A-Za-z0-9]/g, '');
}
let G = (e) => (null == e ? void 0 : e.type) === I.uaV.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === I.hBH.GIFT,
    k = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = N.exec(e)) && n.size < 3; ) n.add(x(t[1]));
        for (; null != (t = O.exec(e)) && n.size < 3; ) n.add(x(t[1]));
        return Array.from(n);
    };
function B() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null == n || (0, f.isAndroid)() ? ((n = location.host), (e = '/gifts/'.concat(t))) : (e = '/'.concat(t)), ''.concat(location.protocol, '//').concat(n).concat(e);
}
async function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let r = (
            await (0, m.Kb)({
                url: I.ANM.GIFT_CODE_RESOLVE(e),
                query: {
                    with_application: t,
                    with_subscription_plan: n
                },
                oldFormErrors: !0
            })
        ).body;
        return (
            _.default.track(
                I.rMx.GIFT_CODE_RESOLVED,
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
            (_.default.track(I.rMx.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e
            }),
            new l.Z(t))
        );
    }
}
function V(e, t) {
    _.default.track(I.rMx.GIFT_CODE_COPIED, {
        ...(0, u.Z)(t, !1, !1),
        ...e.analyticsData
    });
}
function H(e, t, n, r, i, a, s) {
    return null == n && (r || i || null == e) ? (!s || a || r || i ? (r && (t.isSubscription || null != e) ? I.wZ8.SUCCESS : I.wZ8.CONFIRM) : I.wZ8.OPEN) : I.wZ8.ERROR;
}
function Z(e, t, n) {
    switch (e) {
        case I.wZ8.ERROR:
            return g.Z.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
        case I.wZ8.SUCCESS:
            return t.isSubscription ? g.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({ skuName: n.name }) : g.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
        case I.wZ8.CONFIRM:
        default:
            return t.isSubscription ? g.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({ skuName: n.name }) : g.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM;
    }
}
function Y(e, t, n) {
    switch (e) {
        case I.wZ8.ERROR:
            return g.Z.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
        case I.wZ8.SUCCESS:
            if (__OVERLAY__) return g.Z.Messages.GIFT_CONFIRMATION_BUTTON_NOICE;
            if (t.isSubscription) return g.Z.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS;
            return g.Z.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
        case I.wZ8.OPEN:
            return g.Z.Messages.GIFT_OPEN_PROMPT;
        case I.wZ8.CONFIRM:
        default:
            if (null != n && n) return g.Z.Messages.GIFT_CODE_AUTH_ACCEPT;
            if (null != t.giftStyle) return t.isClaimed ? g.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : g.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE;
            return t.isSubscription ? g.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : g.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM;
    }
}
function j(e) {
    let { step: t, sku: n, libraryApplication: r, error: i, accepted: s, accepting: o, onGoToLibrary: l, subscriptionPlan: u = null } = e;
    switch (t) {
        case I.wZ8.ERROR:
            return W(r, i, s, o, l);
        case I.wZ8.SUCCESS:
            if (null != u) {
                var c;
                return (
                    (c = u),
                    (0, a.EQ)(c)
                        .with(
                            {
                                interval: T.rV.MONTH,
                                premiumSubscriptionType: T.p9.TIER_2
                            },
                            () => g.Z.Messages.PREMIUM_FEATURES_TIER_2.format({ timeInterval: g.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH })
                        )
                        .with(
                            {
                                interval: T.rV.YEAR,
                                premiumSubscriptionType: T.p9.TIER_2
                            },
                            () => g.Z.Messages.PREMIUM_FEATURES_TIER_2.format({ timeInterval: g.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR })
                        )
                        .with(
                            {
                                interval: T.rV.MONTH,
                                premiumSubscriptionType: T.p9.TIER_1
                            },
                            () => g.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY.format({ intervalCount: c.intervalCount })
                        )
                        .with(
                            {
                                interval: T.rV.YEAR,
                                premiumSubscriptionType: T.p9.TIER_1
                            },
                            () => g.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY.format({ intervalCount: c.intervalCount })
                        )
                        .otherwise(() => g.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC)
                );
            }
            return g.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({ skuName: n.name });
        case I.wZ8.CONFIRM:
        default:
            if (null != u)
                return (u.interval === T.rV.MONTH ? g.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : g.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM).format({
                    skuName: n.name,
                    intervalCount: u.intervalCount
                });
            return g.Z.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({ skuName: n.name });
    }
}
function W(e, t, n, r, i) {
    let a = g.Z.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({ onGoToLibrary: i });
    return null != (n || r ? void 0 : e)
        ? a
        : null == t
          ? null
          : (function (e, t) {
                switch (e.code) {
                    case I.evJ.INVALID_GIFT_SELF_REDEMPTION:
                        return g.Z.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
                    case I.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        return g.Z.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
                    case I.evJ.INVALID_GIFT_REDEMPTION_OWNED:
                        return g.Z.Messages.GIFT_ERROR_OWNED;
                    case I.evJ.UNKNOWN_GIFT_CODE:
                        return g.Z.Messages.GIFT_CONFIRMATION_BODY_INVALID;
                    case I.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
                        return g.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({ planName: (0, h.M5)(t, T.p9.TIER_2) ? g.Z.Messages.PREMIUM_TIER_2 : g.Z.Messages.PREMIUM_TIER_1 });
                    case I.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
                        return g.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
                    case I.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
                        return g.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
                    case I.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
                        return g.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
                    case I.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
                        return g.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
                    default:
                        return g.Z.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR;
                }
            })(t, d.default.getCurrentUser());
}
function K(e, t, n) {
    let r = t.applicationId,
        i = e.length > 0 ? e : [r],
        a = i.map((e) => n.getLibraryApplication(r, e, !0)).filter(E.lm);
    return a.length === i.length ? a[0] : null;
}
function z(e) {
    let t = e.trim().split('/').pop().match(b);
    if (null == t) return null;
    let [n, r, i] = t;
    return null == i ? null : i.replace(/-/g, '');
}
let q = (e, t) =>
    (0, o.e7)([c.Z], () => {
        if (null == e || !t) return null;
        let n = c.Z.getGiftCode(e);
        return null == n || '' === n ? null : n;
    });
