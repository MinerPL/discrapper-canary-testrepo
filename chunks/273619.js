"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("222007"), a("70102");
var n = a("37983"),
  r = a("884691"),
  s = a("41092"),
  l = a("414456"),
  o = a.n(l),
  i = a("862337"),
  u = a("77078"),
  c = a("812952"),
  d = a("448993"),
  p = a("736978"),
  S = a("642906"),
  E = a("85336");
a("153727"), a("650484");
var m = a("454589"),
  A = a("978679"),
  T = a("745279"),
  y = a("49111"),
  P = a("782340"),
  f = a("129429");
let N = new Set([E.Step.SKU_SELECT, E.Step.AWAITING_AUTHENTICATION, E.Step.AWAITING_PURCHASE_TOKEN_AUTH, E.Step.CONFIRM]);

function _(e) {
  let {
    steps: t,
    currentStep: a,
    body: l,
    paymentError: _,
    header: C,
    footer: h,
    isGift: M = !1,
    giftMessage: I = P.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
    hideBreadcrumbs: g = !1,
    isLoading: b = !1,
    purchaseError: R,
    purchaseErrorBlockRef: O,
    planError: v,
    onScroll: x,
    scrollerClassName: D,
    hasCurrencies: Y = !1
  } = e, k = null;
  null != _ && null == (0, E.errorToStep)(_) ? k = _ : null != R ? k = R : null != v && (k = v);
  let j = null != k ? k.message : "";
  null != k && k instanceof d.BillingError && (k.code === p.ErrorCodes.CARD_DECLINED && Y && (j += " ".concat(P.default.Messages.BILLING_ERROR_TRY_ANOTHER)), k.code === p.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (j = P.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), k.code === y.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (j = P.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
  let {
    stripe: L
  } = (0, S.usePaymentContext)();
  b = b || null == L;
  let w = r.useRef(new i.Timeout);
  r.useEffect(() => {
    let e = w.current;
    return null != L || e.isStarted() ? null != L && e.stop() : e.start(1e4, () => {
      let e = Error("Stripe took too long to load");
      (0, T.captureBillingException)(e)
    }), () => {
      e.stop()
    }
  }, [L]);
  let F = t.includes(E.Step.PAYMENT_TYPE) ? E.Step.PAYMENT_TYPE : E.Step.ADD_PAYMENT_STEPS;
  return (0, n.jsxs)(s.Elements, {
    options: y.StripeElementsOptions,
    stripe: L,
    children: [C, (0, n.jsxs)("div", {
      className: o("paymentModalContent", f.content),
      children: [M && a !== E.Step.CONFIRM ? (0, n.jsx)(c.default, {
        className: f.paymentNote,
        iconSize: c.default.Sizes.SMALL,
        icon: A.default,
        color: null == I ? c.default.Colors.PRIMARY : c.default.Colors.SECONDARY,
        children: I
      }) : null, g ? null : (0, n.jsx)("div", {
        className: f.breadcrumbsWrapper,
        children: (0, n.jsx)(m.default, {
          activeId: E.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(a) ? F : a,
          breadcrumbs: t.filter(e => !E.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !N.has(e)).map(e => ({
            id: e,
            label: (0, E.getLabelForStep)(e)
          }))
        })
      }), (0, n.jsxs)("div", {
        className: f.bodyWrapper,
        children: [null == k ? null : (0, n.jsx)("div", {
          className: f.errorBlockWrapper,
          children: (0, n.jsx)(u.FormErrorBlock, {
            ref: O,
            children: j
          })
        }), b ? (0, n.jsx)(u.Spinner, {
          className: f.loadingBlock
        }) : (0, n.jsx)(u.Sequencer, {
          className: f.sequencer,
          staticClassName: f.sequencerStatic,
          animatedNodeClassName: f.sequencerAnimatedNode,
          fillParent: !0,
          step: a,
          steps: t,
          sideMargin: 20,
          children: (0, n.jsx)(u.AdvancedScrollerThin, {
            onScroll: x,
            className: o(f.scroller, D),
            children: l
          })
        })]
      })]
    }), h]
  })
}