"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s),
  r = n("913527"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("821849"),
  f = n("131388"),
  h = n("906732"),
  m = n("305325"),
  p = n("246364"),
  E = n("937111"),
  C = n("281956"),
  g = n("41776"),
  S = n("738737"),
  _ = n("509545"),
  T = n("63063"),
  I = n("817460"),
  A = n("584825"),
  v = n("697227"),
  N = n("934826"),
  x = n("896083"),
  M = n("939872"),
  R = n("265985"),
  L = n("293810"),
  y = n("981631"),
  O = n("689938");
t.default = (e, t, n, s) => {
  let r;
  let j = (0, u.useStateFromStores)([g.default], () => g.default.isLurking(t)),
    P = (0, C.useShowMemberVerificationGate)(t),
    D = (0, u.useStateFromStores)([E.default], () => null != t ? E.default.getRequest(t) : null),
    b = (null == D ? void 0 : D.applicationStatus) === p.GuildJoinRequestApplicationStatuses.SUBMITTED,
    U = null == e ? void 0 : e.subscription_plans[0],
    F = null == U ? void 0 : U.id,
    w = (null == e ? void 0 : e.published) === !0,
    k = null == U ? void 0 : U.sku_id,
    H = (0, u.useStateFromStores)([_.default], () => null != F ? _.default.get(F) : null),
    {
      activeSubscription: B,
      activeSubscriptionPlanFromStore: G
    } = (0, N.default)(n),
    V = null == B || null != G,
    W = (0, A.useSubscriptionListingsForGroup)(n, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    Y = (0, v.getRoleSubscriptionMutationPlanId)(B),
    z = null != Y,
    Z = (null == B ? void 0 : B.trialId) != null,
    {
      loading: K,
      getTrialPurchaseEligibility: X
    } = (0, x.useGetTrialPurchaseEligibility)(),
    q = (0, A.useSubscriptionTrial)(null == e ? void 0 : e.id),
    {
      analyticsLocations: Q
    } = (0, h.default)(),
    J = (null == B ? void 0 : B.paymentGateway) === y.PaymentGateways.APPLE_PARTNER;
  b ? r = O.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : j && !P ? r = O.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : Y === F ? r = O.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({
    changeDate: null != B ? o()(B.currentPeriodEnd).format("MMM DD, YYYY") : ""
  }) : z ? r = O.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION : Z ? r = O.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL : J && (r = O.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
  let $ = (0, f.default)(L.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY);
  l.useEffect(() => {
    w && null != k && d.default.wait(() => {
      (0, c.fetchSubscriptionPlansForSKU)(k)
    })
  }, [w, k]);
  let ee = l.useCallback(async () => {
      let n, l;
      if (i()(null != e, "No subscription listing"), i()(null != U, "No subscription plan"), i()(w, "Cannot purchase this unpublished plan"), (null == q ? void 0 : q.active_trial) != null) {
        let a = await X(t, e.id, q.active_trial.id);
        if ((null == a ? void 0 : a.is_eligible) === !0) {
          var r;
          n = null == q ? void 0 : null === (r = q.active_trial) || void 0 === r ? void 0 : r.id
        } else l = O.default.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER
      }(0, S.default)({
        activeSubscription: B,
        analyticsSubscriptionType: y.SubscriptionTypes.GUILD,
        trialId: n,
        trialFooterMessageOverride: (null == q ? void 0 : q.active_trial) != null ? O.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
          buttonText: O.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
          interval: (0, I.formatPlanIntervalDuration)(U),
          days: 1,
          contactLink: y.MarketingURLs.CONTACT,
          cancelSubscriptionArticle: T.default.getArticleURL(y.HelpdeskArticles.ROLE_SUBSCRIPTION_CANCEL),
          helpdeskArticle: T.default.getArticleURL(y.HelpdeskArticles.ROLE_SUBSCRIPTION_TRIAL),
          paidServiceTermsArticle: T.default.getArticleURL(y.HelpdeskArticles.PAID_TERMS),
          tierName: U.name
        }) : void 0,
        analyticsLocations: Q,
        analyticsLocation: s,
        renderHeader: (n, l, s) => (0, a.jsx)(R.Header, {
          onClose: l,
          listing: e,
          step: s,
          guildId: t
        }),
        initialPlanId: U.id,
        skuId: U.sku_id,
        planGroup: W,
        renderPurchaseConfirmation: (n, l) => $ ? (0, a.jsx)(M.PurchaseConfirmationLite, {
          listing: e,
          onClose: l,
          guildId: t
        }) : (0, a.jsx)(R.PurchaseConfirmation, {
          listing: e,
          onClose: l,
          guildId: t
        }),
        reviewWarningMessage: l
      })
    }, [w, e, U, B, W, t, Q, s, X, q, $]),
    et = l.useCallback(() => {
      (0, m.openMemberVerificationModal)(t)
    }, [t]);
  return {
    openModal: P ? et : ee,
    canOpenModal: !j && null != H && V && !b && !z && !Z && !J,
    cannotOpenReason: r,
    isCheckingTrialEligibility: K
  }
}