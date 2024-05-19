"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var l = s("735250"),
  n = s("470079"),
  a = s("120356"),
  i = s.n(a),
  r = s("887024"),
  u = s("100527"),
  d = s("906732"),
  o = s("987209"),
  c = s("598"),
  f = s("409813"),
  S = s("791785"),
  E = s("961830"),
  I = s("742956"),
  C = s("346790"),
  _ = s("49308"),
  T = s("117652"),
  p = s("126982"),
  m = s("981631"),
  N = s("302800"),
  A = s("231338"),
  h = s("257450");

function g(e) {
  let {
    onClose: t,
    onComplete: s,
    onStepChange: a,
    transitionState: g,
    loadId: x,
    skuId: P,
    isGift: O = !1,
    giftRecipient: R,
    giftMessage: v,
    analyticsLocations: L,
    returnRef: M
  } = e, {
    analyticsLocations: j
  } = (0, d.default)([...L, u.default.COLLECTIBLES_PAYMENT_MODAL]), F = n.useRef(new r.Environment), [y, G] = n.useState(null), [b, U] = n.useState(!1), D = n.useMemo(() => (0, N.getCustomConfettiDisplayOptions)(P), [P]), B = n.useCallback(() => {
    U(!0), null == s || s()
  }, [s]), k = n.useCallback(e => {
    U(!1), t(e)
  }, [t]), H = n.useMemo(() => [E.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, T.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, C.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...E.SHARED_STEP_CONFIGS, E.REVIEW_STEP_CONFIG, {
    key: f.Step.CONFIRM,
    renderStep: e => (0, l.jsx)(_.CollectiblesPaymentModalConfirmStep, {
      ...e,
      confettiCanvas: y,
      analyticsLocations: j,
      hideConfetti: null != D
    }),
    options: {
      bodyClassName: h.modalOverrideBody,
      sliderBodyClassName: h.modalOverrideSliderBody
    }
  }], [j, y, D]);
  return (0, l.jsxs)(d.AnalyticsLocationProvider, {
    value: j,
    children: [(0, l.jsx)(r.ConfettiCanvas, {
      ref: G,
      className: h.confettiCanvas,
      environment: F.current
    }), null != D && (0, l.jsx)("img", {
      src: D.confettiAssetSrc,
      className: i()(h.customConfetti, {
        [h.hidden]: !b
      }),
      style: D.style,
      alt: "",
      "aria-hidden": !0
    }), (0, l.jsx)(c.PaymentContextProvider, {
      loadId: x,
      stepConfigs: H,
      applicationId: m.COLLECTIBLES_APPLICATION_ID,
      skuIDs: [P],
      isGift: O,
      activeSubscription: null,
      purchaseType: A.PurchaseTypes.ONE_TIME,
      children: (0, l.jsx)(o.GiftContextProvider, {
        isGift: O,
        giftRecipient: R,
        giftMessage: v,
        children: (0, l.jsx)(S.PaymentModal, {
          onClose: k,
          onComplete: B,
          applicationId: m.COLLECTIBLES_APPLICATION_ID,
          skuId: P,
          initialPlanId: null,
          analyticsLocations: j,
          transitionState: g,
          renderHeader: (e, t, s) => O ? (0, l.jsx)(I.default, {
            step: s,
            onClose: () => t(!1)
          }) : (0, l.jsx)(p.default, {
            step: s,
            onClose: () => t(!1)
          }),
          returnRef: M,
          onStepChange: a,
          hideShadow: !0
        })
      })
    })]
  })
}