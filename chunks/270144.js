n.d(t, {
    CR: function () {
        return U;
    },
    F5: function () {
        return y;
    },
    FE: function () {
        return A;
    },
    IX: function () {
        return M;
    },
    LM: function () {
        return N;
    },
    ZP: function () {
        return P;
    },
    _k: function () {
        return O;
    },
    h6: function () {
        return D;
    },
    jd: function () {
        return r;
    },
    qz: function () {
        return b;
    },
    sp: function () {
        return L;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a = n(470079),
    s = n(442837),
    o = n(496929),
    l = n(887706),
    u = n(812206),
    c = n(430824),
    d = n(496675),
    _ = n(509545),
    E = n(78839),
    f = n(580130),
    h = n(55563),
    p = n(801249),
    m = n(106976),
    I = n(307643),
    T = n(488915),
    g = n(171246),
    S = n(981631);
((i = r || (r = {}))[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR');
let A = function (e, t) {
        let { refetchOnMount: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = (0, s.e7)([T.Z], () => (null != e ? T.Z.getSubscriptionGroupListingsForApplicationFetchState(e) : T.M.FETCHED), [e]);
        return (
            a.useEffect(() => {
                if (null == e || null == t) return;
                let r = T.Z.getSubscriptionGroupListingsForApplicationFetchState(e);
                (n || r === T.M.NOT_FETCHED) && (0, m.rx)(e, t);
            }, [e, t, n]),
            { listingsLoaded: r === T.M.FETCHED }
        );
    },
    N = (e) => {
        let { guildId: t, canFetch: n = !0, forceRefetch: r = !1 } = e,
            i = (0, s.e7)([T.Z], () => (null != t ? T.Z.getEntitlementsForGuildFetchState(t) : null), [t]);
        return (
            a.useEffect(() => {
                if (null == t || t === S.ME) return;
                let e = T.Z.getEntitlementsForGuildFetchState(t);
                n && (e === T.M.NOT_FETCHED || r) && (0, m.i1)(t);
            }, [t, n, r]),
            { entitlementsLoaded: i === T.M.FETCHED }
        );
    },
    v = (e) => {
        let { applicationId: t, canFetch: n = !0, forceRefetch: r = !1, loggedIn: i } = e,
            l = (0, s.e7)([f.Z], () => f.Z.isFetchedForApplication(t), [t]);
        return (
            a.useEffect(() => {
                if (i) {
                    let e = f.Z.isFetchingForApplication(t);
                    ((n && !e && !l) || r) && (0, o.p0)({ entitlementType: S.qc2.APPLICATION_SUBSCRIPTION });
                }
            }, [t, n, l, r, i]),
            { entitlementsLoaded: l }
        );
    },
    O = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeSoftDeleted: !1 };
        return (0, s.Wu)(
            [T.Z],
            () => {
                if (null == e) return [];
                let n = T.Z.getSubscriptionGroupListing(e);
                if (null == n) return [];
                let r = [];
                for (let e of n.subscription_listings_ids) {
                    let n = T.Z.getSubscriptionListing(e);
                    if (null != n) (!n.soft_deleted || t.includeSoftDeleted) && r.push(n);
                }
                return r;
            },
            [e, t.includeSoftDeleted]
        );
    },
    R = [],
    C = [];
function y(e, t) {
    let n = (0, s.e7)([E.ZP], () => E.ZP.getSubscriptions()),
        {
            subscriptionGroupListing: r,
            guildEntitlements: i,
            userEntitlements: o
        } = (0, s.cj)(
            [T.Z, f.Z],
            () => {
                var n, r;
                return {
                    subscriptionGroupListing: null != e ? T.Z.getSubscriptionGroupListingForApplication(e) : null,
                    guildEntitlements: null != e && null != t ? T.Z.getApplicationEntitlementsForGuild(e, t) : R,
                    userEntitlements: null != e && null !== (r = null === (n = f.Z.getForApplication(e)) || void 0 === n ? void 0 : n.values()) && void 0 !== r ? r : C
                };
            },
            [e, t]
        ),
        l = a.useMemo(() => [...i, ...o], [i, o]),
        u = null == r ? void 0 : r.subscription_listings,
        { activeSubscriptionListing: c, activeEntitlement: d } = a.useMemo(() => {
            if (null != u) {
                for (let e of l)
                    for (let n of u)
                        if ((0, g.AQ)(n, e, t))
                            return {
                                activeSubscriptionListing: n,
                                activeEntitlement: e
                            };
            }
            return {
                activeSubscriptionListing: null,
                activeEntitlement: null
            };
        }, [l, u, t]);
    return {
        activeSubscription: a.useMemo(() => {
            if (null == n) return null;
            let e = null == c ? void 0 : c.subscription_plans[0].id;
            for (let t of Object.values(n)) if (t.type === S.NYc.APPLICATION && t.items[0].planId === e) return t;
            return null;
        }, [c, n]),
        activeSubscriptionListing: c,
        activeEntitlement: d,
        subscriptionGroupListing: r
    };
}
function D(e) {
    var t;
    let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : S.lds,
        { entitlementsLoaded: r } = N({
            guildId: n,
            canFetch: (0, s.e7)([d.Z], () => d.Z.can(S.Plq.ADMINISTRATOR, e))
        }),
        i = (0, s.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(n)),
        o = (0, s.Wu)([T.Z], () => {
            let e = T.Z.getEntitlementsForGuild(n),
                t = T.Z.getEntitlementsForGuild(n, !1),
                r = e.map((e) => e.applicationId);
            return t.filter((e) => !r.includes(e.applicationId));
        }),
        l = (0, s.cj)([h.Z], () => h.Z.getSKUs()),
        u = a.useMemo(
            () =>
                o.filter((e) => {
                    let t = l[e.skuId];
                    return null != t && t.available;
                }),
            [o, l]
        );
    return r ? u.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - 2592000000)) : [];
}
let L = (e) => {
        let [t, n] = a.useState(!1),
            r = a.useMemo(() => e.map(g.bZ), [e]),
            i = (0, s.Wu)([_.Z], () => r.filter((e) => null == _.Z.get(e)), [r]);
        return (
            a.useEffect(() => {
                i.length > 0 &&
                    (n(!0),
                    Promise.all(i.map((e) => (0, m.vY)(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [i]),
            { loading: t }
        );
    },
    b = () => {
        let [e, t] = a.useState(0);
        return (
            a.useEffect(() => {
                t(1),
                    (0, o.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: S.qc2.APPLICATION_SUBSCRIPTION
                    })
                        .catch(() => {
                            t(3);
                        })
                        .then(() => {
                            t(2);
                        });
            }, []),
            { loadState: e }
        );
    },
    M = (e) => {
        let t = (0, l.Z)(),
            n = (0, s.e7)([u.Z], () => (null != e ? u.Z.getApplication(e) : null), [e]),
            r = null != n;
        return (
            a.useEffect(() => {
                !r && null != e && t && (0, I.UM)(e);
            }, [r, e, t]),
            n
        );
    };
function P(e) {
    var t, n;
    let { applicationId: r, groupListingId: i, guildId: a } = e,
        s = (0, l.Z)(),
        { listingsLoaded: o } = A(r, i),
        { entitlementsLoaded: u } = N({ guildId: a }),
        { entitlementsLoaded: c } = v({
            applicationId: r,
            loggedIn: s
        }),
        d = M(r),
        { subscriptionGroupListing: _ } = y(r, a),
        E = null !== (n = null == _ ? void 0 : null === (t = _.subscription_listings) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0,
        f = (null == d ? void 0 : d.isMonetized) === !0;
    return { applicationSubscriptionListingsShown: null != r && null != i && (null == a || u) && (!s || c) && o && f && E > 0 };
}
function U(e, t) {
    let n = (0, s.e7)([c.Z], () => c.Z.isLoaded()),
        [r, i] = a.useState([]);
    return (
        a.useEffect(() => {
            null == t &&
                null != e &&
                n &&
                (0, I.tn)(e).then((e) => {
                    i(e.map((e) => c.Z.getGuild(e)).filter((e) => null != e));
                });
        }, [e, t, n]),
        r
    );
}
