"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250);
n(470079);
var r = n(772848),
  s = n(481060),
  o = n(976255),
  a = n(667),
  l = n(138464),
  u = n(594174),
  _ = n(626135),
  d = n(585483),
  c = n(74538),
  E = n(981631),
  I = n(474936);

function T(e) {
  let {
    initialPlanId: t,
    followupSKUInfo: T,
    onClose: h,
    onComplete: S,
    onSubscriptionConfirmation: f,
    analyticsLocations: N,
    analyticsObject: A,
    analyticsLocation: m,
    analyticsSourceLocation: O,
    isGift: R = !1,
    giftMessage: C,
    subscriptionTier: p,
    trialId: g,
    postSuccessGuild: L,
    openInvoiceId: v,
    applicationId: D,
    referralTrialOfferId: M,
    giftRecipient: P,
    returnRef: y,
    subscription: U,
    skipConfirm: b
  } = null != e ? e : {}, G = !1, w = (0, r.Z)(), k = u.default.getCurrentUser(), B = (0, c.M5)(k, I.p9.TIER_2);
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("29549"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("31605"), n.e("8016"), n.e("57878"), n.e("68136"), n.e("29625"), n.e("68553")]).then(n.bind(n, 7305));
    return n => {
      let {
        onClose: r,
        ...s
      } = n;
      return (0, i.jsx)(e, {
        ...s,
        loadId: w,
        subscriptionTier: p,
        skuId: (0, c.Wz)(p),
        isGift: R,
        giftMessage: C,
        giftRecipient: P,
        initialPlanId: t,
        followupSKUInfo: T,
        onClose: (e, t) => {
          r(), null == h || h(e), e && (null == f || f(), !R && null != t && t === I.Si.TIER_2 && !B && d.S.dispatch(E.CkL.PREMIUM_SUBSCRIPTION_CREATED))
        },
        onComplete: () => {
          G = !0, null == S || S(), !R && (0, l.H)(!0)
        },
        onSubscriptionConfirmation: f,
        analyticsLocations: N,
        analyticsObject: A,
        analyticsLocation: m,
        analyticsSourceLocation: O,
        trialId: g,
        postSuccessGuild: L,
        planGroup: I.Y1,
        openInvoiceId: v,
        applicationId: D,
        referralTrialOfferId: M,
        returnRef: y,
        subscription: U,
        skipConfirm: !!b
      })
    }
  }, {
    modalKey: "payment-modal",
    onCloseCallback: () => {
      !G && _.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: w,
        payment_type: E.Zuq[E.GZQ.SUBSCRIPTION],
        location: null != m ? m : A,
        source: O,
        subscription_type: E.NYc.PREMIUM,
        is_gift: R,
        eligible_for_trial: null != g,
        application_id: D,
        location_stack: N
      }), (0, o.fw)(), (0, a.p)(), null == h || h(G), G && (null == f || f())
    }
  })
}