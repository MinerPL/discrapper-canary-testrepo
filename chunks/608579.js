"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var l = s("735250"),
  n = s("470079"),
  a = s("803997"),
  i = s.n(a),
  r = s("911765"),
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
  h = s("37256");

function g(e) {
  let {
    onClose: t,
    onComplete: s,
    transitionState: a,
    loadId: g,
    skuId: x,
    isGift: P = !1,
    giftRecipient: O,
    giftMessage: R,
    analyticsLocations: v,
    returnRef: L
  } = e, {
    analyticsLocations: M
  } = (0, d.default)([...v, u.default.COLLECTIBLES_PAYMENT_MODAL]), j = n.useRef(new r.Environment), [F, y] = n.useState(null), [G, b] = n.useState(!1), U = (0, N.getCustomConfettiDisplayOptions)(x), D = n.useCallback(() => {
    b(!0), null == s || s()
  }, [s]), B = n.useCallback(e => {
    b(!1), t(e)
  }, [t]), k = [E.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, T.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, C.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...E.SHARED_STEP_CONFIGS, E.REVIEW_STEP_CONFIG, {
    key: f.Step.CONFIRM,
    renderStep: e => (0, l.jsx)(_.CollectiblesPaymentModalConfirmStep, {
      ...e,
      confettiCanvas: F,
      analyticsLocations: M,
      hideConfetti: null != U
    }),
    options: {
      bodyClassName: h.modalOverrideBody,
      sliderBodyClassName: h.modalOverrideSliderBody
    }
  }];
  return (0, l.jsxs)(d.AnalyticsLocationProvider, {
    value: M,
    children: [(0, l.jsx)(r.ConfettiCanvas, {
      ref: y,
      className: h.confettiCanvas,
      environment: j.current
    }), null != U && (0, l.jsx)("img", {
      src: U.confettiAssetSrc,
      className: i()(h.customConfetti, {
        [h.hidden]: !G
      }),
      style: U.style,
      alt: "",
      "aria-hidden": !0
    }), (0, l.jsx)(c.PaymentContextProvider, {
      loadId: g,
      stepConfigs: k,
      applicationId: m.COLLECTIBLES_APPLICATION_ID,
      skuIDs: [x],
      isGift: P,
      activeSubscription: null,
      purchaseType: A.PurchaseTypes.ONE_TIME,
      children: (0, l.jsx)(o.GiftContextProvider, {
        isGift: P,
        giftRecipient: O,
        giftMessage: R,
        children: (0, l.jsx)(S.PaymentModal, {
          onClose: B,
          onComplete: D,
          applicationId: m.COLLECTIBLES_APPLICATION_ID,
          skuId: x,
          initialPlanId: null,
          analyticsLocations: M,
          transitionState: a,
          renderHeader: (e, t, s) => P ? (0, l.jsx)(I.default, {
            step: s,
            onClose: () => t(!1)
          }) : (0, l.jsx)(p.default, {
            step: s,
            onClose: () => t(!1)
          }),
          returnRef: L,
          hideShadow: !0
        })
      })
    })]
  })
}