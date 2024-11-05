t.d(e, {
    FC: function () {
        return T;
    },
    HO: function () {
        return l;
    }
}),
    t(390547),
    t(789020);
var l,
    i,
    r = t(192379),
    o = t(512722),
    a = t.n(o),
    s = t(442837),
    u = t(570140),
    c = t(821849),
    d = t(906732),
    p = t(887706),
    f = t(728345),
    v = t(509545),
    m = t(55563),
    h = t(551428),
    x = t(270144),
    S = t(488915),
    I = t(171246),
    g = t(929011),
    Z = t(388032);
function T(n, e) {
    let t;
    switch (n) {
        case 3:
            t = Z.intl.formatToPlainString(Z.t.k1ew5O, { rate: e });
            break;
        case 2:
            t = Z.intl.formatToPlainString(Z.t['Hs3Y+P'], { rate: e });
            break;
        case 4:
            t = Z.intl.string(Z.t.HDFZLS);
            break;
        case 1:
            t = Z.intl.string(Z.t.DLAKbm);
    }
    return t;
}
((i = l || (l = {}))[(i.Loading = 0)] = 'Loading'), (i[(i.ItemUnavailable = 1)] = 'ItemUnavailable'), (i[(i.CurrentPlan = 2)] = 'CurrentPlan'), (i[(i.UpcomingPlan = 3)] = 'UpcomingPlan'), (i[(i.OtherSubscription = 4)] = 'OtherSubscription');
e.ZP = (n) => {
    var e, t, l;
    let i,
        { subscribeForGuild: o, analyticsLocation: Z, skuId: T, onComplete: N } = n,
        b = (0, s.e7)([m.Z], () => (null != T ? m.Z.get(T) : void 0), [T]),
        j = (0, s.e7)([h.Z], () => (null != T ? h.Z.getForSKU(T) : void 0), [T]),
        E = null === (e = (0, s.Wu)([v.Z], () => (null != T ? v.Z.getForSKU(T) : []), [T])[0]) || void 0 === e ? void 0 : e.id,
        C = (0, s.e7)([m.Z], () => (null != T ? m.Z.getParentSKU(T) : void 0), [T]),
        k = null == C ? void 0 : C.bundledSkuIds,
        R = (0, s.Wu)(
            [v.Z],
            () => {
                var n;
                return null !== (n = null == k ? void 0 : k.flatMap(v.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [k]
        ),
        _ = r.useMemo(() => R.map((n) => n.id), [R]),
        O = (0, s.e7)(
            [S.Z],
            () =>
                null != o &&
                S.Z.getEntitlementsForGuild(o, !0).some((n) => {
                    var e;
                    return null !== (e = null == k ? void 0 : k.includes(n.skuId)) && void 0 !== e && e;
                }),
            [k, o]
        ),
        P = null == b ? void 0 : b.applicationId,
        A = (null == j ? void 0 : j.published) === !0 && (null == b ? void 0 : b.isAvailable()) === !0,
        { app: L } = (0, f.Rt)(P),
        { analyticsLocations: y } = (0, d.ZP)(),
        M = (0, x.Ev)(C, null != o ? o : void 0),
        D = (0, x.cr)(C, null != o ? o : void 0),
        { entitlementsLoaded: F } = (0, x.LM)({ guildId: o });
    null == o && (F = !0);
    let U = (0, p.Z)(),
        w = (0, I.KK)(null !== (l = null == b ? void 0 : b.flags) && void 0 !== l ? l : 0);
    return (
        F && null != L && null != T ? (A ? ((null == M ? void 0 : M.subscriptionPlan.skuId) === T && null == D ? (i = 2) : (null == D ? void 0 : null === (t = D.subscriptionPlan) || void 0 === t ? void 0 : t.skuId) === T ? (i = 3) : w && O && null == M && (i = 4)) : (i = 1)) : (i = 0),
        r.useEffect(() => {
            A &&
                null != T &&
                U &&
                !(v.Z.isFetchingForSKU(T) || v.Z.isLoadedForSKU(T)) &&
                u.Z.wait(() => {
                    (0, c.GZ)(T);
                });
        }, [A, T, U]),
        {
            openModal: r.useCallback(() => {
                a()(null != L, 'No application'),
                    a()(null != T, 'No SKU ID'),
                    a()(A, 'Cannot purchase this unpublished plan'),
                    (0, g.H)({
                        subscriptionPlanId: E,
                        sku: b,
                        subscriptionGroupPlanIds: _,
                        activeSubscription: null == M ? void 0 : M.subscription,
                        subscribeForGuild: o,
                        analyticsLocations: y,
                        analyticsLocation: Z
                    }).then(() => {
                        null == N || N();
                    });
            }, [L, T, A, E, b, _, o, y, Z, null == M ? void 0 : M.subscription, N]),
            cannotOpenReason: i
        }
    );
};
