"use strict";
s.r(t), s.d(t, {
  COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
    return m
  }
});
var l = s("735250");
s("470079");
var n = s("442837"),
  a = s("481060"),
  i = s("628952"),
  r = s("225657"),
  u = s("927699"),
  d = s("987716"),
  o = s("311821"),
  c = s("594174"),
  f = s("285952"),
  S = s("987209"),
  E = s("598"),
  I = s("409813"),
  C = s("614277"),
  _ = s("474936"),
  T = s("689938"),
  p = s("170754");
let m = {
  key: I.Step.GIFT_CUSTOMIZATION,
  renderStep: e => (0, l.jsx)(A, {
    ...e
  }),
  options: {
    isLargeModal: !0,
    useBreadcrumbLabel: () => T.default.Messages.GIFT_CARD_SELECTION
  }
};

function N(e) {
  let {
    onStepChange: t,
    onBackClick: s,
    showBackButton: n = !1,
    disabled: i = !1,
    loading: r = !1
  } = e, {
    hasPaymentSources: u
  } = (0, E.usePaymentContext)(), d = u ? I.Step.REVIEW : I.Step.ADD_PAYMENT_STEPS;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.Button, {
      onClick: () => t(d),
      disabled: i,
      submitting: r,
      children: T.default.Messages.PAGINATION_NEXT
    }), n ? (0, l.jsx)(o.default, {
      onClick: s
    }) : null]
  })
}

function A(e) {
  let {
    handleStepChange: t,
    handleClose: s
  } = e, {
    customGiftMessage: o = "",
    setCustomGiftMessage: I,
    giftRecipientError: m,
    validatingGiftRecipient: A,
    giftRecipient: h
  } = (0, S.useGiftContext)(), {
    selectedSkuId: g,
    selectedSkuPricePreview: x
  } = (0, E.usePaymentContext)(), P = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser());
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(C.PaymentPortalBody, {
      children: (0, l.jsxs)("div", {
        className: p.stepBody,
        children: [(0, l.jsx)("div", {
          className: p.bodyColumnMiddle,
          children: (0, l.jsx)(d.GiftAnimationOptions, {
            isShopGift: !0
          })
        }), (0, l.jsxs)("div", {
          className: p.bodyColumnRight,
          children: [(0, l.jsx)(r.default, {
            selectedSkuId: g,
            className: p.sendTo
          }), (0, l.jsx)(u.default, {
            sectionTitle: T.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => null == I ? void 0 : I(e),
            pendingText: o,
            currentText: o,
            disableThemedBackground: !0,
            className: p.customGiftMessageWrapper,
            innerClassName: p.customGiftMessage
          }), (0, l.jsx)(i.default, {
            selectedSkuId: g,
            selectedSkuPricePreview: x,
            className: p.giftPreview
          })]
        })]
      })
    }), (0, l.jsx)(C.PaymentPortalFooter, {
      children: (0, l.jsx)(a.ModalFooter, {
        justify: f.default.Justify.BETWEEN,
        align: f.default.Align.CENTER,
        children: (0, l.jsx)(N, {
          onStepChange: t,
          onBackClick: s,
          disabled: null != m || null == h || h.id === (null == P ? void 0 : P.id) || o.length > _.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
          loading: A
        })
      })
    })]
  })
}