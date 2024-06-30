var i = n(735250), a = n(470079), s = n(512722), l = n.n(s), r = n(913527), o = n.n(r), c = n(442837), d = n(570140), u = n(821849), _ = n(131388), E = n(906732), m = n(305325), I = n(246364), T = n(937111), h = n(281956), N = n(41776), f = n(738737), p = n(509545), C = n(63063), g = n(817460), S = n(584825), A = n(697227), x = n(934826), O = n(896083), R = n(939872), M = n(265985), v = n(293810), L = n(981631), Z = n(689938);
t.Z = (e, t, n, s) => {
    let r;
    let P = (0, c.e7)([N.Z], () => N.Z.isLurking(t)), b = (0, h.J)(t), D = (0, c.e7)([T.Z], () => null != t ? T.Z.getRequest(t) : null), j = (null == D ? void 0 : D.applicationStatus) === I.wB.SUBMITTED, U = null == e ? void 0 : e.subscription_plans[0], y = null == U ? void 0 : U.id, B = (null == e ? void 0 : e.published) === !0, k = null == U ? void 0 : U.sku_id, G = (0, c.e7)([p.Z], () => null != y ? p.Z.get(y) : null), {
            activeSubscription: F,
            activeSubscriptionPlanFromStore: w
        } = (0, x.Z)(n), V = null == F || null != w, H = (0, S._k)(n, { includeSoftDeleted: !0 }).map(e => e.subscription_plans[0].id), Y = (0, A.V)(F), W = null != Y, z = (null == F ? void 0 : F.trialId) != null, {
            loading: K,
            getTrialPurchaseEligibility: Q
        } = (0, O.F)(), q = (0, S.oC)(null == e ? void 0 : e.id), {analyticsLocations: X} = (0, E.ZP)(), J = (null == F ? void 0 : F.paymentGateway) === L.gg$.APPLE_PARTNER;
    j ? r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : P && !b ? r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : Y === y ? r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({ changeDate: null != F ? o()(F.currentPeriodEnd).format('MMM DD, YYYY') : '' }) : W ? r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION : z ? r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL : J && (r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
    let $ = (0, _.Z)(v.iP);
    a.useEffect(() => {
        B && null != k && d.Z.wait(() => {
            (0, u.GZ)(k);
        });
    }, [
        B,
        k
    ]);
    let ee = a.useCallback(async () => {
            let n, a;
            if (l()(null != e, 'No subscription listing'), l()(null != U, 'No subscription plan'), l()(B, 'Cannot purchase this unpublished plan'), (null == q ? void 0 : q.active_trial) != null) {
                let i = await Q(t, e.id, q.active_trial.id);
                if ((null == i ? void 0 : i.is_eligible) === !0) {
                    var r;
                    n = null == q ? void 0 : null === (r = q.active_trial) || void 0 === r ? void 0 : r.id;
                } else
                    a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER;
            }
            (0, f.Z)({
                activeSubscription: F,
                analyticsSubscriptionType: L.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride: (null == q ? void 0 : q.active_trial) != null ? Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
                    buttonText: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
                    interval: (0, g.iG)(U),
                    days: 1,
                    contactLink: L.EYA.CONTACT,
                    cancelSubscriptionArticle: C.Z.getArticleURL(L.BhN.ROLE_SUBSCRIPTION_CANCEL),
                    helpdeskArticle: C.Z.getArticleURL(L.BhN.ROLE_SUBSCRIPTION_TRIAL),
                    paidServiceTermsArticle: C.Z.getArticleURL(L.BhN.PAID_TERMS),
                    tierName: U.name
                }) : void 0,
                analyticsLocations: X,
                analyticsLocation: s,
                renderHeader: (n, a, s) => (0, i.jsx)(M.h, {
                    onClose: a,
                    listing: e,
                    step: s,
                    guildId: t
                }),
                initialPlanId: U.id,
                skuId: U.sku_id,
                planGroup: H,
                renderPurchaseConfirmation: (n, a) => $ ? (0, i.jsx)(R.m, {
                    listing: e,
                    onClose: a,
                    guildId: t
                }) : (0, i.jsx)(M.x, {
                    listing: e,
                    onClose: a,
                    guildId: t
                }),
                reviewWarningMessage: a
            });
        }, [
            B,
            e,
            U,
            F,
            H,
            t,
            X,
            s,
            Q,
            q,
            $
        ]), et = a.useCallback(() => {
            (0, m.hk)(t);
        }, [t]);
    return {
        openModal: b ? et : ee,
        canOpenModal: !P && null != G && V && !j && !W && !z && !J,
        cannotOpenReason: r,
        isCheckingTrialEligibility: K
    };
};
