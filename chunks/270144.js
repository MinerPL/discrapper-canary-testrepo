t.d(e, {
    CR: function () {
        return b;
    },
    Ev: function () {
        return E;
    },
    LM: function () {
        return g;
    },
    cr: function () {
        return k;
    },
    h6: function () {
        return Z;
    },
    jd: function () {
        return l;
    },
    qz: function () {
        return N;
    },
    sp: function () {
        return T;
    }
}),
    t(653041),
    t(47120),
    t(773603),
    t(789020);
var l,
    i,
    r = t(192379),
    o = t(442837),
    a = t(496929),
    s = t(430824),
    u = t(496675),
    c = t(509545),
    d = t(78839),
    p = t(55563),
    f = t(801249),
    v = t(106976),
    m = t(307643),
    h = t(488915),
    x = t(171246),
    S = t(981631);
let I = 12633 == t.j ? 2592000000 : null;
((i = l || (l = {}))[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR');
let g = (n) => {
    let { guildId: e, canFetch: t = !0, forceRefetch: l = !1 } = n,
        i = (0, o.e7)([h.Z], () => (null != e ? h.Z.getEntitlementsForGuildFetchState(e) : null), [e]);
    return (
        r.useEffect(() => {
            if (null == e || e === S.ME) return;
            let n = h.Z.getEntitlementsForGuildFetchState(e);
            t && (n === h.M.NOT_FETCHED || l) && (0, v.i1)(e);
        }, [e, t, l]),
        { entitlementsLoaded: i === h.M.FETCHED }
    );
};
function Z(n) {
    var e;
    let t = null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : S.lds,
        { entitlementsLoaded: l } = g({
            guildId: t,
            canFetch: (0, o.e7)([u.Z], () => u.Z.can(S.Plq.ADMINISTRATOR, n))
        }),
        i = (0, o.e7)([f.Z], () => f.Z.getLastGuildDismissedTime(t)),
        a = (0, o.Wu)([h.Z], () => {
            let n = h.Z.getEntitlementsForGuild(t),
                e = h.Z.getEntitlementsForGuild(t, !1),
                l = n.map((n) => n.applicationId);
            return e.filter((n) => !l.includes(n.applicationId));
        }),
        s = (0, o.cj)([p.Z], () => p.Z.getSKUs()),
        c = r.useMemo(
            () =>
                a.filter((n) => {
                    let e = s[n.skuId];
                    return null != e && e.available;
                }),
            [a, s]
        );
    return l ? c.filter((n) => null != n.endsAt && n.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - I)) : [];
}
let T = (n) => {
        let [e, t] = r.useState(!1),
            l = r.useMemo(() => n.map(x.bZ), [n]);
        return (
            r.useEffect(() => {
                t(!0),
                    Promise.all(l.map((n) => (0, v.vY)(n)))
                        .catch(() => {})
                        .then(() => {
                            t(!1);
                        });
            }, [l]),
            { loading: e }
        );
    },
    N = () => {
        let [n, e] = r.useState(0);
        return (
            r.useEffect(() => {
                e(1),
                    Promise.all([
                        (0, a.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: S.qc2.APPLICATION_SUBSCRIPTION
                        }),
                        (0, a.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: S.qc2.PURCHASE
                        })
                    ])
                        .catch(() => {
                            e(3);
                        })
                        .then(() => {
                            e(2);
                        });
            }, []),
            { loadState: n }
        );
    };
function b(n, e) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, i] = r.useState([]),
        [a, u] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            null != n &&
                t &&
                (u(!0),
                (0, m.tn)(n, e)
                    .then(i)
                    .finally(() => {
                        u(!1);
                    }));
        }, [n, e, t]),
        {
            guilds: (0, o.Wu)([s.Z], () => l.map((n) => s.Z.getGuild(n)).filter((n) => null != n), [l]),
            isFetching: a
        }
    );
}
let j = (n) => n.items;
function E(n, e) {
    return R(n, e, j);
}
let C = (n) => {
    var e;
    return null === (e = n.renewalMutations) || void 0 === e ? void 0 : e.items;
};
function k(n, e) {
    return R(n, e, C);
}
function R(n, e, t) {
    let l = null == n ? void 0 : n.bundledSkuIds,
        i = null == n ? void 0 : n.flags,
        [a, s] = (0, o.Wu)(
            [d.ZP, c.Z],
            () => {
                var n, r;
                for (let o of null !== (n = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== n ? n : []) {
                    if ((0, x.KK)(null != i ? i : 0) && null != e && (null === (r = o.metadata) || void 0 === r ? void 0 : r.application_subscription_guild_id) !== e) continue;
                    let n = t(o);
                    if (null == n) continue;
                    let a = n
                        .map((n) => c.Z.get(n.planId))
                        .find((n) => {
                            var e;
                            return null != n && null !== (e = null == l ? void 0 : l.includes(n.skuId)) && void 0 !== e && e;
                        });
                    if (null != a) return [o, a];
                }
                return [];
            },
            [i, e, t, l]
        );
    return r.useMemo(() => {
        if (null != a && null != s)
            return {
                subscription: a,
                subscriptionPlan: s
            };
    }, [a, s]);
}
