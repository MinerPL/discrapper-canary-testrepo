t(390547), t(789020);
var l = t(735250),
    i = t(470079),
    r = t(512722),
    a = t.n(r),
    o = t(442837),
    s = t(570140),
    u = t(821849),
    c = t(906732),
    d = t(887706),
    f = t(728345),
    p = t(724870),
    m = t(594174),
    v = t(509545),
    I = t(55563),
    S = t(551428),
    h = t(270144),
    x = t(171246),
    N = t(689011),
    g = t(714441),
    T = t(981631),
    Z = t(689938);
e.Z = (n) => {
    var e, t, r;
    let E,
        { guildId: C, analyticsLocation: _, showBenefitsFirst: A, skuId: O, onComplete: R, forcesTransitionToGuild: b } = n,
        j = (0, o.e7)([I.Z], () => (null != O ? I.Z.get(O) : void 0), [O]),
        P = (0, o.e7)([S.Z], () => (null != O ? S.Z.getForSKU(O) : void 0), [O]),
        L = null === (e = (0, o.Wu)([v.Z], () => (null != O ? v.Z.getForSKU(O) : []), [O])[0]) || void 0 === e ? void 0 : e.id,
        k = (0, o.e7)([I.Z], () => (null != O ? I.Z.getParentSKU(O) : void 0), [O]),
        M = null == k ? void 0 : k.bundledSkuIds,
        D = (0, o.Wu)(
            [v.Z],
            () => {
                var n;
                return null !== (n = null == M ? void 0 : M.flatMap(v.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [M]
        ),
        y = i.useMemo(() => D.map((n) => n.id), [D]),
        U = null == j ? void 0 : j.applicationId,
        B = (0, h.CR)(U, O),
        F = B.some((n) => n.id === C) ? C : null === (t = B[0]) || void 0 === t ? void 0 : t.id,
        w = (null == P ? void 0 : P.published) === !0 && (null == j ? void 0 : j.isAvailable()) === !0,
        { data: K } = (0, f.IX)(U),
        { analyticsLocations: G } = (0, c.ZP)(),
        { activeSubscription: Y, activeEntitlement: H } = (0, h.C9)(k, F),
        z = (0, d.Z)(),
        W = null != j && (0, x.KW)(j.flags),
        V = (null == H ? void 0 : H.skuId) === O,
        q = null != H && H.userId === (null === (r = m.default.getCurrentUser()) || void 0 === r ? void 0 : r.id),
        X = null == H || D.length > 1,
        J = B.length > 0,
        Q = W && q && V,
        $ = null != j && null != K && X && (J || W) && !Q;
    return (
        J ? Q && (E = Z.Z.Messages.APPLICATION_SUBSCRIPTION_CURRENT_TIER) : (E = Z.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE),
        i.useEffect(() => {
            w &&
                null != O &&
                z &&
                !(v.Z.isFetchingForSKU(O) || v.Z.isLoadedForSKU(O)) &&
                s.Z.wait(() => {
                    (0, u.GZ)(O);
                });
        }, [w, O, z]),
        {
            openModal: i.useCallback(() => {
                a()(null != K, 'No application'), a()(null != O, 'No SKU ID'), a()(w, 'Cannot purchase this unpublished plan');
                let n = () => {
                    (0, p.h)({
                        activeSubscription: null != Y ? Y : null,
                        analyticsSubscriptionType: T.NYc.APPLICATION,
                        analyticsLocations: G,
                        analyticsLocation: _,
                        renderHeader: (n, e, t) =>
                            (0, l.jsx)(N.t, {
                                step: t,
                                onClose: () => e(!1)
                            }),
                        initialPlanId: L,
                        skuId: O,
                        guildId: F,
                        eligibleApplicationSubscriptionGuilds: B,
                        planGroup: y,
                        applicationId: K.id,
                        showBenefitsFirst: A,
                        onComplete: R,
                        forcesTransitionToGuild: b
                    });
                };
                !J && W
                    ? (0, g.i)({
                          applicationName: K.name,
                          onConfirm: n,
                          onCancel: () => {}
                      })
                    : n();
            }, [O, L, y, w, K, F, J, W, G, _, Y, A, B, R, b]),
            canOpenModal: $,
            cannotOpenReason: E
        }
    );
};
