n.d(t, {
    B4: function () {
        return el;
    },
    B6: function () {
        return F;
    },
    Bd: function () {
        return ea;
    },
    DU: function () {
        return X;
    },
    Fr: function () {
        return Q;
    },
    GI: function () {
        return ee;
    },
    I: function () {
        return ei;
    },
    J2: function () {
        return P;
    },
    Jf: function () {
        return W;
    },
    KX: function () {
        return en;
    },
    OH: function () {
        return a;
    },
    Rf: function () {
        return Y;
    },
    _Q: function () {
        return er;
    },
    _s: function () {
        return et;
    },
    bA: function () {
        return U;
    },
    e5: function () {
        return i;
    },
    eN: function () {
        return G;
    },
    eQ: function () {
        return ec;
    },
    iO: function () {
        return q;
    },
    kJ: function () {
        return J;
    },
    me: function () {
        return es;
    },
    qI: function () {
        return eu;
    },
    qb: function () {
        return eo;
    },
    t5: function () {
        return z;
    },
    tP: function () {
        return Z;
    },
    uA: function () {
        return K;
    },
    vf: function () {
        return ed;
    },
    z: function () {
        return H;
    },
    z6: function () {
        return $;
    }
}),
    n(47120),
    n(653041),
    n(627341);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(192379),
    c = n(278074),
    d = n(754700),
    f = n(959078),
    _ = n(846519),
    h = n(442837),
    p = n(583434),
    m = n(706454),
    g = n(553795),
    E = n(70956),
    v = n(63063),
    I = n(930153),
    S = n(358085),
    T = n(617136),
    b = n(272008),
    y = n(569984),
    A = n(497505),
    N = n(918701),
    C = n(977156),
    R = n(665430),
    O = n(569743),
    D = n(585500),
    L = n(566078),
    x = n(46140),
    w = n(981631),
    M = n(388032);
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = u.useState(!1),
        r = (0, h.Wu)([y.Z], () => [...y.Z.quests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: a } = (0, h.cj)([y.Z], () => ({
            isFetchingCurrentQuests: y.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: y.Z.lastFetchedCurrentQuests
        })),
        s = (0, C.cB)({ location: x.dr.USE_QUESTS });
    return (
        u.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === a)) && s && !t && !i && (n(!0), (0, b.xw)(), (0, O.Z)({ location: x.dr.USE_QUESTS }) && (0, b.w)(A.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, s, t, i, a]),
        {
            quests: r,
            isFetchingCurrentQuests: i
        }
    );
}
function k(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
((s = r || (r = {}))[(s.DESC = 0)] = 'DESC'), (s[(s.ASC = 1)] = 'ASC');
function U(e) {
    let { quests: t, isFetchingCurrentQuests: n } = P({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = (function (e) {
            let t = u.useRef([]);
            return u.useMemo(() => {
                if (0 === e.length) return [];
                if (t.current.length > 0 && t.current.length === e.length) return t.current;
                let n = e
                    .sort((e, t) => {
                        var n, r, i, a, s, o;
                        let l = !(0, N.zi)(e),
                            u = !(0, N.zi)(t),
                            c = (0, N.Mi)(e, A.jn.QUEST_BAR) || (0, N.Mi)(e, A.jn.QUEST_BAR_V2),
                            d = (0, N.Mi)(t, A.jn.QUEST_BAR) || (0, N.Mi)(t, A.jn.QUEST_BAR_V2),
                            f = (0, N.Mi)(e, A.jn.GIFT_INVENTORY_FOR_YOU),
                            _ = (0, N.Mi)(t, A.jn.GIFT_INVENTORY_FOR_YOU),
                            h = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
                            p = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
                        return l !== u ? (l ? -1 : 1) : c !== d && l && u ? (c ? -1 : 1) : f !== _ ? (f ? -1 : 1) : h !== p ? (h ? -1 : 1) : l && u ? k(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : k(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
                    })
                    .map((e) => e.id);
                return (t.current = n), n;
            }, [e]);
        })(t),
        a = (function (e) {
            let t = u.useMemo(
                    () =>
                        e.filter((e) => {
                            var t, n;
                            let r = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
                            return r && i;
                        }),
                    [e]
                ),
                n = u.useRef([]);
            return u.useMemo(() => {
                if (0 === t.length) return [];
                if (n.current.length > 0 && n.current.length === t.length) return n.current;
                let e = t
                    .sort((e, t) => {
                        var n, r;
                        let i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
                        if (i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null)) return i ? -1 : 1;
                        let a = L.r.build(e.config).rewardsExpireAt;
                        return k(a, L.r.build(t.config).rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return (n.current = e), e;
            }, [t]);
        })(t),
        s = [],
        o = [];
    for (let t of (s = 'all' === e ? i : a)) {
        let e = r.get(t);
        null != e && o.push(e);
    }
    return {
        quests: o,
        isFetchingCurrentQuests: n
    };
}
function G() {
    let e = u.useRef(!1),
        t = (0, h.Wu)([y.Z], () => Array.from(y.Z.claimedQuests.values())),
        n = (0, h.e7)([y.Z], () => y.Z.isFetchingClaimedQuests);
    return (
        u.useEffect(() => {
            !n && !e.current && ((e.current = !0), (0, b.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function B() {
    let { quests: e, isFetchingCurrentQuests: t } = P({ fetchPolicy: 'cache-only' }),
        [n, r] = u.useState(() => new Map(e.map((e) => [e.id, (0, N.zi)(e)])));
    return (
        u.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, N.zi)(t)) null != t && (0, N.zi)(t) && r((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new _.V7(),
                        i = () => {
                            let a = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(a, () => {
                                (0, N.zi)(t) ? r((e) => new Map(e).set(t.id, !0)) : i();
                            }),
                                n.push(e);
                        };
                    i();
                }
            return () => {
                for (let e of n) e.stop();
            };
        }, [e, t]),
        n
    );
}
function Z(e) {
    let t = B();
    return u.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, h.e7)([m.default], () => m.default.locale);
    return u.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function V(e) {
    return (0, h.e7)([y.Z], () => y.Z.isProgressingOnDesktop(e.id));
}
function j(e) {
    return u.useMemo(() => (0, N.Bz)(e), [e]);
}
((o = i || (i = {})).ALL = 'all'), (o.CLAIMED = 'claimed');
function H(e) {
    let t = V(e),
        n = j(e),
        r = (function (e) {
            let t = (0, h.e7)([y.Z], () => y.Z.getOptimisticProgress(e.id, d.X.WATCH_VIDEO));
            return u.useMemo(() => (0, N.BM)(e), [e, t]);
        })(e);
    return t || n || r;
}
let Y = (e) => {
    let t = u.useCallback(() => (0, N.il)(e), [e]),
        [n, r] = u.useState(t()),
        i = u.useCallback(() => r(t()), [t]),
        a = H(e);
    return (
        u.useEffect(() => {
            var t, n, r;
            if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
                i();
                return;
            }
            let s = window.setInterval(() => {
                i();
            }, 1 * E.Z.Millis.SECOND);
            return () => {
                clearInterval(s), i();
            };
        }, [e, a, i]),
        n
    );
};
function W(e) {
    return u.useMemo(() => (0, N.b7)(e), [e]);
}
let K = (e) => {
    let { quest: t, questContent: n } = e,
        r = et({ quest: t });
    return () => {
        r
            ? (0, N.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: T.jZ.CONNECT_CONSOLE_LINK
                  }
              )
            : (0, N.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: T.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                  }
              );
    };
};
function z(e, t, n) {
    let { targetMinutes: r } = Y(e),
        i = W(e),
        a = K({
            quest: e,
            questContent: n
        });
    if ((0, N.zK)(e, x.S7.IN_HOUSE_CONSOLE_QUEST))
        return M.intl.format(M.t.UhuY7u, {
            minutes: r,
            onClick: a
        });
    if ((0, N.$J)(e) && !(0, N.Nj)({ quest: e }))
        return M.intl.format(M.t['l4S+cX'], {
            minutes: r,
            onClick: a,
            gameTitle: L.r.build(e.config).application.name
        });
    if ((0, N.$J)(e))
        return M.intl.format(M.t.Ajlcd3, {
            minutes: r,
            onClick: a,
            gameTitle: L.r.build(e.config).application.name
        });
    if ((0, N.cr)(e)) {
        var s;
        let t = null === (s = e.config.videoMetadata) || void 0 === s ? void 0 : s.messages.videoTitle;
        return null == t ? M.intl.string(M.t['o+e9ys']) : M.intl.formatToPlainString(M.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    let o = M.t['6zWtV1'];
    return (
        (0, N.Nj)({ quest: e }) && (o = M.t['wmOh/v']),
        M.intl.format(o, {
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function q() {
    let { quests: e, isFetchingCurrentQuests: t } = P({ fetchPolicy: 'cache-or-network' }),
        n = B();
    return u.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, N.vR)(t, A.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (i = n.get(t.id)) && void 0 !== i && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, N.zE)(t.userStatus, A.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function Q(e) {
    let t = (0, h.e7)([y.Z], () => y.Z.quests),
        n = u.useMemo(() => (0, N.Jg)(t, e), [e, t]);
    return Z(n) ? null : n;
}
function X(e) {
    var t;
    let n = (0, N.Xv)(e),
        { product: r, isFetching: i } = (0, p.T)(L.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function J(e) {
    return u.useMemo(
        () => ({
            handleComplete: () => (0, b.Wf)(e),
            handleProgress: (t) => (0, b.Wf)(e, t),
            handleResetStatusClick: () => (0, b.eT)(e),
            handleResetDismissibilityClick: () => (0, b.T0)(e),
            handleOverrideDeliveryClick: () => (0, b.EW)(e)
        }),
        [e]
    );
}
function $() {
    let { fetching: e, accounts: t } = (0, h.cj)([g.Z], () => ({
            fetching: g.Z.isFetching(),
            accounts: g.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: i
        } = u.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === w.ABu.XBOX),
                r = e.filter((e) => e.type === w.ABu.PLAYSTATION),
                i = n.concat(r);
            return {
                xboxAccounts: n,
                playstationAccounts: r,
                xboxAndPlaystationAccounts: i
            };
        }, [t]);
    return {
        fetching: e,
        xboxAccounts: n,
        playstationAccounts: r,
        xboxAndPlaystationAccounts: i
    };
}
let ee = (e) => {
        let { questId: t, preview: n, beforeRequest: r, afterRequest: i } = e,
            [a, s] = u.useState([]),
            [o, l] = u.useState(!1),
            c = (0, h.e7)([g.Z], () => g.Z.getAccounts());
        return (
            u.useEffect(() => {
                s((e) => e.filter((e) => e.type !== f.K.EXPIRED_CREDENTIAL));
            }, [c]),
            {
                startConsoleQuest: u.useCallback(async () => {
                    if (o) return;
                    null == r || r(), l(!0);
                    let e = null;
                    try {
                        (e = await (0, b.CS)(t, n)), s(e.errorHints);
                    } finally {
                        var a;
                        l(!1), null == i || i(null !== (a = null == e ? void 0 : e.errorHints) && void 0 !== a ? a : []);
                    }
                }, [o, r, i, n, t]),
                startingConsoleQuest: o,
                errorHints: a
            }
        );
    },
    et = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = $(),
            r = H(t),
            i = 0 === n.length;
        return (0, N.$J)(t) && i && !r;
    },
    en = () => {
        let { xboxAccounts: e, playstationAccounts: t } = $(),
            n = e.length > 0,
            r = t.length > 0,
            i = v.Z.getArticleURL(w.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = v.Z.getArticleURL(w.BhN.QUEST_HOW_TO_XBOX),
            s = M.intl.format(M.t.beN4DA, {
                psHelpdeskArticle: i,
                xboxHelpdeskArticle: a
            }),
            o = M.intl.format(M.t.HVS7np, { helpdeskArticle: r ? i : a });
        return {
            message: (n && !r) || (!n && r) ? o : s,
            xboxURL: a,
            playstationURL: i
        };
    };
function er(e) {
    var t, n, r;
    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        o = Y(e).percentComplete > 0;
    if (s) return 4;
    if (a) return 3;
    if (o) return 2;
    else if (i) return 1;
    else return 0;
}
function ei(e) {
    let t = (0, h.e7)([m.default], () => m.default.locale),
        { percentComplete: n } = Y(e),
        r = W(e),
        i = null != r ? r.completedRatio : n,
        a = 100 * i,
        s = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, I.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: s
    };
}
function ea(e) {
    var t, n;
    let r = Y(e),
        i = (0, N.b7)(e),
        a = (0, D.D)({
            quest: e,
            taskDetails: r,
            location: x.dr.QUEST_HOME_DESKTOP,
            questContent: A.jn.QUEST_HOME_DESKTOP,
            useV2Variants: !0
        }),
        s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = F(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    if (s) return M.intl.formatToPlainString(M.t.lOVr0N, { claimDate: o });
    if (null != i) return i.description;
    if (null != a) return a;
    return null;
}
((l = a || (a = {}))[(l.UNACCEPTED = 0)] = 'UNACCEPTED'), (l[(l.ACCEPTED = 1)] = 'ACCEPTED'), (l[(l.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (l[(l.COMPLETED = 3)] = 'COMPLETED'), (l[(l.CLAIMED = 4)] = 'CLAIMED');
function es(e, t) {
    let [n, r] = (function (e) {
            let t = (0, h.e7)([y.Z], () => y.Z.selectedTaskPlatform(e));
            return [t, u.useCallback((t) => (0, b.OR)(e, t), [e])];
        })(e.id),
        i = u.useMemo(() => (0, N.yH)(e), [e]),
        a = i.includes(x.cd.DESKTOP),
        s = i.includes(x.cd.CONSOLE),
        o = V(e),
        l = j(e),
        f = (0, R.pF)({ location: x.dr.QUESTS_BAR }),
        _ = u.useMemo(
            () =>
                (0, c.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP }, () => x.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP_V2 }, () => x.cd.DESKTOP)
                    .with({ taskType: d.X.WATCH_VIDEO }, () => x.cd.DESKTOP)
                    .with({ taskType: d.X.STREAM_ON_DESKTOP }, () => x.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_XBOX }, () => x.cd.CONSOLE)
                    .with({ taskType: d.X.PLAY_ON_PLAYSTATION }, () => x.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        p = o ? x.cd.DESKTOP : l ? x.cd.CONSOLE : null;
    return [
        u.useMemo(
            () =>
                (0, c.EQ)({
                    lastPlatformProgress: _,
                    currentProgressingPlatform: p,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: x.cd.CONSOLE }, () => A.LI.CONSOLE)
                    .with({ currentProgressingPlatform: x.cd.DESKTOP }, () => A.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: x.cd.CONSOLE
                        },
                        () => A.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: x.cd.DESKTOP
                        },
                        () => A.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: x.cd.CONSOLE
                        },
                        () => A.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: x.cd.DESKTOP
                        },
                        () => A.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (s && a && f ? A.LI.SELECT : s ? A.LI.CONSOLE : A.LI.DESKTOP)
                    )
                    .exhaustive(),
            [s, a, f, _, p, n]
        ),
        i,
        r
    ];
}
function eo(e) {
    var t, n;
    let r = W(e),
        i = Y(e),
        [a] = es(e, i),
        s = Z(e),
        o = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = d.T.DESKTOP.has(i.taskType),
        c = 0 === i.percentComplete,
        f = o && !l && !s && null == r && (u || (c && a === A.LI.DESKTOP)),
        _ = (0, S.isWeb)() && f,
        h = (0, S.isMac)() && i.taskType === d.X.STREAM_ON_DESKTOP && f,
        p = [];
    return h && p.push(M.intl.string(M.t.MFGxFB)), _ && p.push(M.intl.string(M.t.BV6xDg)), p;
}
function el(e) {
    var t;
    return null !== (t = (0, h.e7)([y.Z], () => y.Z.quests).get(e)) && void 0 !== t ? t : null;
}
function eu(e) {
    let { mode: t, questContent: n, questId: r } = e,
        i = u.useRef(null);
    u.useEffect(() => {
        null != r &&
            i.current !== t &&
            ((0, T.Ic)({
                mode: t,
                prevMode: i.current,
                questContent: n,
                questId: r
            }),
            (i.current = t));
    }, [r, n, t]),
        u.useEffect(() => {
            if (null != r)
                return () => {
                    (0, T.Ic)({
                        mode: null,
                        prevMode: i.current,
                        questContent: n,
                        questId: r
                    });
                };
        }, [r, n]);
}
function ec(e) {
    var t, n;
    let r = (0, h.e7)([m.default], () => m.default.locale),
        i = Y(e),
        [a] = es(e, i),
        s = (0, R.pF)({ location: x.dr.QUESTS_BAR });
    if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return M.intl.string(M.t['ij5E//']);
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && i.percentComplete > 0) {
        let e = (0, I.T3)(r, i.percentComplete, { roundingMode: 'floor' });
        return M.intl.formatToPlainString(M.t.lVZaXF, { percent: e });
    }
    return s && a === A.LI.SELECT ? M.intl.string(M.t.EMrUHR) : (0, N.$J)(e) ? M.intl.string(M.t.mOrpXF) : M.intl.string(M.t['7e5k7O']);
}
function ed(e, t, n) {
    var r;
    let i = F(u.useMemo(() => L.r.build(e.config).rewardsExpireAt, [e.config])),
        a = Y(e),
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        o = H(e),
        l = (0, D.D)({
            quest: e,
            location: x.dr.QUESTS_BAR,
            questContent: A.jn.QUEST_BAR_V2,
            taskDetails: a,
            useV2Variants: !0
        });
    if (s) return M.intl.formatToPlainString(M.t.APddvL, { expirationDate: i });
    if (t) return n === A.LI.SELECT ? M.intl.string(M.t.sWUpNz) : l;
    if ((0, N.cr)(e)) return M.intl.string(M.t['o+e9ys']);
    if (a.percentComplete > 0)
        return o
            ? (0, N.AV)({
                  quest: e,
                  taskDetails: a
              })
            : M.intl.string(M.t.mOrpXF);
    return M.intl.string(M.t.S6UUc3);
}
