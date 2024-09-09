n.d(t, {
    B4: function () {
        return es;
    },
    B6: function () {
        return B;
    },
    Bd: function () {
        return er;
    },
    DU: function () {
        return q;
    },
    Fr: function () {
        return z;
    },
    GI: function () {
        return $;
    },
    I: function () {
        return en;
    },
    J2: function () {
        return U;
    },
    Jf: function () {
        return Y;
    },
    KX: function () {
        return ee;
    },
    OH: function () {
        return a;
    },
    Rf: function () {
        return Z;
    },
    _Q: function () {
        return et;
    },
    _s: function () {
        return J;
    },
    bA: function () {
        return x;
    },
    e5: function () {
        return i;
    },
    iO: function () {
        return K;
    },
    kJ: function () {
        return Q;
    },
    me: function () {
        return ei;
    },
    qb: function () {
        return ea;
    },
    t5: function () {
        return W;
    },
    tP: function () {
        return k;
    },
    uA: function () {
        return j;
    },
    z: function () {
        return H;
    },
    z6: function () {
        return X;
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
    u = n(470079),
    c = n(278074),
    d = n(754700),
    _ = n(959078),
    E = n(846519),
    f = n(442837),
    h = n(583434),
    p = n(706454),
    I = n(553795),
    m = n(70956),
    T = n(63063),
    S = n(930153),
    g = n(358085),
    A = n(617136),
    N = n(272008),
    O = n(569984),
    R = n(497505),
    v = n(918701),
    C = n(977156),
    y = n(665430),
    L = n(585500),
    D = n(566078),
    b = n(46140),
    M = n(981631),
    P = n(689938);
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = u.useState(!1),
        r = (0, f.Wu)([O.Z], () => [...O.Z.quests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: a } = (0, f.cj)([O.Z], () => ({
            isFetchingCurrentQuests: O.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: O.Z.lastFetchedCurrentQuests
        })),
        s = (0, C.cB)({ location: b.dr.USE_QUESTS });
    return (
        u.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === a)) && s && !t && !i && (n(!0), (0, N.xw)());
        }, [e.fetchPolicy, s, t, i, a]),
        {
            quests: r,
            isFetchingCurrentQuests: i
        }
    );
}
function w(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
((s = r || (r = {}))[(s.DESC = 0)] = 'DESC'), (s[(s.ASC = 1)] = 'ASC');
function x(e) {
    let { quests: t, isFetchingCurrentQuests: n } = U({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = (function (e) {
            let t = u.useRef([]);
            return u.useMemo(() => {
                if (0 === e.length) return [];
                if (t.current.length > 0 && t.current.length === e.length) return t.current;
                let n = e
                    .sort((e, t) => {
                        var n, r, i, a, s, o;
                        let l = !(0, v.zi)(e),
                            u = !(0, v.zi)(t),
                            c = (0, v.Mi)(e, R.jn.QUEST_BAR) || (0, v.Mi)(e, R.jn.QUEST_BAR_V2),
                            d = (0, v.Mi)(t, R.jn.QUEST_BAR) || (0, v.Mi)(t, R.jn.QUEST_BAR_V2),
                            _ = (0, v.Mi)(e, R.jn.GIFT_INVENTORY_FOR_YOU),
                            E = (0, v.Mi)(t, R.jn.GIFT_INVENTORY_FOR_YOU),
                            f = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
                            h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
                        return l !== u ? (l ? -1 : 1) : c !== d && l && u ? (c ? -1 : 1) : _ !== E ? (_ ? -1 : 1) : f !== h ? (f ? -1 : 1) : l && u ? w(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : w(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
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
                        let a = D.r.build(e.config).rewardsExpireAt;
                        return w(a, D.r.build(t.config).rewardsExpireAt, 0);
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
    let { quests: e, isFetchingCurrentQuests: t } = U({ fetchPolicy: 'cache-only' }),
        [n, r] = u.useState(() => new Map(e.map((e) => [e.id, (0, v.zi)(e)])));
    return (
        u.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, v.zi)(t)) null != t && (0, v.zi)(t) && r((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new E.V7(),
                        i = () => {
                            let a = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(a, () => {
                                (0, v.zi)(t) ? r((e) => new Map(e).set(t.id, !0)) : i();
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
function k(e) {
    let t = G();
    return u.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, f.e7)([p.default], () => p.default.locale);
    return u.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function F(e) {
    return (0, f.e7)([O.Z], () => O.Z.isProgressingOnDesktop(e.id));
}
function V(e) {
    return u.useMemo(() => (0, v.Bz)(e), [e]);
}
function H(e) {
    let t = F(e),
        n = V(e);
    return t || n;
}
((o = i || (i = {})).ALL = 'all'), (o.CLAIMED = 'claimed');
let Z = (e) => {
    let t = u.useCallback(() => (0, v.il)(e), [e]),
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
            }, 1 * m.Z.Millis.SECOND);
            return () => {
                clearInterval(s), i();
            };
        }, [e, a, i]),
        n
    );
};
function Y(e) {
    return u.useMemo(() => (0, v.b7)(e), [e]);
}
let j = (e) => {
    let { quest: t, questContent: n } = e,
        r = J({ quest: t });
    return () => {
        r
            ? (0, v.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: A.jZ.CONNECT_CONSOLE_LINK
                  }
              )
            : (0, v.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: A.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                  }
              );
    };
};
function W(e, t, n) {
    let { targetMinutes: r } = Z(e),
        i = Y(e),
        a = j({
            quest: e,
            questContent: n
        });
    if ((0, v.zK)(e, b.S7.IN_HOUSE_CONSOLE_QUEST))
        return P.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
            minutes: r,
            onClick: a
        });
    if ((0, v.$J)(e))
        return P.Z.Messages.QUESTS_CONSOLE_QUEST_TASK_WITH_LINK.format({
            minutes: r,
            onClick: a,
            gameTitle: D.r.build(e.config).application.name
        });
    if (null != i) return i.title;
    let s = P.Z.Messages.QUESTS_STREAM_TASK;
    return (
        (0, v.Nj)({ quest: e }) && (s = P.Z.Messages.QUESTS_PLAY_TASK),
        s.format({
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function K() {
    let { quests: e, isFetchingCurrentQuests: t } = U({ fetchPolicy: 'cache-or-network' }),
        n = G();
    return u.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, v.vR)(t, R.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (i = n.get(t.id)) && void 0 !== i && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, v.zE)(t.userStatus, R.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function z(e) {
    let t = (0, f.e7)([O.Z], () => O.Z.quests),
        n = u.useMemo(() => (0, v.Jg)(t, e), [e, t]);
    return k(n) ? null : n;
}
function q(e) {
    var t;
    let n = (0, v.Xv)(e),
        { product: r, isFetching: i } = (0, h.T)(D.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function Q(e) {
    return {
        handleComplete: () => (0, N.Wf)(e),
        handleProgress: (t) => (0, N.Wf)(e, t),
        handleResetStatusClick: () => (0, N.eT)(e),
        handleResetDismissibilityClick: () => (0, N.T0)(e),
        handleOverrideDeliveryClick: () => (0, N.EW)(e)
    };
}
function X() {
    let { fetching: e, accounts: t } = (0, f.cj)([I.Z], () => ({
            fetching: I.Z.isFetching(),
            accounts: I.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: i
        } = u.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === M.ABu.XBOX),
                r = e.filter((e) => e.type === M.ABu.PLAYSTATION),
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
let $ = (e) => {
        let { questId: t, preview: n, beforeRequest: r, afterRequest: i } = e,
            [a, s] = u.useState([]),
            [o, l] = u.useState(!1),
            c = (0, f.e7)([I.Z], () => I.Z.getAccounts());
        return (
            u.useEffect(() => {
                s((e) => e.filter((e) => e.type !== _.K.EXPIRED_CREDENTIAL));
            }, [c]),
            {
                startConsoleQuest: u.useCallback(async () => {
                    if (o) return;
                    null == r || r(), l(!0);
                    let e = null;
                    try {
                        (e = await (0, N.CS)(t, n)), s(e.errorHints);
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
    J = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = X(),
            r = H(t),
            i = 0 === n.length;
        return (0, v.$J)(t) && i && !r;
    },
    ee = () => {
        let { xboxAccounts: e, playstationAccounts: t } = X(),
            n = e.length > 0,
            r = t.length > 0,
            i = T.Z.getArticleURL(M.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = T.Z.getArticleURL(M.BhN.QUEST_HOW_TO_XBOX),
            s = P.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_MULTI.format({
                psHelpdeskArticle: i,
                xboxHelpdeskArticle: a
            }),
            o = P.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_SINGLE.format({ helpdeskArticle: r ? i : a });
        return {
            message: (n && !r) || (!n && r) ? o : s,
            xboxURL: a,
            playstationURL: i
        };
    };
function et(e) {
    var t, n, r;
    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        o = Z(e).percentComplete > 0;
    if (s) return 4;
    if (a) return 3;
    if (o) return 2;
    else if (i) return 1;
    else return 0;
}
function en(e) {
    let t = (0, f.e7)([p.default], () => p.default.locale),
        { percentComplete: n } = Z(e),
        r = Y(e),
        i = null != r ? r.completedRatio : n,
        a = 100 * i,
        s = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, S.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: s
    };
}
function er(e) {
    var t, n;
    let r = Z(e),
        i = (0, v.b7)(e),
        a = (0, L.D)({
            quest: e,
            taskDetails: r,
            location: b.dr.QUEST_HOME_DESKTOP,
            questContent: R.jn.QUEST_HOME_DESKTOP,
            useV2Variants: !0
        }),
        s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = B(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    if (s) return P.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({ claimDate: o });
    if (null != i) return i.description;
    if (null != a) return a;
    return null;
}
((l = a || (a = {}))[(l.UNACCEPTED = 0)] = 'UNACCEPTED'), (l[(l.ACCEPTED = 1)] = 'ACCEPTED'), (l[(l.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (l[(l.COMPLETED = 3)] = 'COMPLETED'), (l[(l.CLAIMED = 4)] = 'CLAIMED');
function ei(e, t) {
    let [n, r] = (function (e) {
            let t = (0, f.e7)([O.Z], () => O.Z.selectedTaskPlatform(e));
            return [t, u.useCallback((t) => (0, N.OR)(e, t), [e])];
        })(e.id),
        i = u.useMemo(() => (0, v.yH)(e), [e]),
        a = i.includes(b.cd.DESKTOP),
        s = i.includes(b.cd.CONSOLE),
        o = F(e),
        l = V(e),
        _ = (0, y.pF)({ location: b.dr.QUESTS_BAR }),
        E = u.useMemo(
            () =>
                (0, c.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP }, () => b.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP_V2 }, () => b.cd.DESKTOP)
                    .with({ taskType: d.X.STREAM_ON_DESKTOP }, () => b.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_XBOX }, () => b.cd.CONSOLE)
                    .with({ taskType: d.X.PLAY_ON_PLAYSTATION }, () => b.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        h = o ? b.cd.DESKTOP : l ? b.cd.CONSOLE : null;
    return [
        u.useMemo(
            () =>
                (0, c.EQ)({
                    lastPlatformProgress: E,
                    currentProgressingPlatform: h,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: b.cd.CONSOLE }, () => R.LI.CONSOLE)
                    .with({ currentProgressingPlatform: b.cd.DESKTOP }, () => R.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: b.cd.CONSOLE
                        },
                        () => R.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: b.cd.DESKTOP
                        },
                        () => R.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: b.cd.CONSOLE
                        },
                        () => R.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: b.cd.DESKTOP
                        },
                        () => R.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (s && a && _ ? R.LI.SELECT : s ? R.LI.CONSOLE : R.LI.DESKTOP)
                    )
                    .exhaustive(),
            [s, a, _, E, h, n]
        ),
        i,
        r
    ];
}
function ea(e) {
    var t, n;
    let r = Y(e),
        i = Z(e),
        [a] = ei(e, i),
        s = k(e),
        o = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = d.T.DESKTOP.has(i.taskType),
        c = 0 === i.percentComplete,
        _ = o && !l && !s && null == r && (u || (c && a === R.LI.DESKTOP)),
        E = (0, g.isWeb)() && _,
        f = (0, g.isMac)() && i.taskType === d.X.STREAM_ON_DESKTOP && _,
        h = [];
    return f && h.push(P.Z.Messages.QUESTS_PROGRESS_MAC_STREAMING_TIP), E && h.push(P.Z.Messages.QUESTS_PROGRESS_WEB_TIP), h;
}
function es(e) {
    var t;
    return null !== (t = (0, f.e7)([O.Z], () => O.Z.quests).get(e)) && void 0 !== t ? t : null;
}
