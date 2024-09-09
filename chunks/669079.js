n.d(t, {
    Bg: function () {
        return P;
    },
    E5: function () {
        return z;
    },
    Fp: function () {
        return x;
    },
    JT: function () {
        return K;
    },
    L2: function () {
        return Z;
    },
    MY: function () {
        return b;
    },
    Nz: function () {
        return k;
    },
    Q_: function () {
        return G;
    },
    TO: function () {
        return V;
    },
    Z0: function () {
        return U;
    },
    bT: function () {
        return B;
    },
    dM: function () {
        return F;
    },
    dQ: function () {
        return H;
    },
    e$: function () {
        return j;
    },
    iM: function () {
        return Y;
    },
    pO: function () {
        return M;
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
    _ = n(626135),
    E = n(823379),
    f = n(74538),
    h = n(226951),
    p = n(73346),
    m = n(981631),
    I = n(474936),
    T = n(689938);
let g = h.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
    S = [g, ...['discordapp.com/gifts', 'discord.com/gifts'].map((e) => h.Z.escape(e))].join('|'),
    A = RegExp('(?: |^|https?://)(?:'.concat(S, ')/([a-z0-9-]+)'), 'gi'),
    N = [...['discord.com/billing/promotions', 'promos.discord.gg'].map((e) => h.Z.escape(e))].join('|'),
    v = RegExp('(?: |^|https?://)(?:'.concat(N, ')/([a-z0-9-]+)'), 'gi'),
    O = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => '['.concat('abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789', ']{').concat(e, '}'))
            .join('-?'),
    R = O(4, 4),
    C = O(4, 6),
    y = O(5, 3),
    D = [R, C, y, '[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}'].join('|'),
    L = new RegExp('^('.concat('WUMP-?', ')?(').concat(D, ')$'));
((i = r || (r = {}))[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.CUSTOM_STYLE = 1)] = 'CUSTOM_STYLE'), (i[(i.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = 'CUSTOM_MESSAGE_EMOJI_SOUNDBOARD');
let b = (e, t) => (s.tq || s.Em ? 0 : null != e || t ? 2 : 1),
    M = (e) => 0 !== b(e);
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return ''
        .concat(e, ':')
        .concat(null != t ? t : '', ':')
        .concat(null != n ? n : '');
}
function U(e) {
    let [t, n, r] = e.split(':');
    return {
        skuId: t,
        subscriptionPlanId: '' === n ? null : n,
        giftStyle: '' !== r && null != r ? Number.parseInt(r) : void 0
    };
}
function w(e) {
    return e.replace(/[^A-Za-z0-9]/g, '');
}
let x = (e) => (null == e ? void 0 : e.type) === m.uaV.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === m.hBH.GIFT,
    G = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = A.exec(e)) && n.size < 3; ) n.add(w(t[1]));
        for (; null != (t = v.exec(e)) && n.size < 3; ) n.add(w(t[1]));
        return Array.from(n);
    };
