n.d(t, {
    B6: function () {
        return F;
    },
    Bd: function () {
        return ea;
    },
    DU: function () {
        return X;
    },
    EH: function () {
        return k;
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
        return j;
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
        return G;
    },
    e5: function () {
        return i;
    },
    iO: function () {
        return z;
    },
    jU: function () {
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
        return K;
    },
    tP: function () {
        return B;
    },
    uA: function () {
        return W;
    },
    z: function () {
        return Z;
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
    m = n(553795),
    I = n(70956),
    T = n(63063),
    g = n(930153),
    S = n(617136),
    A = n(272008),
    N = n(569984),
    v = n(497505),
    O = n(918701),
    R = n(796111),
    C = n(977156),
    y = n(31055),
    D = n(665430),
    L = n(585500),
    b = n(566078),
    M = n(46140),
    P = n(981631),
    U = n(689938);
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = u.useState(!1),
        r = (0, f.Wu)([N.Z], () => [...N.Z.quests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: a } = (0, f.cj)([N.Z], () => ({
            isFetchingCurrentQuests: N.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: N.Z.lastFetchedCurrentQuests
        })),
        s = (0, C.cB)({ location: M.dr.USE_QUESTS });
    return (
        u.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === a)) && s && !t && !i && (n(!0), (0, A.xw)());
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
            let t = u.useMemo(
                    () =>
                        e.filter((e) => {
                            var t;
                            return !((null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null);
                        }),
                    [e]
                ),
                n = u.useRef([]);
            return u.useMemo(() => {
                if (0 === t.length) return [];
                if (n.current.length > 0 && n.current.length === t.length) return n.current;
                let e = t
                    .sort((e, t) => {
                        var n, r, i, a, s, o;
                        let l = !(0, O.zi)(e),
                            u = !(0, O.zi)(t),
                            c = (0, O.Mi)(e, v.jn.QUEST_BAR) || (0, O.Mi)(e, v.jn.QUEST_BAR_V2),
                            d = (0, O.Mi)(t, v.jn.QUEST_BAR) || (0, O.Mi)(t, v.jn.QUEST_BAR_V2),
                            _ = (0, O.Mi)(e, v.jn.GIFT_INVENTORY_FOR_YOU),
                            E = (0, O.Mi)(t, v.jn.GIFT_INVENTORY_FOR_YOU),
                            f = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
                            h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
                        return l !== u ? (l ? -1 : 1) : c !== d && l && u ? (c ? -1 : 1) : _ !== E ? (_ ? -1 : 1) : f !== h ? (f ? -1 : 1) : l && u ? x(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : x(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
                    })
                    .map((e) => e.id);
                return (n.current = e), e;
            }, [t]);
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
    for (let t of (s = 'unclaimed' === e ? i : a)) {
        let e = r.get(t);
        null != e && o.push(e);
    }
    return {
        quests: o,
        isFetchingCurrentQuests: n
    };
}
function k() {
    let { quests: e, isFetchingCurrentQuests: t } = w({ fetchPolicy: 'cache-only' }),
        [n, r] = u.useState(() => new Map(e.map((e) => [e.id, (0, O.zi)(e)])));
    return (
        u.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, O.zi)(t)) null != t && (0, O.zi)(t) && r((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new E.V7(),
                        i = () => {
                            let a = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(a, () => {
                                (0, O.zi)(t) ? r((e) => new Map(e).set(t.id, !0)) : i();
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
function B(e) {
    let t = k();
    return u.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, f.e7)([p.default], () => p.default.locale);
    return u.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function V(e) {
    return (0, f.e7)([N.Z], () => N.Z.isProgressingOnDesktop(e.id));
}
function H(e) {
    return u.useMemo(() => (0, O.Bz)(e), [e]);
}
function Z(e) {
    let t = V(e),
        n = H(e);
    return t || n;
}
((o = i || (i = {})).UNCLAIMED = 'unclaimed'), (o.CLAIMED = 'claimed');
let Y = (e) => {
    let t = u.useCallback(() => (0, O.il)(e), [e]),
        [n, r] = u.useState(t()),
        i = u.useCallback(() => r(t()), [t]),
        a = Z(e);
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
function j(e) {
    return u.useMemo(() => (0, O.b7)(e), [e]);
}
let W = (e) => {
    let { quest: t, location: n, questContent: r } = e,
        i = et({ quest: t });
    return () => {
        i
            ? (0, O.gI)(
                  {
                      quest: t,
                      showInline: (0, R.i)({ location: n })
                  },
                  {
                      content: r,
                      ctaContent: S.jZ.CONNECT_CONSOLE_LINK
                  }
              )
            : (0, O.V$)(
                  { quest: t },
                  {
                      content: r,
                      ctaContent: S.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                  }
              );
    };
};
function K(e, t, n) {
    let { targetMinutes: r } = Y(e),
        i = j(e),
        a = W({
            quest: e,
            location: t,
            questContent: n
        });
    if ((0, O.zK)(e, M.S7.IN_HOUSE_CONSOLE_QUEST))
        return U.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
            minutes: r,
            onClick: a
        });
    if ((0, O.$J)(e))
        return U.Z.Messages.QUESTS_CONSOLE_QUEST_TASK_WITH_LINK.format({
            minutes: r,
            onClick: a,
            gameTitle: b.r.build(e.config).application.name
        });
    if (null != i) return i.title;
    let s = U.Z.Messages.QUESTS_STREAM_TASK;
    return (
        (0, O.Nj)({ quest: e }) && (s = U.Z.Messages.QUESTS_PLAY_TASK),
        s.format({
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function z() {
    let { quests: e, isFetchingCurrentQuests: t } = w({ fetchPolicy: 'cache-or-network' }),
        n = k();
    return u.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, O.vR)(t, v.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (i = n.get(t.id)) && void 0 !== i && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, O.zE)(t.userStatus, v.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function q() {
    let e = z();
    u.useEffect(() => {
        for (let t of e) (0, A.gl)(t.id, v.jn.GIFT_INVENTORY_SETTINGS_BADGE);
    }, [e]);
}
function Q(e) {
    let t = (0, y.z)({ location: M.dr.MEMBERS_LIST }),
        n = (0, f.e7)([N.Z], () => (t ? N.Z.quests : null)),
        r = u.useMemo(() => (0, O.Jg)(n, e), [e, n]);
    return B(r) ? null : r;
}
function X(e) {
    var t;
    let n = (0, O.Xv)(e),
        { product: r, isFetching: i } = (0, h.T)(b.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function $(e) {
    return {
        handleComplete: () => (0, A.Wf)(e),
        handleResetStatusClick: () => (0, A.eT)(e),
        handleResetDismissibilityClick: () => (0, A.T0)(e),
        handleOverrideDeliveryClick: () => (0, A.EW)(e)
    };
}
function J() {
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
                        (e = await (0, A.CS)(t, n)), s(e.errorHints);
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
            r = Z(t),
            i = 0 === n.length;
        return (0, O.$J)(t) && i && !r;
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
        o = Y(e).percentComplete > 0;
    if (s) return 4;
    if (a) return 3;
    if (o) return 2;
    else if (i) return 1;
    else return 0;
}
function ei(e) {
    let t = (0, f.e7)([p.default], () => p.default.locale),
        { percentComplete: n } = Y(e),
        r = j(e),
        i = null != r ? r.completedRatio : n,
        a = 100 * i,
        s = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, g.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: s
    };
}
function ea(e) {
    var t, n;
    let r = Y(e),
        i = (0, O.b7)(e),
        a = (0, L.D)({
            quest: e,
            taskDetails: r,
            location: M.dr.QUEST_HOME_DESKTOP,
            questContent: v.jn.QUEST_HOME_DESKTOP,
            useV2Variants: !0
        }),
        s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = F(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    if (s) return U.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({ claimDate: o });
    if (null != i) return i.description;
    if (null != a) return a;
    return null;
}
((l = a || (a = {}))[(l.UNACCEPTED = 0)] = 'UNACCEPTED'), (l[(l.ACCEPTED = 1)] = 'ACCEPTED'), (l[(l.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (l[(l.COMPLETED = 3)] = 'COMPLETED'), (l[(l.CLAIMED = 4)] = 'CLAIMED');
function es(e, t) {
    let [n, r] = (function (e) {
            let t = (0, f.e7)([N.Z], () => N.Z.selectedTaskPlatform(e));
            return [t, u.useCallback((t) => (0, A.OR)(e, t), [e])];
        })(e.id),
        i = u.useMemo(() => (0, O.Nj)({ quest: e }), [e]),
        a = u.useMemo(() => (0, O.$J)(e), [e]),
        s = V(e),
        o = H(e),
        l = (0, D.p)({ location: M.dr.QUESTS_BAR }),
        _ = u.useMemo(
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
        E = s ? M.cd.DESKTOP : o ? M.cd.CONSOLE : null,
        h = u.useMemo(
            () =>
                (0, c.EQ)({
                    lastPlatformProgress: _,
                    currentProgressingPlatform: E,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: M.cd.CONSOLE }, () => v.LI.CONSOLE)
                    .with({ currentProgressingPlatform: M.cd.DESKTOP }, () => v.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: M.cd.CONSOLE
                        },
                        () => v.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: M.cd.DESKTOP
                        },
                        () => v.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: M.cd.CONSOLE
                        },
                        () => v.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: M.cd.DESKTOP
                        },
                        () => v.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (a && i && l ? v.LI.SELECT : a ? v.LI.CONSOLE : v.LI.DESKTOP)
                    )
                    .exhaustive(),
            [a, i, l, _, E, n]
        );
    return [
        h,
        u.useMemo(() => {
            let e = [];
            return i && e.push(M.cd.DESKTOP), a && e.push(M.cd.CONSOLE), e;
        }, [a, i]),
        r
    ];
}
function eo(e) {
    let t = [];
    return (0, O.rV)(e) && t.push(U.Z.Messages.QUESTS_PROGRESS_WEB_TIP), t;
}
