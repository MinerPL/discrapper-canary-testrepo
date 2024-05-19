"use strict";
n.r(t), n("789020");
var i = n("735250"),
  l = n("470079"),
  r = n("512722"),
  a = n.n(r),
  o = n("442837"),
  s = n("570140"),
  u = n("821849"),
  d = n("906732"),
  c = n("887706"),
  p = n("724870"),
  f = n("594174"),
  h = n("509545"),
  m = n("55563"),
  g = n("551428"),
  S = n("630388"),
  v = n("270144"),
  I = n("171246"),
  C = n("689011"),
  M = n("714441"),
  b = n("981631"),
  y = n("689938");
t.default = e => {
  var t;
  let n, {
      guildId: r,
      groupListingId: A,
      analyticsLocation: x,
      showBenefitsFirst: w,
      skuId: _,
      onComplete: N,
      forcesTransitionToGuild: T
    } = e,
    P = (0, o.useStateFromStores)([m.default], () => null != _ ? m.default.get(_) : void 0, [_]),
    E = (0, o.useStateFromStores)([g.default], () => null != _ ? g.default.getForSKU(_) : void 0, [_]),
    U = (0, o.useStateFromStores)([h.default], () => null != _ ? h.default.getForSKU(_) : void 0, [_]),
    j = null != U ? U[0] : void 0,
    O = null == P ? void 0 : P.applicationId,
    L = (null == E ? void 0 : E.published) === !0 && null != P && (0, S.hasFlag)(P.flags, b.SKUFlags.AVAILABLE),
    R = null == j ? void 0 : j.skuId,
    B = (0, v.useApplication)(O),
    F = (0, v.useSubscriptionListingsForGroup)(A, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    {
      analyticsLocations: k
    } = (0, d.default)(),
    {
      activeSubscription: D,
      activeEntitlement: G
    } = (0, v.useActiveSubscriptionListingForApplication)(O, r),
    V = (0, v.useEligibleApplicationSubscriptionGuilds)(O, r),
    H = (0, c.default)(),
    z = null != P && (0, I.isApplicationUserSubscription)(P.flags),
    K = null != G && G.userId === (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    W = null == G || K,
    Z = null == G || F.length > 1,
    Y = null != r || V.length > 0,
    q = z && K,
    J = null != j && null != B && W && Z && (Y || z) && !q;
  return W ? Y ? q && null != j && (n = y.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: j.name
  })) : n = y.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = y.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, l.useEffect(() => {
    L && null != R && H && !(h.default.isFetchingForSKU(R) || h.default.isLoadedForSKU(R)) && s.default.wait(() => {
      (0, u.fetchSubscriptionPlansForSKU)(R)
    })
  }, [L, R, H]), {
    openModal: l.useCallback(() => {
      a()(null != B, "No application"), a()(null != j, "No subscription plan"), a()(L, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, p.openApplicationPaymentModal)({
          activeSubscription: D,
          analyticsSubscriptionType: b.SubscriptionTypes.APPLICATION,
          analyticsLocations: k,
          analyticsLocation: x,
          renderHeader: (e, t, n) => (0, i.jsx)(C.PurchaseHeader, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: j.id,
          skuId: j.skuId,
          guildId: r,
          eligibleApplicationSubscriptionGuilds: V,
          planGroup: F,
          applicationId: B.id,
          showBenefitsFirst: w,
          onComplete: N,
          forcesTransitionToGuild: T
        })
      };
      !Y && z ? (0, M.confirmNoSharedServerSubscribeWarningModal)({
        applicationName: B.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [L, j, F, B, r, Y, z, k, x, D, w, V, N, T]),
    canOpenModal: J,
    cannotOpenReason: n
  }
}