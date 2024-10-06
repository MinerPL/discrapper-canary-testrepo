t.d(e, {
    C9: function () {
        return _;
    },
    CR: function () {
        return b;
    },
    h6: function () {
        return A;
    },
    jd: function () {
        return l;
    },
    qz: function () {
        return R;
    },
    sp: function () {
        return O;
    }
}),
    t(653041),
    t(47120);
var l,
    i,
    r = t(470079),
    a = t(512722),
    o = t.n(a),
    s = t(442837),
    u = t(496929),
    c = t(430824),
    d = t(496675),
    f = t(509545),
    p = t(78839),
    m = t(580130),
    v = t(55563),
    I = t(801249),
    S = t(106976),
    h = t(307643),
    x = t(488915),
    N = t(171246),
    g = t(981631);
let T = 12633 == t.j ? 2592000000 : null;
((i = l || (l = {}))[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR');
let Z = (n) => {
        let { guildId: e, canFetch: t = !0, forceRefetch: l = !1 } = n,
            i = (0, s.e7)([x.Z], () => (null != e ? x.Z.getEntitlementsForGuildFetchState(e) : null), [e]);
        return (
            r.useEffect(() => {
                if (null == e || e === g.ME) return;
                let n = x.Z.getEntitlementsForGuildFetchState(e);
                t && (n === x.M.NOT_FETCHED || l) && (0, S.i1)(e);
            }, [e, t, l]),
            { entitlementsLoaded: i === x.M.FETCHED }
        );
    },
    E = [],
    C = [];
function _(n, e) {
    o()(null == n || n.type === g.epS.SUBSCRIPTION_GROUP, 'SKU must be a subscription group');
    let t = null == n ? void 0 : n.bundledSkuIds,
        l = null == n ? void 0 : n.applicationId,
        i = (0, s.e7)([p.ZP], () => p.ZP.getSubscriptions(), []),
        a = (0, s.Wu)([x.Z], () => (null != l && null != e ? x.Z.getApplicationEntitlementsForGuild(l, e) : E), [l, e]),
        u = (0, s.Wu)(
            [m.Z],
            () => {
                var n;
                return null != l ? [...(null !== (n = m.Z.getForApplication(l)) && void 0 !== n ? n : [])] : C;
            },
            [l]
        ),
        c = r.useMemo(() => [...a, ...u].filter((n) => (null == t ? void 0 : t.includes(n.skuId)) && n.isValid(null, v.Z)), [a, u, t]);
    return (0, s.cj)(
        [f.Z, v.Z],
        () => {
            let n, l;
            if (null == i) return {};
            for (let r of Object.values(i)) {
                if (null == l) {
                    let n = (0, N.z0)(f.Z, null != t ? t : [], r);
                    null != n && (l = { upcomingSubscriptionPlan: n });
                }
                if (null == n)
                    for (let t of c) {
                        let l = (0, N.PB)(f.Z, v.Z, r, t, e);
                        if (null != l) {
                            n = {
                                activeSubscription: r,
                                activeSubscriptionPlan: l,
                                activeEntitlement: t
                            };
                            break;
                        }
                    }
                if (null != n && null != l) break;
            }
            return {
                ...n,
                ...l
            };
        },
        [i, t, c, e]
    );
}
function A(n) {
    var e;
    let t = null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : g.lds,
        { entitlementsLoaded: l } = Z({
            guildId: t,
            canFetch: (0, s.e7)([d.Z], () => d.Z.can(g.Plq.ADMINISTRATOR, n))
        }),
        i = (0, s.e7)([I.Z], () => I.Z.getLastGuildDismissedTime(t)),
        a = (0, s.Wu)([x.Z], () => {
            let n = x.Z.getEntitlementsForGuild(t),
                e = x.Z.getEntitlementsForGuild(t, !1),
                l = n.map((n) => n.applicationId);
            return e.filter((n) => !l.includes(n.applicationId));
        }),
        o = (0, s.cj)([v.Z], () => v.Z.getSKUs()),
        u = r.useMemo(
            () =>
                a.filter((n) => {
                    let e = o[n.skuId];
                    return null != e && e.available;
                }),
            [a, o]
        );
    return l ? u.filter((n) => null != n.endsAt && n.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - T)) : [];
}
let O = (n) => {
        let [e, t] = r.useState(!1),
            l = r.useMemo(() => n.map(N.bZ), [n]);
        return (
            r.useEffect(() => {
                t(!0),
                    Promise.all(l.map((n) => (0, S.vY)(n)))
                        .catch(() => {})
                        .then(() => {
                            t(!1);
                        });
            }, [l]),
            { loading: e }
        );
    },
    R = () => {
        let [n, e] = r.useState(0);
        return (
            r.useEffect(() => {
                e(1),
                    Promise.all([
                        (0, u.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: g.qc2.APPLICATION_SUBSCRIPTION
                        }),
                        (0, u.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: g.qc2.PURCHASE
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
    let [t, l] = r.useState([]);
    return (
        r.useEffect(() => {
            null != n && (0, h.tn)(n, e).then(l);
        }, [n, e]),
        (0, s.Wu)([c.Z], () => t.map((n) => c.Z.getGuild(n)).filter((n) => null != n), [t])
    );
}
