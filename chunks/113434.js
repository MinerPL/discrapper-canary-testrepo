n.d(t, {
    B6: function () {
        return L;
    },
    DU: function () {
        return x;
    },
    EH: function () {
        return y;
    },
    Fr: function () {
        return w;
    },
    GI: function () {
        return B;
    },
    J2: function () {
        return O;
    },
    Rf: function () {
        return b;
    },
    W6: function () {
        return i;
    },
    bA: function () {
        return C;
    },
    iO: function () {
        return P;
    },
    jU: function () {
        return U;
    },
    kJ: function () {
        return G;
    },
    t5: function () {
        return M;
    },
    tP: function () {
        return D;
    },
    z6: function () {
        return k;
    }
}), n(47120), n(653041);
var r, i, a, o, s = n(470079), l = n(846519), u = n(442837), c = n(583434), d = n(706454), _ = n(553795), E = n(617136), f = n(272008), h = n(569984), p = n(497505), m = n(918701), I = n(796111), T = n(977156), g = n(31055), S = n(566078), A = n(46140), N = n(981631), v = n(689938);
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' }, [t, n] = s.useState(!1), r = (0, u.Wu)([h.Z], () => [...h.Z.quests.values()]), {
            isFetchingCurrentQuests: i,
            lastFetchedCurrentQuests: a
        } = (0, u.cj)([h.Z], () => ({
            isFetchingCurrentQuests: h.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: h.Z.lastFetchedCurrentQuests
        })), o = (0, T.cB)({ location: A.dr.USE_QUESTS });
    return s.useEffect(() => {
        if ('cache-only' !== e.fetchPolicy)
            ('cache-and-network' === e.fetchPolicy || 'cache-or-network' === e.fetchPolicy && 0 === a) && o && !t && !i && (n(!0), (0, f.xw)());
    }, [
        e.fetchPolicy,
        o,
        t,
        i,
        a
    ]), {
        quests: r,
        isFetchingCurrentQuests: i
    };
}
function R(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
(a = r || (r = {}))[a.DESC = 0] = 'DESC', a[a.ASC = 1] = 'ASC';
function C(e) {
    let {
            quests: t,
            isFetchingCurrentQuests: n
        } = O({ fetchPolicy: 'cache-and-network' }), r = new Map(t.map(e => [
            e.id,
            e
        ])), i = function (e) {
            let t = s.useMemo(() => e.filter(e => {
                    var t;
                    return !((null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null);
                }), [e]), n = s.useRef([]);
            return s.useMemo(() => {
                if (0 === t.length)
                    return [];
                if (n.current.length > 0)
                    return n.current;
                let e = t.sort((e, t) => {
                    var n, r, i, a, o, s;
                    let l = !(0, m.zi)(e), u = !(0, m.zi)(t), c = (0, m.Mi)(e, p.jn.QUEST_BAR) || (0, m.Mi)(e, p.jn.QUEST_BAR_V2), d = (0, m.Mi)(t, p.jn.QUEST_BAR) || (0, m.Mi)(t, p.jn.QUEST_BAR_V2), _ = (0, m.Mi)(e, p.jn.GIFT_INVENTORY_FOR_YOU), E = (0, m.Mi)(t, p.jn.GIFT_INVENTORY_FOR_YOU), f = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
                    return l !== u ? l ? -1 : 1 : c !== d && l && u ? c ? -1 : 1 : _ !== E ? _ ? -1 : 1 : f !== h ? f ? -1 : 1 : l && u ? R(null === (o = e.config) || void 0 === o ? void 0 : o.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 1) : R(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
                }).map(e => e.id);
                return n.current = e, e;
            }, [t]);
        }(t), a = function (e) {
            let t = s.useMemo(() => e.filter(e => {
                    var t, n;
                    let r = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
                    return r && i;
                }), [e]), n = s.useRef([]);
            return s.useMemo(() => {
                if (0 === t.length)
                    return [];
                if (n.current.length > 0)
                    return n.current;
                let e = t.sort((e, t) => {
                    var n, r;
                    let i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
                    if (i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null))
                        return i ? -1 : 1;
                    let a = S.r.build(e.config).rewardsExpireAt;
                    return R(a, S.r.build(t.config).rewardsExpireAt, 0);
                }).map(e => e.id);
                return n.current = e, e;
            }, [t]);
        }(t), o = [], l = [];
    for (let t of o = 'unclaimed' === e ? i : a) {
        let e = r.get(t);
        null != e && l.push(e);
    }
    return {
        quests: l,
        isFetchingCurrentQuests: n
    };
}
function y() {
    let {
            quests: e,
            isFetchingCurrentQuests: t
        } = O({ fetchPolicy: 'cache-only' }), [n, r] = s.useState(() => new Map(e.map(e => [
            e.id,
            (0, m.zi)(e)
        ])));
    return s.useEffect(() => {
        if (t)
            return;
        let n = [];
        for (let t of e)
            if (null == t || (0, m.zi)(t))
                null != t && (0, m.zi)(t) && r(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
            else {
                let e = new l.V7(), i = () => {
                        let a = Date.parse(t.config.expiresAt) - Date.now();
                        e.start(a, () => {
                            (0, m.zi)(t) ? r(e => new Map(e).set(t.id, !0)) : i();
                        }), n.push(e);
                    };
                i();
            }
        return () => {
            for (let e of n)
                e.stop();
        };
    }, [
        e,
        t
    ]), n;
}
function D(e) {
    let t = y();
    return s.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [
        e,
        t
    ]);
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' }, n = (0, u.e7)([d.default], () => d.default.locale);
    return s.useMemo(() => null == e ? '' : new Date(e).toLocaleDateString(n, t), [
        e,
        t,
        n
    ]);
}
(o = i || (i = {})).UNCLAIMED = 'unclaimed', o.CLAIMED = 'claimed';
let b = e => s.useMemo(() => (0, m.il)(e), [e]);
function M(e, t, n, r) {
    let {targetMinutes: i} = b(e);
    if ((0, m.zK)(e, A.S7.IN_HOUSE_CONSOLE_QUEST))
        return v.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
            minutes: i,
            onClick: () => {
                r ? (0, m.gI)({
                    quest: e,
                    showInline: (0, I.i)({ location: t })
                }, {
                    content: n,
                    ctaContent: E.jZ.CONNECT_CONSOLE_LINK
                }) : (0, m.V$)({ quest: e }, {
                    content: n,
                    ctaContent: E.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                });
            }
        });
    let a = v.Z.Messages.QUESTS_STREAM_TASK;
    return (0, m.Nj)({ quest: e }) && (a = v.Z.Messages.QUESTS_PLAY_TASK), a.format({
        minutes: i,
        gameTitle: e.config.messages.gameTitle
    });
}
function P() {
    let {
            quests: e,
            isFetchingCurrentQuests: t
        } = O({ fetchPolicy: 'cache-or-network' }), n = y();
    return s.useMemo(() => {
        let r = [];
        if (t || 0 === e.length)
            return r;
        for (let t of e) {
            var i;
            if (!(0, m.vR)(t, p.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (i = n.get(t.id)) && void 0 !== i && i)
                continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt, a = (0, m.zE)(t.userStatus, p.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [
        e,
        n,
        t
    ]);
}
function U() {
    let e = P();
    s.useEffect(() => {
        for (let t of e)
            (0, f.gl)(t.id, p.jn.GIFT_INVENTORY_SETTINGS_BADGE);
    }, [e]);
}
function w(e) {
    let t = (0, g.z)({ location: A.dr.MEMBERS_LIST }), n = (0, u.e7)([h.Z], () => t ? h.Z.quests : null), r = s.useMemo(() => (0, m.Jg)(n, e), [
            e,
            n
        ]);
    return D(r) ? null : r;
}
function x(e) {
    var t;
    let n = (0, m.Xv)(e), {
            product: r,
            isFetching: i
        } = (0, c.T)(S.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function G(e) {
    return {
        handleComplete: () => (0, f.Wf)(e),
        handleResetStatusClick: () => (0, f.eT)(e),
        handleResetDismissibilityClick: () => (0, f.T0)(e),
        handleOverrideDeliveryClick: () => (0, f.EW)(e)
    };
}
function k() {
    let {
            fetching: e,
            accounts: t
        } = (0, u.cj)([_.Z], () => ({
            fetching: _.Z.isFetching(),
            accounts: _.Z.getAccounts()
        })), {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: i
        } = s.useMemo(() => {
            let e = t.filter(e => !1 === e.revoked), n = e.filter(e => e.type === N.ABu.XBOX), r = e.filter(e => e.type === N.ABu.PLAYSTATION), i = n.concat(r);
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
let B = e => {
    let {
            questId: t,
            preview: n,
            beforeRequest: r,
            afterRequest: i
        } = e, [a, o] = s.useState([]), [l, u] = s.useState(!1);
    return {
        startConsoleQuest: s.useCallback(async () => {
            if (!l) {
                null == r || r(), u(!0);
                try {
                    let e = await (0, f.CS)(t, n);
                    o(e.errorHints);
                } finally {
                    u(!1), null == i || i();
                }
            }
        }, [
            l,
            r,
            i,
            n,
            t
        ]),
        startingConsoleQuest: l,
        errorHints: a
    };
};
