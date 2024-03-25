"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007"), n("70102");
var r = n("37983"),
  l = n("884691"),
  s = n("41092"),
  a = n("414456"),
  i = n.n(a),
  o = n("862337"),
  u = n("77078"),
  c = n("812952"),
  d = n("448993"),
  E = n("736978"),
  _ = n("642906"),
  f = n("85336");
n("153727"), n("650484");
var T = n("454589"),
  I = n("978679"),
  R = n("745279"),
  p = n("718517"),
  A = n("49111"),
  S = n("782340"),
  C = n("540700");
let M = new Set([f.Step.SKU_SELECT, f.Step.AWAITING_AUTHENTICATION, f.Step.AWAITING_PURCHASE_TOKEN_AUTH, f.Step.CONFIRM]);

function N(e) {
  let {
    steps: t,
    currentStep: n,
    body: a,
    paymentError: N,
    header: m,
    footer: P,
    isGift: h = !1,
    giftMessage: L = S.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
    hideBreadcrumbs: O = !1,
    isLoading: U = !1,
    purchaseError: D,
    purchaseErrorBlockRef: v,
    planError: x,
    onScroll: g,
    scrollerClassName: H,
    hasCurrencies: y = !1
  } = e, j = null;
  null != N && null == (0, f.errorToStep)(N) ? j = N : null != D ? j = D : null != x && (j = x);
  let b = null != j ? j.message : "";
  null != j && j instanceof d.BillingError && (j.code === E.ErrorCodes.CARD_DECLINED && y && (b += " ".concat(S.default.Messages.BILLING_ERROR_TRY_ANOTHER)), j.code === E.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (b = S.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), j.code === A.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (b = S.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
  let {
    stripe: B
  } = (0, _.usePaymentContext)();
  U = U || null == B;
  let G = l.useRef(new o.Timeout);
  l.useEffect(() => {
    let e = G.current;
    return null != B || e.isStarted() ? null != B && e.stop() : e.start(10 * p.default.Millis.SECOND, () => {
      let e = Error("Stripe took too long to load");
      (0, R.captureBillingException)(e)
    }), () => {
      e.stop()
    }
  }, [B]);
  let V = t.includes(f.Step.PAYMENT_TYPE) ? f.Step.PAYMENT_TYPE : f.Step.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(s.Elements, {
    options: A.StripeElementsOptions,
    stripe: B,
    children: [m, (0, r.jsxs)("div", {
      className: i("paymentModalContent", C.content),
      children: [h && n !== f.Step.CONFIRM ? (0, r.jsx)(c.default, {
        className: C.paymentNote,
        iconSize: c.default.Sizes.SMALL,
        icon: I.default,
        color: null == L ? c.default.Colors.PRIMARY : c.default.Colors.SECONDARY,
        children: L
      }) : null, O ? null : (0, r.jsx)("div", {
        className: C.breadcrumbsWrapper,
        children: (0, r.jsx)(T.default, {
          activeId: f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n) ? V : n,
          breadcrumbs: t.filter(e => !f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !M.has(e)).map(e => ({
            id: e,
            label: (0, f.getLabelForStep)(e)
          }))
        })
      }), (0, r.jsxs)("div", {
        className: C.bodyWrapper,
        children: [null == j ? null : (0, r.jsx)("div", {
          className: C.errorBlockWrapper,
          children: (0, r.jsx)(u.FormErrorBlock, {
            ref: v,
            children: b
          })
        }), U ? (0, r.jsx)(u.Spinner, {
          className: C.loadingBlock
        }) : (0, r.jsx)(u.Sequencer, {
          className: C.sequencer,
          staticClassName: C.sequencerStatic,
          animatedNodeClassName: C.sequencerAnimatedNode,
          fillParent: !0,
          step: n,
          steps: t,
          sideMargin: 20,
          children: (0, r.jsx)(u.AdvancedScrollerThin, {
            onScroll: g,
            className: i(C.scroller, H),
            children: a
          })
        })]
      })]
    }), P]
  })
}