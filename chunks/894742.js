"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("222007");
var n = s("37983"),
  l = s("884691"),
  a = s("516555"),
  i = s("812204"),
  r = s("685665"),
  u = s("635357"),
  o = s("642906"),
  d = s("85336"),
  c = s("385179"),
  S = s("292215"),
  E = s("639137"),
  f = s("526139"),
  I = s("158184"),
  _ = s("385890"),
  p = s("337978"),
  T = s("49111"),
  C = s("843455"),
  m = s("773232");

function A(e) {
  let {
    onClose: t,
    onComplete: s,
    transitionState: A,
    loadId: N,
    skuId: h,
    isGift: P = !1,
    giftRecipient: g,
    giftMessage: O,
    analyticsLocations: x,
    returnRef: R
  } = e, {
    analyticsLocations: L
  } = (0, r.default)([...x, i.default.COLLECTIBLES_PAYMENT_MODAL]), v = l.useRef(new a.Environment), [M, F] = l.useState(null), j = [S.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, _.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, f.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...S.SHARED_STEP_CONFIGS, S.REVIEW_STEP_CONFIG, {
    key: d.Step.CONFIRM,
    renderStep: e => (0, n.jsx)(I.CollectiblesPaymentModalConfirmStep, {
      ...e,
      confettiCanvas: M,
      analyticsLocations: L
    }),
    options: {
      bodyClassName: m.modalOverrideBody,
      sliderBodyClassName: m.modalOverrideSliderBody
    }
  }];
  return (0, n.jsxs)(r.AnalyticsLocationProvider, {
    value: L,
    children: [(0, n.jsx)(a.ConfettiCanvas, {
      ref: F,
      className: m.confettiCanvas,
      environment: v.current
    }), (0, n.jsx)(o.PaymentContextProvider, {
      loadId: N,
      stepConfigs: j,
      applicationId: T.COLLECTIBLES_APPLICATION_ID,
      skuIDs: [h],
      isGift: P,
      activeSubscription: null,
      purchaseType: C.PurchaseTypes.ONE_TIME,
      children: (0, n.jsx)(u.GiftContextProvider, {
        isGift: P,
        giftRecipient: g,
        giftMessage: O,
        children: (0, n.jsx)(c.PaymentModal, {
          onClose: t,
          onComplete: s,
          applicationId: T.COLLECTIBLES_APPLICATION_ID,
          skuId: h,
          initialPlanId: null,
          analyticsLocations: L,
          transitionState: A,
          renderHeader: (e, t, s) => P ? (0, n.jsx)(E.default, {
            step: s,
            onClose: () => t(!1)
          }) : (0, n.jsx)(p.default, {
            step: s,
            onClose: () => t(!1)
          }),
          returnRef: R,
          hideShadow: !0
        })
      })
    })]
  })
}