function k() {
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
            await (0, p.Kb)({
                url: m.ANM.GIFT_CODE_RESOLVE(e),
                query: {
                    with_application: t,
                    with_subscription_plan: n
                },
                oldFormErrors: !0
            })
        ).body;
        return (
            _.default.track(
                m.rMx.GIFT_CODE_RESOLVED,
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
            (_.default.track(m.rMx.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e
            }),
            new l.Z(t))
        );
    }
}
function F(e, t) {
    _.default.track(m.rMx.GIFT_CODE_COPIED, {
        ...(0, u.Z)(t, !1, !1),
        ...e.analyticsData
    });
}
function V(e, t, n, r, i, a, s) {
    return null == n && (r || i || null == e) ? (!s || a || r || i ? (r && (t.isSubscription || null != e) ? m.wZ8.SUCCESS : m.wZ8.CONFIRM) : m.wZ8.OPEN) : m.wZ8.ERROR;
}
function H(e, t, n) {
    switch (e) {
        case m.wZ8.ERROR:
            return T.Z.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
        case m.wZ8.SUCCESS:
            return t.isSubscription ? T.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({ skuName: n.name }) : T.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
        case m.wZ8.CONFIRM:
        default:
            return t.isSubscription ? T.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({ skuName: n.name }) : T.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM;
    }
}
function Z(e, t, n) {
    switch (e) {
        case m.wZ8.ERROR:
            return T.Z.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
        case m.wZ8.SUCCESS:
            if (__OVERLAY__) return T.Z.Messages.GIFT_CONFIRMATION_BUTTON_NOICE;
            if (t.isSubscription) return T.Z.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS;
            return T.Z.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
        case m.wZ8.OPEN:
            return T.Z.Messages.GIFT_OPEN_PROMPT;
        case m.wZ8.CONFIRM:
        default:
            if (null != n && n) return T.Z.Messages.GIFT_CODE_AUTH_ACCEPT;
            if (null != t.giftStyle) return t.isClaimed ? T.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : T.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE;
            return t.isSubscription ? T.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : T.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM;
    }
}
function Y(e) {
    let { step: t, sku: n, libraryApplication: r, error: i, accepted: s, accepting: o, onGoToLibrary: l, subscriptionPlan: u = null } = e;
    switch (t) {
        case m.wZ8.ERROR:
            return j(r, i, s, o, l);
        case m.wZ8.SUCCESS:
            if (null != u) {
                var c;
                return (
                    (c = u),
                    (0, a.EQ)(c)
                        .with(
                            {
                                interval: I.rV.MONTH,
                                premiumSubscriptionType: I.p9.TIER_2
                            },
                            () => T.Z.Messages.PREMIUM_FEATURES_TIER_2.format({ timeInterval: T.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH })
                        )
                        .with(
                            {
                                interval: I.rV.YEAR,
                                premiumSubscriptionType: I.p9.TIER_2
                            },
                            () => T.Z.Messages.PREMIUM_FEATURES_TIER_2.format({ timeInterval: T.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR })
                        )
                        .with(
                            {
                                interval: I.rV.MONTH,
                                premiumSubscriptionType: I.p9.TIER_1
                            },
                            () => T.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY.format({ intervalCount: c.intervalCount })
                        )
                        .with(
                            {
                                interval: I.rV.YEAR,
                                premiumSubscriptionType: I.p9.TIER_1
                            },
                            () => T.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY.format({ intervalCount: c.intervalCount })
                        )
                        .otherwise(() => T.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC)
                );
            }
            return T.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({ skuName: n.name });
        case m.wZ8.CONFIRM:
        default:
            if (null != u)
                return (u.interval === I.rV.MONTH ? T.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : T.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM).format({
                    skuName: n.name,
                    intervalCount: u.intervalCount
                });
            return T.Z.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({ skuName: n.name });
    }
}
function j(e, t, n, r, i) {
    let a = T.Z.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({ onGoToLibrary: i });
    return null != (n || r ? void 0 : e)
        ? a
        : null == t
          ? null
          : (function (e, t) {
                switch (e.code) {
                    case m.evJ.INVALID_GIFT_SELF_REDEMPTION:
                        return T.Z.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
                    case m.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        return T.Z.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
                    case m.evJ.INVALID_GIFT_REDEMPTION_OWNED:
                        return T.Z.Messages.GIFT_ERROR_OWNED;
                    case m.evJ.UNKNOWN_GIFT_CODE:
                        return T.Z.Messages.GIFT_CONFIRMATION_BODY_INVALID;
                    case m.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
                        return T.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({ planName: (0, f.M5)(t, I.p9.TIER_2) ? T.Z.Messages.PREMIUM_TIER_2 : T.Z.Messages.PREMIUM_TIER_1 });
                    case m.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
                        return T.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
                    case m.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
                        return T.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
                    case m.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
                        return T.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
                    case m.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
                        return T.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
                    default:
                        return T.Z.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR;
                }
            })(t, d.default.getCurrentUser());
}
function W(e, t, n) {
    let r = t.applicationId,
        i = e.length > 0 ? e : [r],
        a = i.map((e) => n.getLibraryApplication(r, e, !0)).filter(E.lm);
    return a.length === i.length ? a[0] : null;
}
function K(e) {
    let t = e.trim().split('/').pop().match(L);
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
