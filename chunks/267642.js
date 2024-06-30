n.d(t, {
    A3: function () {
        return I;
    },
    FZ: function () {
        return m;
    },
    Je: function () {
        return S;
    },
    KK: function () {
        return B;
    },
    Qi: function () {
        return G;
    },
    Ro: function () {
        return r;
    },
    U2: function () {
        return g;
    },
    Vx: function () {
        return M;
    },
    _k: function () {
        return P;
    },
    _p: function () {
        return O;
    },
    aq: function () {
        return b;
    },
    cP: function () {
        return A;
    },
    e9: function () {
        return v;
    },
    f2: function () {
        return D;
    },
    gZ: function () {
        return x;
    },
    ge: function () {
        return R;
    },
    ig: function () {
        return T;
    },
    nW: function () {
        return N;
    },
    rF: function () {
        return C;
    },
    tb: function () {
        return y;
    },
    tl: function () {
        return F;
    },
    vn: function () {
        return U;
    },
    vx: function () {
        return L;
    },
    yw: function () {
        return k;
    }
}), n(411104), n(47120), n(724458);
var r, i, a = n(392711), o = n.n(a);
n(913527);
var s = n(314884), l = n(78839), u = n(424218), c = n(823379), d = n(63063), _ = n(74538), E = n(981631), f = n(474936), h = n(689938);
Object.freeze({
    1: 1,
    2: 2,
    3: 3,
    4: 6,
    5: 9,
    6: 12,
    7: 15,
    8: 18,
    9: 24
});
(i = r || (r = {}))[i.EMOJI = 1] = 'EMOJI', i[i.AUDIO = 2] = 'AUDIO', i[i.ANIMATED = 3] = 'ANIMATED', i[i.CUSTOMIZATION = 4] = 'CUSTOMIZATION', i[i.UPLOAD = 5] = 'UPLOAD', i[i.VANITY = 6] = 'VANITY', i[i.STREAM = 7] = 'STREAM', i[i.STICKER = 8] = 'STICKER', i[i.CUSTOM_ROLE_ICON = 11] = 'CUSTOM_ROLE_ICON', i[i.STAGE_VIDEO = 12] = 'STAGE_VIDEO', i[i.SOUNDBOARD = 13] = 'SOUNDBOARD';
let p = [
        E.Eu4.NONE,
        E.Eu4.TIER_1,
        E.Eu4.TIER_2,
        E.Eu4.TIER_3
    ], m = (e, t) => {
        var n;
        return e === E.Eu4.NONE ? E.Eu4.TIER_1 : null === (n = w(t).find(t => t.tier === e)) || void 0 === n ? void 0 : n.nextTier;
    }, I = e => f.$8[e], T = e => f.pH[e], g = (e, t) => null != t && t.hasFeature(E.oNc.MORE_SOUNDBOARD) ? 96 : f._k[e], S = e => {
        if (e === E.Eu4.NONE)
            return f._k[e];
        let t = p[p.indexOf(e) - 1];
        return f._k[e] - f._k[t];
    }, A = e => [
        {
            tier: E.Eu4.TIER_1,
            title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
            perks: [
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: f.HO[E.Eu4.TIER_1].limits.emoji - f.HO[E.Eu4.NONE].limits.emoji,
                        total: f.HO[E.Eu4.TIER_1].limits.emoji
                    }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                    icon: 1
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: T(E.Eu4.TIER_1),
                        total: I(E.Eu4.TIER_1)
                    }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                    icon: 8
                },
                {
                    title: h.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: S(E.Eu4.TIER_1),
                        totalSoundCount: g(E.Eu4.TIER_1)
                    }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                    icon: 13
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: f.HO[E.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                    icon: 2
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                    icon: 3
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                    icon: 4
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                    icon: 7
                }
            ].filter(c.lm)
        },
        {
            tier: E.Eu4.TIER_2,
            title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
            perks: [
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: f.HO[E.Eu4.TIER_2].limits.emoji - f.HO[E.Eu4.TIER_1].limits.emoji,
                        total: f.HO[E.Eu4.TIER_2].limits.emoji
                    }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                    icon: 1
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: T(E.Eu4.TIER_2),
                        total: I(E.Eu4.TIER_2)
                    }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                    icon: 8
                },
                {
                    title: h.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: S(E.Eu4.TIER_2),
                        totalSoundCount: g(E.Eu4.TIER_2)
                    }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                    icon: 13
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: f.HO[E.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                    icon: 2
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                    icon: 4
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({ fileSize: (0, u.BU)(f.HO[E.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                    icon: 5
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                    icon: 7
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                    icon: 11
                },
                e ? {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: E.eez }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: E.eez }),
                    icon: 12
                } : null
            ].filter(c.lm)
        },
        {
            tier: E.Eu4.TIER_3,
            title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
            perks: [
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: f.HO[E.Eu4.TIER_3].limits.emoji - f.HO[E.Eu4.TIER_2].limits.emoji,
                        total: f.HO[E.Eu4.TIER_3].limits.emoji
                    }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                    icon: 1
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: T(E.Eu4.TIER_3),
                        total: I(E.Eu4.TIER_3)
                    }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                    icon: 8
                },
                {
                    title: h.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: S(E.Eu4.TIER_3),
                        totalSoundCount: g(E.Eu4.TIER_3)
                    }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                    icon: 13
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: f.HO[E.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                    icon: 2
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({ helpdeskArticle: d.Z.getArticleURL(E.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({ fileSize: (0, u.BU)(f.HO[E.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                    icon: 5
                },
                {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                    icon: 3
                },
                e ? {
                    title: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: E.RcX }),
                    description: h.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: E.RcX }),
                    icon: 12
                } : null
            ].filter(c.lm)
        }
    ];
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
            useLevels: n = !0
        } = t;
    switch (e) {
    case E.Eu4.NONE:
        return n ? h.Z.Messages.PREMIUM_GUILD_TIER_0 : h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
    case E.Eu4.TIER_1:
        return h.Z.Messages.PREMIUM_GUILD_TIER_1;
    case E.Eu4.TIER_2:
        return h.Z.Messages.PREMIUM_GUILD_TIER_2;
    case E.Eu4.TIER_3:
        return h.Z.Messages.PREMIUM_GUILD_TIER_3;
    default:
        throw Error('Not a valid tier type');
    }
}
function v(e) {
    switch (e) {
    case E.Eu4.NONE:
        return h.Z.Messages.PREMIUM_GUILD_TIER_0;
    case E.Eu4.TIER_1:
        return h.Z.Messages.PREMIUM_GUILD_TIER_1_SHORT;
    case E.Eu4.TIER_2:
        return h.Z.Messages.PREMIUM_GUILD_TIER_2_SHORT;
    case E.Eu4.TIER_3:
        return h.Z.Messages.PREMIUM_GUILD_TIER_3_SHORT;
    default:
        throw Error('Not a valid tier type');
    }
}
let O = o().memoize(e => f.HO[E.Eu4.TIER_1].features.includes(e) ? E.Eu4.TIER_1 : f.HO[E.Eu4.TIER_2].features.includes(e) ? E.Eu4.TIER_2 : f.HO[E.Eu4.TIER_3].features.includes(e) ? E.Eu4.TIER_3 : null), R = e => {
        if (e === E.Eu4.NONE)
            return E.Qqv.NONE;
        if (e === E.Eu4.TIER_1)
            return E.Qqv.TIER_1;
        if (e === E.Eu4.TIER_2)
            return E.Qqv.TIER_2;
        else if (e === E.Eu4.TIER_3)
            return E.Qqv.TIER_3;
        return null;
    };
