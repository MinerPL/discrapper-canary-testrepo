"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("37983"),
  a = n("884691"),
  s = n("627445"),
  r = n.n(s),
  l = n("446674"),
  o = n("913144"),
  u = n("775433"),
  c = n("685665"),
  d = n("598981"),
  f = n("426380"),
  p = n("697218"),
  h = n("10514"),
  m = n("991254"),
  S = n("129408"),
  I = n("713536"),
  g = n("449809"),
  C = n("49111"),
  v = n("782340"),
  E = e => {
    var t;
    let n, {
        listing: s,
        guildId: E,
        groupListingId: A,
        analyticsLocation: N,
        showBenefitsFirst: x,
        onComplete: T,
        forcesTransitionToGuild: _
      } = e,
      b = null == s ? void 0 : s.subscription_plans[0],
      L = null == s ? void 0 : s.application_id,
      j = null == b ? void 0 : b.id,
      y = (null == s ? void 0 : s.published) === !0,
      M = null == b ? void 0 : b.sku_id,
      O = (0, l.useStateFromStores)([h.default], () => null != j ? h.default.get(j) : null),
      P = (0, m.useApplication)(L),
      R = (0, m.useSubscriptionListingsForGroup)(A, {
        includeSoftDeleted: !0
      }),
      U = R.map(e => e.subscription_plans[0].id),
      {
        analyticsLocations: B
      } = (0, c.default)(),
      {
        activeSubscription: G,
        activeEntitlement: w
      } = (0, m.useActiveSubscriptionListingForApplication)(L, E),
      D = (0, m.useEligibleApplicationSubscriptionGuilds)(L, E),
      k = (0, d.default)(),
      F = null != s && (0, S.isApplicationUserSubscription)(s.sku_flags),
      H = null != w && w.userId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
      K = null == w || H,
      V = null == w || U.length > 1,
      W = null != E || D.length > 0,
      Z = F && H,
      z = null != O && null != P && K && V && (W || F) && !Z;
    K ? W ? Z && null != O && (n = v.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
      tierName: O.name
    })) : n = v.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = v.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, a.useEffect(() => {
      y && null != M && k && o.default.wait(() => {
        (0, u.fetchSubscriptionPlansForSKU)(M)
      })
    }, [y, M, k]);
    let J = a.useCallback(() => {
      r(null != s, "No subscription listing"), r(null != P, "No application"), r(null != b, "No subscription plan"), r(y, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, f.openApplicationSubscriptionPaymentModal)({
          activeSubscription: G,
          analyticsSubscriptionType: C.SubscriptionTypes.APPLICATION,
          analyticsLocations: B,
          analyticsLocation: N,
          renderHeader: (e, t, n) => (0, i.jsx)(I.PurchaseHeader, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: b.id,
          skuId: b.sku_id,
          guildId: E,
          eligibleApplicationSubscriptionGuilds: D,
          planGroup: U,
          application: P,
          showBenefitsFirst: x,
          onComplete: T,
          forcesTransitionToGuild: _
        })
      };
      !W && F ? (0, g.confirmNoSharedServerSubscribeWarningModal)({
        application: P,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [y, s, b, U, P, E, W, F, B, N, G, x, D, T, _]);
    return {
      openModal: J,
      canOpenModal: z,
      cannotOpenReason: n
    }
  }