n.d(t, {
    A3: function () {
        return I;
    },
    FZ: function () {
        return v;
    },
    Je: function () {
        return b;
    },
    KK: function () {
        return F;
    },
    Qi: function () {
        return B;
    },
    Ro: function () {
        return r;
    },
    U2: function () {
        return T;
    },
    Vx: function () {
        return M;
    },
    _k: function () {
        return P;
    },
    _p: function () {
        return C;
    },
    aq: function () {
        return w;
    },
    cP: function () {
        return y;
    },
    e9: function () {
        return N;
    },
    f2: function () {
        return L;
    },
    gZ: function () {
        return G;
    },
    ge: function () {
        return R;
    },
    ig: function () {
        return S;
    },
    nW: function () {
        return A;
    },
    rF: function () {
        return O;
    },
    tb: function () {
        return D;
    },
    tl: function () {
        return V;
    },
    vn: function () {
        return k;
    },
    vx: function () {
        return x;
    },
    yw: function () {
        return Z;
    }
}),
    n(411104),
    n(47120),
    n(724458);
var r,
    i,
    a = n(392711),
    s = n.n(a);
n(913527);
var o = n(274136),
    l = n(179360),
    u = n(314884),
    c = n(78839),
    d = n(424218),
    f = n(823379),
    _ = n(63063),
    h = n(74538),
    p = n(981631),
    m = n(474936),
    g = n(388032);
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
((i = r || (r = {}))[(i.EMOJI = 1)] = 'EMOJI'), (i[(i.AUDIO = 2)] = 'AUDIO'), (i[(i.ANIMATED = 3)] = 'ANIMATED'), (i[(i.CUSTOMIZATION = 4)] = 'CUSTOMIZATION'), (i[(i.UPLOAD = 5)] = 'UPLOAD'), (i[(i.VANITY = 6)] = 'VANITY'), (i[(i.STREAM = 7)] = 'STREAM'), (i[(i.STICKER = 8)] = 'STICKER'), (i[(i.CUSTOM_ROLE_ICON = 11)] = 'CUSTOM_ROLE_ICON'), (i[(i.STAGE_VIDEO = 12)] = 'STAGE_VIDEO'), (i[(i.SOUNDBOARD = 13)] = 'SOUNDBOARD');
let E = [p.Eu4.NONE, p.Eu4.TIER_1, p.Eu4.TIER_2, p.Eu4.TIER_3],
    v = (e, t) => {
        var n;
        return e === p.Eu4.NONE ? p.Eu4.TIER_1 : null === (n = U(t).find((t) => t.tier === e)) || void 0 === n ? void 0 : n.nextTier;
    },
    I = (e, t) => (null != t && t.hasFeature(p.oNc.MORE_STICKERS) && e === p.Eu4.TIER_3 ? o.D.MAX_STICKER_SLOTS : m.$8[e]),
    S = (e) => m.pH[e],
    T = (e, t) => (null != t && t.hasFeature(p.oNc.MORE_SOUNDBOARD) ? 96 : m._k[e]),
    b = (e) => {
        if (e === p.Eu4.NONE) return m._k[e];
        let t = E[E.indexOf(e) - 1];
        return m._k[e] - m._k[t];
    },
    y = (e) => [
        {
            tier: p.Eu4.TIER_1,
            title: g.intl.string(g.t['lK+WOT']),
            perks: [
                {
                    title: g.intl.formatToPlainString(g.t.dnLAws, {
                        adding: m.HO[p.Eu4.TIER_1].limits.emoji - m.HO[p.Eu4.NONE].limits.emoji,
                        total: m.HO[p.Eu4.TIER_1].limits.emoji
                    }),
                    description: g.intl.string(g.t['/Guvxs']),
                    icon: 1
                },
                {
                    title: g.intl.formatToPlainString(g.t['/9p2/v'], {
                        adding: S(p.Eu4.TIER_1),
                        total: I(p.Eu4.TIER_1)
                    }),
                    description: g.intl.string(g.t.JfsnDQ),
                    icon: 8
                },
                {
                    title: g.intl.formatToPlainString(g.t.NRuk5u, {
                        soundCount: b(p.Eu4.TIER_1),
                        totalSoundCount: T(p.Eu4.TIER_1)
                    }),
                    description: g.intl.string(g.t.Oq7OVl),
                    icon: 13
                },
                {
                    title: g.intl.formatToPlainString(g.t.zoT1ZG, { bitrate: m.HO[p.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: g.intl.string(g.t['8a03jo']),
                    icon: 2
                },
                {
                    title: g.intl.string(g.t.h0s84e),
                    description: g.intl.format(g.t['t+0cbm'], {}),
                    icon: 3
                },
                {
                    title: g.intl.string(g.t.vjPGPj),
                    description: g.intl.string(g.t.tG4MMT),
                    icon: 4
                },
                {
                    title: g.intl.string(g.t.cObMZG),
                    description: g.intl.string(g.t['puH/9f']),
                    icon: 7
                }
            ].filter(f.lm)
        },
        {
            tier: p.Eu4.TIER_2,
            title: g.intl.string(g.t['34GpBQ']),
            perks: [
                {
                    title: g.intl.formatToPlainString(g.t.dnLAws, {
                        adding: m.HO[p.Eu4.TIER_2].limits.emoji - m.HO[p.Eu4.TIER_1].limits.emoji,
                        total: m.HO[p.Eu4.TIER_2].limits.emoji
                    }),
                    description: g.intl.string(g.t.fRiNh4),
                    icon: 1
                },
                {
                    title: g.intl.formatToPlainString(g.t['/9p2/v'], {
                        adding: S(p.Eu4.TIER_2),
                        total: I(p.Eu4.TIER_2)
                    }),
                    description: g.intl.string(g.t.t4TM29),
                    icon: 8
                },
                {
                    title: g.intl.formatToPlainString(g.t.NRuk5u, {
                        soundCount: b(p.Eu4.TIER_2),
                        totalSoundCount: T(p.Eu4.TIER_2)
                    }),
                    description: g.intl.string(g.t.pEYlPT),
                    icon: 13
                },
                {
                    title: g.intl.formatToPlainString(g.t.zoT1ZG, { bitrate: m.HO[p.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: g.intl.string(g.t['nzRo/P']),
                    icon: 2
                },
                {
                    title: g.intl.string(g.t['+KhQKC']),
                    description: g.intl.string(g.t.ZWf10N),
                    icon: 4
                },
                {
                    title: g.intl.formatToPlainString(g.t.t95LnJ, { fileSize: (0, d.BU)(m.HO[p.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: g.intl.format(g.t['yvht6+'], {}),
                    icon: 5
                },
                {
                    title: g.intl.string(g.t.bmaoND),
                    description: g.intl.string(g.t.WZW2Bg),
                    icon: 7
                },
                {
                    title: g.intl.string(g.t.BHtqcX),
                    description: g.intl.string(g.t.ukVcER),
                    icon: 11
                },
                e
                    ? {
                          title: g.intl.formatToPlainString(g.t.T8P3TE, { limit: p.eez }),
                          description: g.intl.formatToPlainString(g.t.T8P3TE, { limit: p.eez }),
                          icon: 12
                      }
                    : null
            ].filter(f.lm)
        },
        {
            tier: p.Eu4.TIER_3,
            title: g.intl.string(g.t.P7LdcX),
            perks: [
                {
                    title: g.intl.formatToPlainString(g.t.dnLAws, {
                        adding: m.HO[p.Eu4.TIER_3].limits.emoji - m.HO[p.Eu4.TIER_2].limits.emoji,
                        total: m.HO[p.Eu4.TIER_3].limits.emoji
                    }),
                    description: g.intl.string(g.t.AfJxnZ),
                    icon: 1
                },
                {
                    title: g.intl.formatToPlainString(g.t['/9p2/v'], {
                        adding: S(p.Eu4.TIER_3),
                        total: I(p.Eu4.TIER_3)
                    }),
                    description: g.intl.string(g.t['+ZI4QU']),
                    icon: 8
                },
                {
                    title: g.intl.formatToPlainString(g.t.NRuk5u, {
                        soundCount: b(p.Eu4.TIER_3),
                        totalSoundCount: T(p.Eu4.TIER_3)
                    }),
                    description: g.intl.string(g.t['8omJSU']),
                    icon: 13
                },
                {
                    title: g.intl.formatToPlainString(g.t.zoT1ZG, { bitrate: m.HO[p.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: g.intl.string(g.t.cOkbp6),
                    icon: 2
                },
                {
                    title: g.intl.string(g.t.C2w2cH),
                    description: g.intl.format(g.t['3Reos7'], { helpdeskArticle: _.Z.getArticleURL(p.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: g.intl.formatToPlainString(g.t.t95LnJ, { fileSize: (0, d.BU)(m.HO[p.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: g.intl.format(g.t.IwDqSE, {}),
                    icon: 5
                },
                {
                    title: g.intl.string(g.t.z0GtBA),
                    description: g.intl.string(g.t.v92GNT),
                    icon: 3
                },
                e
                    ? {
                          title: g.intl.formatToPlainString(g.t.T8P3TE, { limit: p.RcX }),
                          description: g.intl.formatToPlainString(g.t.T8P3TE, { limit: p.RcX }),
                          icon: 12
                      }
                    : null
            ].filter(f.lm)
        }
    ];
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case p.Eu4.NONE:
            return n ? g.intl.string(g.t.LcKgJS) : g.intl.string(g.t.mx8j2t);
        case p.Eu4.TIER_1:
            return g.intl.string(g.t.nzXtaW);
        case p.Eu4.TIER_2:
            return g.intl.string(g.t['h33/ub']);
        case p.Eu4.TIER_3:
            return g.intl.string(g.t.BfF6EB);
        default:
            throw Error('Not a valid tier type');
    }
}
function N(e) {
    switch (e) {
        case p.Eu4.NONE:
            return g.intl.string(g.t.LcKgJS);
        case p.Eu4.TIER_1:
            return g.intl.string(g.t.xRjU1d);
        case p.Eu4.TIER_2:
            return g.intl.string(g.t.C7e2Bg);
        case p.Eu4.TIER_3:
            return g.intl.string(g.t.avGxmp);
        default:
            throw Error('Not a valid tier type');
    }
}
let C = s().memoize((e) => (m.HO[p.Eu4.TIER_1].features.includes(e) ? p.Eu4.TIER_1 : m.HO[p.Eu4.TIER_2].features.includes(e) ? p.Eu4.TIER_2 : m.HO[p.Eu4.TIER_3].features.includes(e) ? p.Eu4.TIER_3 : null)),
    R = (e) => {
        if (e === p.Eu4.NONE) return p.Qqv.NONE;
        if (e === p.Eu4.TIER_1) return p.Qqv.TIER_1;
        if (e === p.Eu4.TIER_2) return p.Qqv.TIER_2;
        else if (e === p.Eu4.TIER_3) return p.Qqv.TIER_3;
        return null;
    };
function O(e, t) {
    for (let n of U(t)) if (e >= n.amount) return n.tier;
    return p.Eu4.NONE;
}
function D(e, t) {
    return null == t || (null != e && e >= t);
}
function L(e, t) {
    return D(e.premiumTier, t);
}
function x(e) {
    return s()
        .values(e)
        .filter((e) => e.isAvailable());
}
function w(e) {
    let { fractionalState: t } = e,
        n = c.ZP.getPremiumTypeSubscription();
    !u.Z.hasFetched && (0, l.X8)();
    let r = x(u.Z.boostSlots);
    if ((null == n ? void 0 : n.isPausedOrPausePending) && (t === m.a$.NONE || 0 === r.length)) return g.intl.string(g.t.mOWsFx);
    if (t === m.a$.FP_ONLY) return g.intl.string(g.t['4RgA6O']);
    let { numAvailableGuildBoostSlots: i, numCanceledGuildBoostSlots: a } = Object.values(u.Z.boostSlots).reduce((e, t) => (V(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == n || i > 0) return null;
    if (n.status === p.O0b.PAST_DUE) return g.intl.string(g.t.De4Vm5);
    if (n.status === p.O0b.ACCOUNT_HOLD) return g.intl.string(g.t.JakNQ0);
    if (a > 0) return g.intl.string(g.t.x25mZW);
    if (null == n.renewalMutations) return null;
    let s = h.uV(n.renewalMutations.additionalPlans);
    return h.uV(n.additionalPlans) > s ? g.intl.string(g.t.x25mZW) : g.intl.string(g.t['W/bb8f']);
}
function M(e, t) {
    return P(e, t) > 0;
}
function P(e, t) {
    let n = O(e.length, t),
        r = k(t)[n],
        i = e.filter((e) => null != e.endsAt);
    return r - (e.length - i.length);
}
function k(e) {
    return p.oCV;
}
function U(e) {
    let t = k(e);
    return [
        {
            tier: p.Eu4.TIER_3,
            amount: t[p.Eu4.TIER_3],
            nextTier: null
        },
        {
            tier: p.Eu4.TIER_2,
            amount: t[p.Eu4.TIER_2],
            nextTier: p.Eu4.TIER_3
        },
        {
            tier: p.Eu4.TIER_1,
            amount: t[p.Eu4.TIER_1],
            nextTier: p.Eu4.TIER_2
        }
    ];
}
function G(e, t) {
    let n = P(e, t);
    if (n > 0) {
        let t = e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1)).filter((e) => null != e.endsAt);
        return t[t.length - n].endsAt;
    }
    return null;
}
function B(e, t) {
    let n = S(t),
        r = E.indexOf(t);
    if (-1 === r) return 0;
    let i = E[r - 1],
        a = null != i ? I(i) : 0,
        s = I(t);
    return Math.max(0, n - e.slice(a, s).length);
}
function Z(e, t, n) {
    return -1 === E.indexOf(n) ? 0 : Math.max(0, T(n, e) - t.length);
}
function F(e, t) {
    let n = e.premiumSubscriberCount;
    return Math.max(0, k(e.id)[t] - n);
}
function V(e) {
    var t;
    return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === p.O0b.CANCELED || e.canceled;
}
