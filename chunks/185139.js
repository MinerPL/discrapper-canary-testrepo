"use strict";
l.r(r), l.d(r, {
  default: function() {
    return C
  }
}), l("47120"), l("411104");
var t = l("735250"),
  s = l("470079"),
  n = l("452079"),
  a = l("120356"),
  i = l.n(a),
  o = l("846519"),
  c = l("481060"),
  d = l("609194"),
  u = l("881052"),
  p = l("128069"),
  m = l("563132"),
  E = l("409813");
l("51499"), l("614277");
var N = l("66579"),
  f = l("559629"),
  S = l("122289"),
  _ = l("70956"),
  T = l("981631"),
  h = l("689938"),
  x = l("82090");
let A = new Set([E.Step.SKU_SELECT, E.Step.AWAITING_AUTHENTICATION, E.Step.AWAITING_PURCHASE_TOKEN_AUTH, E.Step.CONFIRM]);

function C(e) {
  let {
    steps: r,
    currentStep: l,
    body: a,
    paymentError: C,
    header: I,
    footer: b,
    isGift: j = !1,
    giftMessage: M = h.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
    hideBreadcrumbs: P = !1,
    isLoading: R = !1,
    purchaseError: L,
    purchaseErrorBlockRef: g,
    planError: v,
    onScroll: D,
    scrollerClassName: O,
    hasCurrencies: B = !1
  } = e, U = null;
  null != C && null == (0, E.errorToStep)(C) ? U = C : null != L ? U = L : null != v && (U = v);
  let y = null != U ? U.message : "";
  null != U && U instanceof u.BillingError && (U.code === p.ErrorCodes.CARD_DECLINED && B && (y += " ".concat(h.default.Messages.BILLING_ERROR_TRY_ANOTHER)), U.code === p.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (y = h.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), U.code === T.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (y = h.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
  let {
    stripe: k
  } = (0, m.usePaymentContext)();
  R = R || null == k;
  let G = s.useRef(new o.Timeout);
  s.useEffect(() => {
    let e = G.current;
    return null != k || e.isStarted() ? null != k && e.stop() : e.start(10 * _.default.Millis.SECOND, () => {
      let e = Error("Stripe took too long to load");
      (0, S.captureBillingException)(e)
    }), () => {
      e.stop()
    }
  }, [k]);
  let Y = r.includes(E.Step.PAYMENT_TYPE) ? E.Step.PAYMENT_TYPE : E.Step.ADD_PAYMENT_STEPS;
  return (0, t.jsxs)(n.Elements, {
    options: T.StripeElementsOptions,
    stripe: k,
    children: [I, (0, t.jsxs)("div", {
      className: i()("paymentModalContent", x.content),
      children: [j && l !== E.Step.CONFIRM ? (0, t.jsx)(d.default, {
        className: x.paymentNote,
        iconSize: d.default.Sizes.SMALL,
        icon: f.default,
        color: null == M ? d.default.Colors.PRIMARY : d.default.Colors.SECONDARY,
        children: M
      }) : null, P ? null : (0, t.jsx)("div", {
        className: x.breadcrumbsWrapper,
        children: (0, t.jsx)(N.default, {
          activeId: E.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(l) ? Y : l,
          breadcrumbs: r.filter(e => !E.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !A.has(e)).map(e => ({
            id: e,
            label: (0, E.getLabelForStep)(e)
          }))
        })
      }), (0, t.jsxs)("div", {
        className: x.bodyWrapper,
        children: [null == U ? null : (0, t.jsx)("div", {
          className: x.errorBlockWrapper,
          children: (0, t.jsx)(c.FormErrorBlock, {
            ref: g,
            children: y
          })
        }), R ? (0, t.jsx)(c.Spinner, {
          className: x.loadingBlock
        }) : (0, t.jsx)(c.Sequencer, {
          className: x.sequencer,
          staticClassName: x.sequencerStatic,
          animatedNodeClassName: x.sequencerAnimatedNode,
          fillParent: !0,
          step: l,
          steps: r,
          sideMargin: 20,
          children: (0, t.jsx)(c.AdvancedScrollerThin, {
            onScroll: D,
            className: i()(x.scroller, O),
            children: a
          })
        })]
      })]
    }), b]
  })
}