function C(e, t) {
    for (let n of w(t))
        if (e >= n.amount)
            return n.tier;
    return E.Eu4.NONE;
}
function y(e, t) {
    return null == t || null != e && e >= t;
}
function D(e, t) {
    return y(e.premiumTier, t);
}
function L(e) {
    return o().values(e).filter(e => e.isAvailable());
}
function b() {
    let e = l.ZP.getPremiumTypeSubscription();
    if (null == e ? void 0 : e.isPausedOrPausePending)
        return h.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION;
    let {
        numAvailableGuildBoostSlots: t,
        numCanceledGuildBoostSlots: n
    } = Object.values(s.Z.boostSlots).reduce((e, t) => (F(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == e || t > 0)
        return null;
    if (e.status === E.O0b.PAST_DUE)
        return h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
    if (e.status === E.O0b.ACCOUNT_HOLD)
        return h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
    if (n > 0)
        return h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
    if (null == e.renewalMutations)
        return null;
    let r = _.uV(e.renewalMutations.additionalPlans);
    return _.uV(e.additionalPlans) > r ? h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN;
}
function M(e, t) {
    return P(e, t) > 0;
}
function P(e, t) {
    let n = C(e.length, t), r = U(t)[n], i = e.filter(e => null != e.endsAt);
    return r - (e.length - i.length);
}
function U(e) {
    return E.oCV;
}
function w(e) {
    let t = U(e);
    return [
        {
            tier: E.Eu4.TIER_3,
            amount: t[E.Eu4.TIER_3],
            nextTier: null
        },
        {
            tier: E.Eu4.TIER_2,
            amount: t[E.Eu4.TIER_2],
            nextTier: E.Eu4.TIER_3
        },
        {
            tier: E.Eu4.TIER_1,
            amount: t[E.Eu4.TIER_1],
            nextTier: E.Eu4.TIER_2
        }
    ];
}
function x(e, t) {
    let n = P(e, t);
    if (n > 0) {
        let t = e.sort((e, t) => null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1).filter(e => null != e.endsAt);
        return t[t.length - n].endsAt;
    }
    return null;
}
function G(e, t) {
    let n = T(t), r = p.indexOf(t);
    if (-1 === r)
        return 0;
    let i = p[r - 1], a = null != i ? I(i) : 0, o = I(t);
    return Math.max(0, n - e.slice(a, o).length);
}
function k(e, t, n) {
    return -1 === p.indexOf(n) ? 0 : Math.max(0, g(n, e) - t.length);
}
function B(e, t) {
    let n = e.premiumSubscriberCount;
    return Math.max(0, U(e.id)[t] - n);
}
function F(e) {
    var t;
    return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === E.O0b.CANCELED || e.canceled;
}
