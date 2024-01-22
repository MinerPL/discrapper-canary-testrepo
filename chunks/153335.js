"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("627445"),
  a = n.n(l),
  s = n("446674"),
  o = n("913144"),
  u = n("775433"),
  c = n("685665"),
  d = n("598981"),
  f = n("846286"),
  p = n("697218"),
  h = n("10514"),
  S = n("650509"),
  m = n("90592"),
  _ = n("333955"),
  I = n("599733"),
  E = n("49111"),
  T = n("782340"),
  C = e => {
    var t;
    let n, {
        listing: l,
        guildId: C,
        groupListingId: g,
        analyticsLocation: A,
        showBenefitsFirst: N,
        onComplete: b,
        forcesTransitionToGuild: v
      } = e,
      L = null == l ? void 0 : l.subscription_plans[0],
      O = null == l ? void 0 : l.application_id,
      P = null == L ? void 0 : L.id,
      x = (null == l ? void 0 : l.published) === !0,
      F = null == L ? void 0 : L.sku_id,
      R = (0, s.useStateFromStores)([h.default], () => null != P ? h.default.get(P) : null),
      y = (0, S.useApplication)(O),
      k = (0, S.useSubscriptionListingsForGroup)(g, {
        includeSoftDeleted: !0
      }),
      G = k.map(e => e.subscription_plans[0].id),
      {
        analyticsLocations: H
      } = (0, c.default)(),
      {
        activeSubscription: M,
        activeEntitlement: j
      } = (0, S.useActiveSubscriptionListingForApplication)(O, C),
      w = (0, S.useEligibleApplicationSubscriptionGuilds)(O, C),
      D = (0, d.default)(),
      U = null != l && (0, m.isApplicationUserSubscription)(l.sku_flags),
      B = null != j && j.userId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
      V = null == j || B,
      K = null == j || G.length > 1,
      W = null != C || w.length > 0,
      z = U && B,
      Z = null != R && null != y && V && K && (W || U) && !z;
    V ? W ? z && null != R && (n = T.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
      tierName: R.name
    })) : n = T.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = T.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(() => {
      x && null != F && D && o.default.wait(() => {
        (0, u.fetchSubscriptionPlansForSKU)(F)
      })
    }, [x, F, D]);
    let Q = r.useCallback(() => {
      a(null != l, "No subscription listing"), a(null != y, "No application"), a(null != L, "No subscription plan"), a(x, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, f.openApplicationSubscriptionPaymentModal)({
          activeSubscription: M,
          analyticsSubscriptionType: E.SubscriptionTypes.APPLICATION,
          analyticsLocations: H,
          analyticsLocation: A,
          renderHeader: (e, t, n) => (0, i.jsx)(_.PurchaseHeader, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: L.id,
          skuId: L.sku_id,
          guildId: C,
          eligibleApplicationSubscriptionGuilds: w,
          planGroup: G,
          listing: l,
          application: y,
          showBenefitsFirst: N,
          onComplete: b,
          forcesTransitionToGuild: v
        })
      };
      !W && U ? (0, I.confirmNoSharedServerSubscribeWarningModal)({
        application: y,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [x, l, L, G, y, C, W, U, H, A, M, N, w, b, v]);
    return {
      openModal: Q,
      canOpenModal: Z,
      cannotOpenReason: n
    }
  }