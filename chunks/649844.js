"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("37983");
n("884691");
var a = n("748820"),
  l = n("77078"),
  s = n("112679"),
  r = n("55689"),
  o = n("676379"),
  u = n("697218"),
  c = n("599110"),
  d = n("659500"),
  f = n("719923"),
  E = n("49111"),
  _ = n("646718");

function h(e) {
  let {
    initialPlanId: t,
    followupSKUInfo: h,
    onClose: S,
    onComplete: m,
    onSubscriptionConfirmation: p,
    analyticsLocations: v,
    analyticsObject: A,
    analyticsLocation: C,
    analyticsSourceLocation: T,
    isGift: g = !1,
    giftMessage: I,
    subscriptionTier: N,
    trialId: x,
    postSuccessGuild: y,
    openInvoiceId: b,
    applicationId: L,
    referralTrialOfferId: R,
    giftRecipient: M,
    returnRef: P,
    subscription: F,
    skipConfirm: H
  } = null != e ? e : {}, U = !1, D = (0, a.v4)(), w = u.default.getCurrentUser(), O = (0, f.isPremiumExactly)(w, _.PremiumTypes.TIER_2);
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("646139").then(n.bind(n, "646139"));
    return n => {
      let {
        onClose: a,
        ...l
      } = n;
      return (0, i.jsx)(e, {
        ...l,
        loadId: D,
        subscriptionTier: N,
        skuId: (0, f.castPremiumSubscriptionAsSkuId)(N),
        isGift: g,
        giftMessage: I,
        giftRecipient: M,
        initialPlanId: t,
        followupSKUInfo: h,
        onClose: (e, t) => {
          a(), null == S || S(e), e && (null == p || p(), !g && null != t && t === _.PremiumSubscriptionSKUs.TIER_2 && !O && d.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
        },
        onComplete: () => {
          U = !0, null == m || m(), !g && (0, o.setCanPlayWowMoment)(!0)
        },
        onSubscriptionConfirmation: p,
        analyticsLocations: v,
        analyticsObject: A,
        analyticsLocation: C,
        analyticsSourceLocation: T,
        trialId: x,
        postSuccessGuild: y,
        planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
        openInvoiceId: b,
        applicationId: L,
        referralTrialOfferId: R,
        returnRef: P,
        subscription: F,
        skipConfirm: !!H
      })
    }
  }, {
    modalKey: "payment-modal",
    onCloseCallback: () => {
      !U && c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: D,
        payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
        location: null != C ? C : A,
        source: T,
        subscription_type: E.SubscriptionTypes.PREMIUM,
        is_gift: g,
        eligible_for_trial: null != x,
        application_id: L,
        location_stack: v
      }), (0, s.clearError)(), (0, r.clearPurchaseTokenAuthState)(), null == S || S(U), U && (null == p || p())
    }
  })
}