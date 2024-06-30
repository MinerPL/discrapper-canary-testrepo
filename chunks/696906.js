i(789020);
var t = i(735250), a = i(470079), r = i(512722), o = i.n(r), l = i(442837), s = i(570140), c = i(821849), d = i(906732), u = i(887706), _ = i(724870), p = i(594174), m = i(509545), I = i(55563), f = i(551428), g = i(630388), h = i(270144), C = i(171246), v = i(689011), E = i(714441), x = i(981631), b = i(689938);
n.Z = e => {
    var n;
    let i, {
            guildId: r,
            groupListingId: A,
            analyticsLocation: P,
            showBenefitsFirst: T,
            skuId: R,
            onComplete: N,
            forcesTransitionToGuild: S
        } = e, L = (0, l.e7)([I.Z], () => null != R ? I.Z.get(R) : void 0, [R]), O = (0, l.e7)([f.Z], () => null != R ? f.Z.getForSKU(R) : void 0, [R]), j = (0, l.e7)([m.Z], () => null != R ? m.Z.getForSKU(R) : void 0, [R]), y = null != j ? j[0] : void 0, D = null == L ? void 0 : L.applicationId, Z = (null == O ? void 0 : O.published) === !0 && null != L && (0, g.yE)(L.flags, x.l4R.AVAILABLE), M = null == y ? void 0 : y.skuId, B = (0, h.IX)(D), k = (0, h._k)(A, { includeSoftDeleted: !0 }).map(e => e.subscription_plans[0].id), {analyticsLocations: w} = (0, d.ZP)(), {
            activeSubscription: G,
            activeEntitlement: H
        } = (0, h.F5)(D, r), U = (0, h.CR)(D, r), F = (0, u.Z)(), Y = null != L && (0, C.KW)(L.flags), W = null != H && H.userId === (null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.id), V = null == H || W, z = null == H || k.length > 1, K = null != r || U.length > 0, q = Y && W, J = null != y && null != B && V && z && (K || Y) && !q;
    return V ? K ? q && null != y && (i = b.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({ tierName: y.name })) : i = b.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : i = b.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, a.useEffect(() => {
        Z && null != M && F && !(m.Z.isFetchingForSKU(M) || m.Z.isLoadedForSKU(M)) && s.Z.wait(() => {
            (0, c.GZ)(M);
        });
    }, [
        Z,
        M,
        F
    ]), {
        openModal: a.useCallback(() => {
            o()(null != B, 'No application'), o()(null != y, 'No subscription plan'), o()(Z, 'Cannot purchase this unpublished plan');
            let e = () => {
                (0, _.h)({
                    activeSubscription: G,
                    analyticsSubscriptionType: x.NYc.APPLICATION,
                    analyticsLocations: w,
                    analyticsLocation: P,
                    renderHeader: (e, n, i) => (0, t.jsx)(v.t, {
                        step: i,
                        onClose: () => n(!1)
                    }),
                    initialPlanId: y.id,
                    skuId: y.skuId,
                    guildId: r,
                    eligibleApplicationSubscriptionGuilds: U,
                    planGroup: k,
                    applicationId: B.id,
                    showBenefitsFirst: T,
                    onComplete: N,
                    forcesTransitionToGuild: S
                });
            };
            !K && Y ? (0, E.i)({
                applicationName: B.name,
                onConfirm: e,
                onCancel: () => {
                }
            }) : e();
        }, [
            Z,
            y,
            k,
            B,
            r,
            K,
            Y,
            w,
            P,
            G,
            T,
            U,
            N,
            S
        ]),
        canOpenModal: J,
        cannotOpenReason: i
    };
};
