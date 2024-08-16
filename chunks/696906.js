i(789020);
var t = i(735250),
    a = i(470079),
    r = i(512722),
    o = i.n(r),
    l = i(442837),
    s = i(570140),
    c = i(821849),
    d = i(906732),
    u = i(887706),
    _ = i(728345),
    p = i(724870),
    m = i(594174),
    I = i(509545),
    f = i(55563),
    g = i(551428),
    h = i(630388),
    C = i(270144),
    v = i(171246),
    E = i(689011),
    x = i(714441),
    b = i(981631),
    A = i(689938);
n.Z = (e) => {
    var n;
    let i,
        { guildId: r, groupListingId: P, analyticsLocation: T, showBenefitsFirst: R, skuId: N, onComplete: S, forcesTransitionToGuild: L } = e,
        O = (0, l.e7)([f.Z], () => (null != N ? f.Z.get(N) : void 0), [N]),
        j = (0, l.e7)([g.Z], () => (null != N ? g.Z.getForSKU(N) : void 0), [N]),
        y = (0, l.e7)([I.Z], () => (null != N ? I.Z.getForSKU(N) : void 0), [N]),
        D = null != y ? y[0] : void 0,
        Z = null == O ? void 0 : O.applicationId,
        M = (null == j ? void 0 : j.published) === !0 && null != O && (0, h.yE)(O.flags, b.l4R.AVAILABLE),
        B = null == D ? void 0 : D.skuId,
        { data: k } = (0, _.I)(Z),
        w = (0, C._k)(P, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        { analyticsLocations: G } = (0, d.ZP)(),
        { activeSubscription: H, activeEntitlement: F } = (0, C.F5)(Z, r),
        U = (0, C.CR)(Z, r),
        Y = (0, u.Z)(),
        W = null != O && (0, v.KW)(O.flags),
        V = null != F && F.userId === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
        z = null == F || V,
        K = null == F || w.length > 1,
        q = null != r || U.length > 0,
        J = W && V,
        Q = null != D && null != k && z && K && (q || W) && !J;
    return (
        z ? (q ? J && null != D && (i = A.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({ tierName: D.name })) : (i = A.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE)) : (i = A.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION),
        a.useEffect(() => {
            M &&
                null != B &&
                Y &&
                !(I.Z.isFetchingForSKU(B) || I.Z.isLoadedForSKU(B)) &&
                s.Z.wait(() => {
                    (0, c.GZ)(B);
                });
        }, [M, B, Y]),
        {
            openModal: a.useCallback(() => {
                o()(null != k, 'No application'), o()(null != D, 'No subscription plan'), o()(M, 'Cannot purchase this unpublished plan');
                let e = () => {
                    (0, p.h)({
                        activeSubscription: H,
                        analyticsSubscriptionType: b.NYc.APPLICATION,
                        analyticsLocations: G,
                        analyticsLocation: T,
                        renderHeader: (e, n, i) =>
                            (0, t.jsx)(E.t, {
                                step: i,
                                onClose: () => n(!1)
                            }),
                        initialPlanId: D.id,
                        skuId: D.skuId,
                        guildId: r,
                        eligibleApplicationSubscriptionGuilds: U,
                        planGroup: w,
                        applicationId: k.id,
                        showBenefitsFirst: R,
                        onComplete: S,
                        forcesTransitionToGuild: L
                    });
                };
                !q && W
                    ? (0, x.i)({
                          applicationName: k.name,
                          onConfirm: e,
                          onCancel: () => {}
                      })
                    : e();
            }, [M, D, w, k, r, q, W, G, T, H, R, U, S, L]),
            canOpenModal: Q,
            cannotOpenReason: i
        }
    );
};
