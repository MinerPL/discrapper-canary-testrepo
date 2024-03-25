"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var s = l("37983");
l("884691");
var n = l("748820"),
  a = l("77078"),
  i = l("112679"),
  u = l("55689"),
  o = l("676379"),
  r = l("697218"),
  c = l("599110"),
  d = l("659500"),
  T = l("719923"),
  _ = l("49111"),
  E = l("646718");

function f(e) {
  let {
    initialPlanId: t,
    followupSKUInfo: f,
    onClose: p,
    onComplete: S,
    onSubscriptionConfirmation: I,
    analyticsLocations: m,
    analyticsObject: P,
    analyticsLocation: M,
    analyticsSourceLocation: C,
    isGift: R = !1,
    giftMessage: N,
    subscriptionTier: A,
    trialId: L,
    postSuccessGuild: U,
    openInvoiceId: O,
    applicationId: h,
    referralTrialOfferId: y,
    giftRecipient: b,
    returnRef: x,
    subscription: g
  } = null != e ? e : {}, v = !1, B = (0, n.v4)(), j = r.default.getCurrentUser(), D = (0, T.isPremiumExactly)(j, E.PremiumTypes.TIER_2);
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await l.el("646139").then(l.bind(l, "646139"));
    return l => {
      let {
        onClose: n,
        ...a
      } = l;
      return (0, s.jsx)(e, {
        ...a,
        loadId: B,
        subscriptionTier: A,
        skuId: (0, T.castPremiumSubscriptionAsSkuId)(A),
        isGift: R,
        giftMessage: N,
        giftRecipient: b,
        initialPlanId: t,
        followupSKUInfo: f,
        onClose: (e, t) => {
          n(), null == p || p(e), e && (null == I || I(), !R && null != t && t === E.PremiumSubscriptionSKUs.TIER_2 && !D && d.ComponentDispatch.dispatch(_.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
        },
        onComplete: () => {
          v = !0, null == S || S(), !R && (0, o.setCanPlayWowMoment)(!0)
        },
        onSubscriptionConfirmation: I,
        analyticsLocations: m,
        analyticsObject: P,
        analyticsLocation: M,
        analyticsSourceLocation: C,
        trialId: L,
        postSuccessGuild: U,
        planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
        openInvoiceId: O,
        applicationId: h,
        referralTrialOfferId: y,
        returnRef: x,
        subscription: g
      })
    }
  }, {
    modalKey: "payment-modal",
    onCloseCallback: () => {
      !v && c.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: B,
        payment_type: _.PurchaseTypeToAnalyticsPaymentType[_.PurchaseTypes.SUBSCRIPTION],
        location: null != M ? M : P,
        source: C,
        subscription_type: _.SubscriptionTypes.PREMIUM,
        is_gift: R,
        eligible_for_trial: null != L,
        application_id: h,
        location_stack: m
      }), (0, i.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == p || p(v), v && (null == I || I())
    }
  })
}