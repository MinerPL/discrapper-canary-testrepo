n.d(t, {
    B4: function () {
        return el;
    },
    B6: function () {
        return V;
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
        return w;
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
        return j;
    },
    _Q: function () {
        return er;
    },
    _s: function () {
        return et;
    },
    bA: function () {
        return G;
    },
    e5: function () {
        return i;
    },
    eN: function () {
        return k;
    },
    iO: function () {
        return q;
    },
    kJ: function () {
        return $;
    },
    me: function () {
        return es;
    },
    qb: function () {
        return eo;
    },
    t5: function () {
        return z;
    },
    tP: function () {
        return F;
    },
    uA: function () {
        return K;
    },
    z: function () {
        return Y;
    },
    z6: function () {
        return J;
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
    L = n(665430),
    y = n(569743),
    D = n(585500),
    b = n(566078),
    M = n(46140),
    P = n(981631),
    U = n(689938);
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = u.useState(!1),
        r = (0, f.Wu)([O.Z], () => [...O.Z.quests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: a } = (0, f.cj)([O.Z], () => ({
            isFetchingCurrentQuests: O.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: O.Z.lastFetchedCurrentQuests
        })),
        s = (0, C.cB)({ location: M.dr.USE_QUESTS });
    return (
        u.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === a)) && s && !t && !i && (n(!0), (0, N.xw)(), (0, y.Z)({ location: M.dr.USE_QUESTS }) && (0, N.w)(R.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, s, t, i, a]),
        {
            quests: r,
            isFetchingCurrentQuests: i
        }
    );
}
function x(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
((s = r || (r = {}))[(s.DESC = 0)] = 'DESC'), (s[(s.ASC = 1)] = 'ASC');
function G(e) {
    let { quests: t, isFetchingCurrentQuests: n } = w({ fetchPolicy: 'cache-and-network' }),
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
                        return l !== u ? (l ? -1 : 1) : c !== d && l && u ? (c ? -1 : 1) : _ !== E ? (_ ? -1 : 1) : f !== h ? (f ? -1 : 1) : l && u ? x(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : x(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
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
                        let a = b.r.build(e.config).rewardsExpireAt;
                        return x(a, b.r.build(t.config).rewardsExpireAt, 0);
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
function k() {
    let e = u.useRef(!1),
        t = (0, f.Wu)([O.Z], () => Array.from(O.Z.claimedQuests.values())),
        n = (0, f.e7)([O.Z], () => O.Z.isFetchingClaimedQuests);
    return (
        u.useEffect(() => {
            !n && !e.current && ((e.current = !0), (0, N.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function B() {
    let { quests: e, isFetchingCurrentQuests: t } = w({ fetchPolicy: 'cache-only' }),
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
function F(e) {
    let t = B();
    return u.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, f.e7)([p.default], () => p.default.locale);
    return u.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function H(e) {
    return (0, f.e7)([O.Z], () => O.Z.isProgressingOnDesktop(e.id));
}
function Z(e) {
    return u.useMemo(() => (0, v.Bz)(e), [e]);
}
function Y(e) {
    let t = H(e),
        n = Z(e);
    return t || n;
}
((o = i || (i = {})).ALL = 'all'), (o.CLAIMED = 'claimed');
let j = (e) => {
    let t = u.useCallback(() => (0, v.il)(e), [e]),
        [n, r] = u.useState(t()),
        i = u.useCallback(() => r(t()), [t]),
        a = Y(e);
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
function W(e) {
    return u.useMemo(() => (0, v.b7)(e), [e]);
}
let K = (e) => {
    let { quest: t, questContent: n } = e,
        r = et({ quest: t });
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
function z(e, t, n) {
    let { targetMinutes: r } = j(e),
        i = W(e),
        a = K({
            quest: e,
            questContent: n
        });
    if ((0, v.zK)(e, M.S7.IN_HOUSE_CONSOLE_QUEST))
        return U.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
            minutes: r,
            onClick: a
        });
    if ((0, v.$J)(e))
        return U.Z.Messages.QUESTS_CONSOLE_QUEST_TASK_WITH_LINK.format({
            minutes: r,
            onClick: a,
            gameTitle: b.r.build(e.config).application.name
        });
    if (null != i) return i.title;
    let s = U.Z.Messages.QUESTS_STREAM_TASK;
    return (
        (0, v.Nj)({ quest: e }) && (s = U.Z.Messages.QUESTS_PLAY_TASK),
        s.format({
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function q() {
    let { quests: e, isFetchingCurrentQuests: t } = w({ fetchPolicy: 'cache-or-network' }),
        n = B();
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
function Q(e) {
    let t = (0, f.e7)([O.Z], () => O.Z.quests),
        n = u.useMemo(() => (0, v.Jg)(t, e), [e, t]);
    return F(n) ? null : n;
}
function X(e) {
    var t;
    let n = (0, v.Xv)(e),
        { product: r, isFetching: i } = (0, h.T)(b.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function $(e) {
    return u.useMemo(
        () => ({
            handleComplete: () => (0, N.Wf)(e),
            handleProgress: (t) => (0, N.Wf)(e, t),
            handleResetStatusClick: () => (0, N.eT)(e),
            handleResetDismissibilityClick: () => (0, N.T0)(e),
            handleOverrideDeliveryClick: () => (0, N.EW)(e)
        }),
        [e]
    );
}
function J() {
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
                n = e.filter((e) => e.type === P.ABu.XBOX),
                r = e.filter((e) => e.type === P.ABu.PLAYSTATION),
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
    et = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = J(),
            r = Y(t),
            i = 0 === n.length;
        return (0, v.$J)(t) && i && !r;
    },
    en = () => {
        let { xboxAccounts: e, playstationAccounts: t } = J(),
            n = e.length > 0,
            r = t.length > 0,
            i = T.Z.getArticleURL(P.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = T.Z.getArticleURL(P.BhN.QUEST_HOW_TO_XBOX),
            s = U.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_MULTI.format({
                psHelpdeskArticle: i,
                xboxHelpdeskArticle: a
            }),
            o = U.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_SINGLE.format({ helpdeskArticle: r ? i : a });
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
        o = j(e).percentComplete > 0;
    if (s) return 4;
    if (a) return 3;
    if (o) return 2;
    else if (i) return 1;
    else return 0;
}
function ei(e) {
    let t = (0, f.e7)([p.default], () => p.default.locale),
        { percentComplete: n } = j(e),
        r = W(e),
        i = null != r ? r.completedRatio : n,
        a = 100 * i,
        s = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, S.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: s
    };
}
function ea(e) {
    var t, n;
    let r = j(e),
        i = (0, v.b7)(e),
        a = (0, D.D)({
            quest: e,
            taskDetails: r,
            location: M.dr.QUEST_HOME_DESKTOP,
            questContent: R.jn.QUEST_HOME_DESKTOP,
            useV2Variants: !0
        }),
        s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = V(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    if (s) return U.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({ claimDate: o });
    if (null != i) return i.description;
    if (null != a) return a;
    return null;
}
((l = a || (a = {}))[(l.UNACCEPTED = 0)] = 'UNACCEPTED'), (l[(l.ACCEPTED = 1)] = 'ACCEPTED'), (l[(l.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (l[(l.COMPLETED = 3)] = 'COMPLETED'), (l[(l.CLAIMED = 4)] = 'CLAIMED');
function es(e, t) {
    let [n, r] = (function (e) {
            let t = (0, f.e7)([O.Z], () => O.Z.selectedTaskPlatform(e));
            return [t, u.useCallback((t) => (0, N.OR)(e, t), [e])];
        })(e.id),
        i = u.useMemo(() => (0, v.yH)(e), [e]),
        a = i.includes(M.cd.DESKTOP),
        s = i.includes(M.cd.CONSOLE),
        o = H(e),
        l = Z(e),
        _ = (0, L.pF)({ location: M.dr.QUESTS_BAR }),
        E = u.useMemo(
            () =>
                (0, c.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP }, () => M.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP_V2 }, () => M.cd.DESKTOP)
                    .with({ taskType: d.X.STREAM_ON_DESKTOP }, () => M.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_XBOX }, () => M.cd.CONSOLE)
                    .with({ taskType: d.X.PLAY_ON_PLAYSTATION }, () => M.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        h = o ? M.cd.DESKTOP : l ? M.cd.CONSOLE : null;
    return [
        u.useMemo(
            () =>
                (0, c.EQ)({
                    lastPlatformProgress: E,
                    currentProgressingPlatform: h,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: M.cd.CONSOLE }, () => R.LI.CONSOLE)
                    .with({ currentProgressingPlatform: M.cd.DESKTOP }, () => R.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: M.cd.CONSOLE
                        },
                        () => R.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: M.cd.DESKTOP
                        },
                        () => R.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: M.cd.CONSOLE
                        },
                        () => R.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: M.cd.DESKTOP
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
function eo(e) {
    var t, n;
    let r = W(e),
        i = j(e),
        [a] = es(e, i),
        s = F(e),
        o = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = d.T.DESKTOP.has(i.taskType),
        c = 0 === i.percentComplete,
        _ = o && !l && !s && null == r && (u || (c && a === R.LI.DESKTOP)),
        E = (0, g.isWeb)() && _,
        f = (0, g.isMac)() && i.taskType === d.X.STREAM_ON_DESKTOP && _,
        h = [];
    return f && h.push(U.Z.Messages.QUESTS_PROGRESS_MAC_STREAMING_TIP), E && h.push(U.Z.Messages.QUESTS_PROGRESS_WEB_TIP), h;
}
function el(e) {
    var t;
    return null !== (t = (0, f.e7)([O.Z], () => O.Z.quests).get(e)) && void 0 !== t ? t : null;
}
