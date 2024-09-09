t.d(n, {
    CR: function () {
        return O;
    },
    F5: function () {
        return C;
    },
    FE: function () {
        return E;
    },
    _k: function () {
        return N;
    },
    h6: function () {
        return A;
    },
    jd: function () {
        return i;
    },
    qz: function () {
        return b;
    },
    sp: function () {
        return L;
    }
}),
    t(653041),
    t(47120);
var i,
    l,
    r = t(470079),
    s = t(442837),
    o = t(496929),
    a = t(430824),
    u = t(496675),
    c = t(509545),
    d = t(78839),
    f = t(580130),
    p = t(55563),
    m = t(801249),
    v = t(106976),
    I = t(307643),
    S = t(488915),
    g = t(171246),
    h = t(981631);
let x = 12633 == t.j ? 2592000000 : null;
((l = i || (i = {}))[(l.NOT_LOADED = 0)] = 'NOT_LOADED'), (l[(l.LOADING = 1)] = 'LOADING'), (l[(l.LOADED = 2)] = 'LOADED'), (l[(l.ERROR = 3)] = 'ERROR');
let E = function (e, n) {
        let { refetchOnMount: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = (0, s.e7)([S.Z], () => (null != e ? S.Z.getSubscriptionGroupListingsForApplicationFetchState(e) : S.M.FETCHED), [e]);
        return (
            r.useEffect(() => {
                if (null == e || null == n) return;
                let i = S.Z.getSubscriptionGroupListingsForApplicationFetchState(e);
                (t || i === S.M.NOT_FETCHED) && (0, v.rx)(e, n);
            }, [e, n, t]),
            { listingsLoaded: i === S.M.FETCHED }
        );
    },
    _ = (e) => {
        let { guildId: n, canFetch: t = !0, forceRefetch: i = !1 } = e,
            l = (0, s.e7)([S.Z], () => (null != n ? S.Z.getEntitlementsForGuildFetchState(n) : null), [n]);
        return (
            r.useEffect(() => {
                if (null == n || n === h.ME) return;
                let e = S.Z.getEntitlementsForGuildFetchState(n);
                t && (e === S.M.NOT_FETCHED || i) && (0, v.i1)(n);
            }, [n, t, i]),
            { entitlementsLoaded: l === S.M.FETCHED }
        );
    },
    N = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeSoftDeleted: !1 };
        return (0, s.Wu)(
            [S.Z],
            () => {
                if (null == e) return [];
                let t = S.Z.getSubscriptionGroupListing(e);
                if (null == t) return [];
                let i = [];
                for (let e of t.subscription_listings_ids) {
                    let t = S.Z.getSubscriptionListing(e);
                    if (null != t) (!t.soft_deleted || n.includeSoftDeleted) && i.push(t);
                }
                return i;
            },
            [e, n.includeSoftDeleted]
        );
    },
    T = [],
    Z = [];
function C(e, n) {
    let t = (0, s.e7)([d.ZP], () => d.ZP.getSubscriptions()),
        {
            subscriptionGroupListing: i,
            guildEntitlements: l,
            userEntitlements: o
        } = (0, s.cj)(
            [S.Z, f.Z],
            () => {
                var t, i;
                return {
                    subscriptionGroupListing: null != e ? S.Z.getSubscriptionGroupListingForApplication(e) : null,
                    guildEntitlements: null != e && null != n ? S.Z.getApplicationEntitlementsForGuild(e, n) : T,
                    userEntitlements: null != e && null !== (i = null === (t = f.Z.getForApplication(e)) || void 0 === t ? void 0 : t.values()) && void 0 !== i ? i : Z
                };
            },
            [e, n]
        ),
        a = r.useMemo(() => [...l, ...o], [l, o]),
        u = null == i ? void 0 : i.subscription_listings,
        { activeSubscriptionListing: c, activeEntitlement: p } = r.useMemo(() => {
            if (null != u) {
                for (let e of a)
                    for (let t of u)
                        if ((0, g.AQ)(t, e, n))
                            return {
                                activeSubscriptionListing: t,
                                activeEntitlement: e
                            };
            }
            return {
                activeSubscriptionListing: null,
                activeEntitlement: null
            };
        }, [a, u, n]);
    return {
        activeSubscription: r.useMemo(() => {
            if (null == t) return null;
            let e = null == c ? void 0 : c.subscription_plans[0].id;
            for (let n of Object.values(t)) if (n.type === h.NYc.APPLICATION && n.items[0].planId === e) return n;
            return null;
        }, [c, t]),
        activeSubscriptionListing: c,
        activeEntitlement: p,
        subscriptionGroupListing: i
    };
}
function A(e) {
    var n;
    let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : h.lds,
        { entitlementsLoaded: i } = _({
            guildId: t,
            canFetch: (0, s.e7)([u.Z], () => u.Z.can(h.Plq.ADMINISTRATOR, e))
        }),
        l = (0, s.e7)([m.Z], () => m.Z.getLastGuildDismissedTime(t)),
        o = (0, s.Wu)([S.Z], () => {
            let e = S.Z.getEntitlementsForGuild(t),
                n = S.Z.getEntitlementsForGuild(t, !1),
                i = e.map((e) => e.applicationId);
            return n.filter((e) => !i.includes(e.applicationId));
        }),
        a = (0, s.cj)([p.Z], () => p.Z.getSKUs()),
        c = r.useMemo(
            () =>
                o.filter((e) => {
                    let n = a[e.skuId];
                    return null != n && n.available;
                }),
            [o, a]
        );
    return i ? c.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != l ? l : 0, Date.now() - x)) : [];
}
let L = (e) => {
        let [n, t] = r.useState(!1),
            i = r.useMemo(() => e.map(g.bZ), [e]),
            l = (0, s.Wu)([c.Z], () => i.filter((e) => null == c.Z.get(e)), [i]);
        return (
            r.useEffect(() => {
                l.length > 0 &&
                    (t(!0),
                    Promise.all(l.map((e) => (0, v.vY)(e)))
                        .catch(() => {})
                        .then(() => {
                            t(!1);
                        }));
            }, [l]),
            { loading: n }
        );
    },
    b = () => {
        let [e, n] = r.useState(0);
        return (
            r.useEffect(() => {
                n(1),
                    (0, o.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: h.qc2.APPLICATION_SUBSCRIPTION
                    })
                        .catch(() => {
                            n(3);
                        })
                        .then(() => {
                            n(2);
                        });
            }, []),
            { loadState: e }
        );
    };
function O(e, n) {
    let t = (0, s.e7)([a.Z], () => a.Z.isLoaded()),
        [i, l] = r.useState([]);
    return (
        r.useEffect(() => {
            null == n &&
                null != e &&
                t &&
                (0, I.tn)(e).then((e) => {
                    l(e.map((e) => a.Z.getGuild(e)).filter((e) => null != e));
                });
        }, [e, n, t]),
        i
    );
}
