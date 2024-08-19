n.d(t, {
    B6: function () {
        return V;
    },
    Bd: function () {
        return es;
    },
    DU: function () {
        return $;
    },
    EH: function () {
        return B;
    },
    Fr: function () {
        return X;
    },
    GI: function () {
        return et;
    },
    I: function () {
        return ea;
    },
    J2: function () {
        return x;
    },
    Jf: function () {
        return W;
    },
    KX: function () {
        return er;
    },
    OH: function () {
        return a;
    },
    Rf: function () {
        return j;
    },
    _Q: function () {
        return ei;
    },
    _s: function () {
        return en;
    },
    bA: function () {
        return k;
    },
    e5: function () {
        return i;
    },
    iO: function () {
        return q;
    },
    jU: function () {
        return Q;
    },
    kJ: function () {
        return J;
    },
    me: function () {
        return eo;
    },
    qb: function () {
        return el;
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
        return ee;
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
    m = n(553795),
    I = n(70956),
    T = n(63063),
    g = n(930153),
    S = n(358085),
    A = n(617136),
    N = n(272008),
    v = n(569984),
    O = n(497505),
    R = n(918701),
    C = n(796111),
    y = n(977156),
    D = n(31055),
    L = n(665430),
    b = n(585500),
    M = n(566078),
    P = n(46140),
    U = n(981631),
    w = n(689938);
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = u.useState(!1),
        r = (0, f.Wu)([v.Z], () => [...v.Z.quests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: a } = (0, f.cj)([v.Z], () => ({
            isFetchingCurrentQuests: v.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: v.Z.lastFetchedCurrentQuests
        })),
        s = (0, y.cB)({ location: P.dr.USE_QUESTS });
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
function G(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
((s = r || (r = {}))[(s.DESC = 0)] = 'DESC'), (s[(s.ASC = 1)] = 'ASC');
function k(e) {
    let { quests: t, isFetchingCurrentQuests: n } = x({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = (function (e) {
            let t = u.useRef([]);
            return u.useMemo(() => {
                if (0 === e.length) return [];
                if (t.current.length > 0 && t.current.length === e.length) return t.current;
                let n = e
                    .sort((e, t) => {
                        var n, r, i, a, s, o;
                        let l = !(0, R.zi)(e),
                            u = !(0, R.zi)(t),
                            c = (0, R.Mi)(e, O.jn.QUEST_BAR) || (0, R.Mi)(e, O.jn.QUEST_BAR_V2),
                            d = (0, R.Mi)(t, O.jn.QUEST_BAR) || (0, R.Mi)(t, O.jn.QUEST_BAR_V2),
                            _ = (0, R.Mi)(e, O.jn.GIFT_INVENTORY_FOR_YOU),
                            E = (0, R.Mi)(t, O.jn.GIFT_INVENTORY_FOR_YOU),
                            f = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
                            h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
                        return l !== u ? (l ? -1 : 1) : c !== d && l && u ? (c ? -1 : 1) : _ !== E ? (_ ? -1 : 1) : f !== h ? (f ? -1 : 1) : l && u ? G(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : G(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
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
                        let a = M.r.build(e.config).rewardsExpireAt;
                        return G(a, M.r.build(t.config).rewardsExpireAt, 0);
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
function B() {
    let { quests: e, isFetchingCurrentQuests: t } = x({ fetchPolicy: 'cache-only' }),
        [n, r] = u.useState(() => new Map(e.map((e) => [e.id, (0, R.zi)(e)])));
    return (
        u.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, R.zi)(t)) null != t && (0, R.zi)(t) && r((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new E.V7(),
                        i = () => {
                            let a = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(a, () => {
                                (0, R.zi)(t) ? r((e) => new Map(e).set(t.id, !0)) : i();
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
    return (0, f.e7)([v.Z], () => v.Z.isProgressingOnDesktop(e.id));
}
function Z(e) {
    return u.useMemo(() => (0, R.Bz)(e), [e]);
}
function Y(e) {
    let t = H(e),
        n = Z(e);
    return t || n;
}
((o = i || (i = {})).ALL = 'all'), (o.CLAIMED = 'claimed');
let j = (e) => {
    let t = u.useCallback(() => (0, R.il)(e), [e]),
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
            }, 1 * I.Z.Millis.SECOND);
            return () => {
                clearInterval(s), i();
            };
        }, [e, a, i]),
        n
    );
};
function W(e) {
    return u.useMemo(() => (0, R.b7)(e), [e]);
}
let K = (e) => {
    let { quest: t, location: n, questContent: r } = e,
        i = en({ quest: t });
    return () => {
        i
            ? (0, R.gI)(
                  {
                      quest: t,
                      showInline: (0, C.i)({ location: n })
                  },
                  {
                      content: r,
                      ctaContent: A.jZ.CONNECT_CONSOLE_LINK
                  }
              )
            : (0, R.V$)(
                  { quest: t },
                  {
                      content: r,
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
            location: t,
            questContent: n
        });
    if ((0, R.zK)(e, P.S7.IN_HOUSE_CONSOLE_QUEST))
        return w.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
            minutes: r,
            onClick: a
        });
    if ((0, R.$J)(e))
        return w.Z.Messages.QUESTS_CONSOLE_QUEST_TASK_WITH_LINK.format({
            minutes: r,
            onClick: a,
            gameTitle: M.r.build(e.config).application.name
        });
    if (null != i) return i.title;
    let s = w.Z.Messages.QUESTS_STREAM_TASK;
    return (
        (0, R.Nj)({ quest: e }) && (s = w.Z.Messages.QUESTS_PLAY_TASK),
        s.format({
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function q() {
    let { quests: e, isFetchingCurrentQuests: t } = x({ fetchPolicy: 'cache-or-network' }),
        n = B();
    return u.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, R.vR)(t, O.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (i = n.get(t.id)) && void 0 !== i && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, R.zE)(t.userStatus, O.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function Q() {
    let e = q();
    u.useEffect(() => {
        for (let t of e) (0, N.gl)(t.id, O.jn.GIFT_INVENTORY_SETTINGS_BADGE);
    }, [e]);
}
function X(e) {
    let t = (0, D.z)({ location: P.dr.MEMBERS_LIST }),
        n = (0, f.e7)([v.Z], () => (t ? v.Z.quests : null)),
        r = u.useMemo(() => (0, R.Jg)(n, e), [e, n]);
    return F(r) ? null : r;
}
function $(e) {
    var t;
    let n = (0, R.Xv)(e),
        { product: r, isFetching: i } = (0, h.T)(M.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function J(e) {
    return {
        handleComplete: () => (0, N.Wf)(e),
        handleResetStatusClick: () => (0, N.eT)(e),
        handleResetDismissibilityClick: () => (0, N.T0)(e),
        handleOverrideDeliveryClick: () => (0, N.EW)(e)
    };
}
function ee() {
    let { fetching: e, accounts: t } = (0, f.cj)([m.Z], () => ({
            fetching: m.Z.isFetching(),
            accounts: m.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: i
        } = u.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === U.ABu.XBOX),
                r = e.filter((e) => e.type === U.ABu.PLAYSTATION),
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
let et = (e) => {
        let { questId: t, preview: n, beforeRequest: r, afterRequest: i } = e,
            [a, s] = u.useState([]),
            [o, l] = u.useState(!1),
            c = (0, f.e7)([m.Z], () => m.Z.getAccounts());
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
    en = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ee(),
            r = Y(t),
            i = 0 === n.length;
        return (0, R.$J)(t) && i && !r;
    },
    er = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ee(),
            n = e.length > 0,
            r = t.length > 0,
            i = T.Z.getArticleURL(U.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = T.Z.getArticleURL(U.BhN.QUEST_HOW_TO_XBOX),
            s = w.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_MULTI.format({
                psHelpdeskArticle: i,
                xboxHelpdeskArticle: a
            }),
            o = w.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_SINGLE.format({ helpdeskArticle: r ? i : a });
        return {
            message: (n && !r) || (!n && r) ? o : s,
            xboxURL: a,
            playstationURL: i
        };
    };
function ei(e) {
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
function ea(e) {
    let t = (0, f.e7)([p.default], () => p.default.locale),
        { percentComplete: n } = j(e),
        r = W(e),
        i = null != r ? r.completedRatio : n,
        a = 100 * i,
        s = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, g.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: s
    };
}
function es(e) {
    var t, n;
    let r = j(e),
        i = (0, R.b7)(e),
        a = (0, b.D)({
            quest: e,
            taskDetails: r,
            location: P.dr.QUEST_HOME_DESKTOP,
            questContent: O.jn.QUEST_HOME_DESKTOP,
            useV2Variants: !0
        }),
        s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = V(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    if (s) return w.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({ claimDate: o });
    if (null != i) return i.description;
    if (null != a) return a;
    return null;
}
((l = a || (a = {}))[(l.UNACCEPTED = 0)] = 'UNACCEPTED'), (l[(l.ACCEPTED = 1)] = 'ACCEPTED'), (l[(l.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (l[(l.COMPLETED = 3)] = 'COMPLETED'), (l[(l.CLAIMED = 4)] = 'CLAIMED');
function eo(e, t) {
    let [n, r] = (function (e) {
            let t = (0, f.e7)([v.Z], () => v.Z.selectedTaskPlatform(e));
            return [t, u.useCallback((t) => (0, N.OR)(e, t), [e])];
        })(e.id),
        i = u.useMemo(() => (0, R.Nj)({ quest: e }), [e]),
        a = u.useMemo(() => (0, R.$J)(e), [e]),
        s = H(e),
        o = Z(e),
        l = (0, L.p)({ location: P.dr.QUESTS_BAR }),
        _ = u.useMemo(
            () =>
                (0, c.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP }, () => P.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP_V2 }, () => P.cd.DESKTOP)
                    .with({ taskType: d.X.STREAM_ON_DESKTOP }, () => P.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_XBOX }, () => P.cd.CONSOLE)
                    .with({ taskType: d.X.PLAY_ON_PLAYSTATION }, () => P.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        E = s ? P.cd.DESKTOP : o ? P.cd.CONSOLE : null,
        h = u.useMemo(
            () =>
                (0, c.EQ)({
                    lastPlatformProgress: _,
                    currentProgressingPlatform: E,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: P.cd.CONSOLE }, () => O.LI.CONSOLE)
                    .with({ currentProgressingPlatform: P.cd.DESKTOP }, () => O.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: P.cd.CONSOLE
                        },
                        () => O.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: P.cd.DESKTOP
                        },
                        () => O.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: P.cd.CONSOLE
                        },
                        () => O.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: P.cd.DESKTOP
                        },
                        () => O.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (a && i && l ? O.LI.SELECT : a ? O.LI.CONSOLE : O.LI.DESKTOP)
                    )
                    .exhaustive(),
            [a, i, l, _, E, n]
        );
    return [
        h,
        u.useMemo(() => {
            let e = [];
            return i && e.push(P.cd.DESKTOP), a && e.push(P.cd.CONSOLE), e;
        }, [a, i]),
        r
    ];
}
function el(e) {
    var t, n;
    let r = W(e),
        i = j(e),
        [a] = eo(e, i),
        s = F(e),
        o = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = d.T.DESKTOP.has(i.taskType),
        c = 0 === i.percentComplete,
        _ = o && !l && !s && null == r && (u || (c && a === O.LI.DESKTOP)),
        E = (0, S.isWeb)() && _,
        f = (0, S.isMac)() && i.taskType === d.X.STREAM_ON_DESKTOP && _,
        h = [];
    return f && h.push(w.Z.Messages.QUESTS_PROGRESS_MAC_STREAMING_TIP), E && h.push(w.Z.Messages.QUESTS_PROGRESS_WEB_TIP), h;
}
