"use strict";
l.r(r), l.d(r, {
  default: function() {
    return j
  }
}), l("47120"), l("411104");
var t = l("735250"),
  n = l("470079"),
  s = l("160612"),
  a = l("120356"),
  i = l.n(a),
  o = l("846519"),
  c = l("481060"),
  d = l("609194"),
  u = l("881052"),
  p = l("128069"),
  m = l("598"),
  f = l("409813");
l("51499"), l("614277");
var E = l("66579"),
  N = l("559629"),
  S = l("122289"),
  x = l("70956"),
  h = l("981631"),
  _ = l("689938"),
  C = l("913175");
let T = new Set([f.Step.SKU_SELECT, f.Step.AWAITING_AUTHENTICATION, f.Step.AWAITING_PURCHASE_TOKEN_AUTH, f.Step.CONFIRM]);

function j(e) {
  let {
    steps: r,
    currentStep: l,
    body: a,
    paymentError: j,
    header: P,
    footer: v,
    isGift: A = !1,
    giftMessage: b = _.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
    hideBreadcrumbs: I = !1,
    isLoading: M = !1,
    purchaseError: R,
    purchaseErrorBlockRef: L,
    planError: g,
    onScroll: y,
    scrollerClassName: D,
    hasCurrencies: B = !1
  } = e, O = null;
  null != j && null == (0, f.errorToStep)(j) ? O = j : null != R ? O = R : null != g && (O = g);
  let k = null != O ? O.message : "";
  null != O && O instanceof u.BillingError && (O.code === p.ErrorCodes.CARD_DECLINED && B && (k += " ".concat(_.default.Messages.BILLING_ERROR_TRY_ANOTHER)), O.code === p.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (k = _.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), O.code === h.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (k = _.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
  let {
    stripe: U
  } = (0, m.usePaymentContext)();
  M = M || null == U;
  let G = n.useRef(new o.Timeout);
  n.useEffect(() => {
    let e = G.current;
    return null != U || e.isStarted() ? null != U && e.stop() : e.start(10 * x.default.Millis.SECOND, () => {
      let e = Error("Stripe took too long to load");
      (0, S.captureBillingException)(e)
    }), () => {
      e.stop()
    }
  }, [U]);
  let Y = r.includes(f.Step.PAYMENT_TYPE) ? f.Step.PAYMENT_TYPE : f.Step.ADD_PAYMENT_STEPS;
  return (0, t.jsxs)(s.Elements, {
    options: h.StripeElementsOptions,
    stripe: U,
    children: [P, (0, t.jsxs)("div", {
      className: i()("paymentModalContent", C.content),
      children: [A && l !== f.Step.CONFIRM ? (0, t.jsx)(d.default, {
        className: C.paymentNote,
        iconSize: d.default.Sizes.SMALL,
        icon: N.default,
        color: null == b ? d.default.Colors.PRIMARY : d.default.Colors.SECONDARY,
        children: b
      }) : null, I ? null : (0, t.jsx)("div", {
        className: C.breadcrumbsWrapper,
        children: (0, t.jsx)(E.default, {
          activeId: f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(l) ? Y : l,
          breadcrumbs: r.filter(e => !f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !T.has(e)).map(e => ({
            id: e,
            label: (0, f.getLabelForStep)(e)
          }))
        })
      }), (0, t.jsxs)("div", {
        className: C.bodyWrapper,
        children: [null == O ? null : (0, t.jsx)("div", {
          className: C.errorBlockWrapper,
          children: (0, t.jsx)(c.FormErrorBlock, {
            ref: L,
            children: k
          })
        }), M ? (0, t.jsx)(c.Spinner, {
          className: C.loadingBlock
        }) : (0, t.jsx)(c.Sequencer, {
          className: C.sequencer,
          staticClassName: C.sequencerStatic,
          animatedNodeClassName: C.sequencerAnimatedNode,
          fillParent: !0,
          step: l,
          steps: r,
          sideMargin: 20,
          children: (0, t.jsx)(c.AdvancedScrollerThin, {
            onScroll: y,
            className: i()(C.scroller, D),
            children: a
          })
        })]
      })]
    }), v]
  })
}