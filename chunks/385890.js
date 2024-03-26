"use strict";
s.r(t), s.d(t, {
  COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
    return m
  }
});
var n = s("37983");
s("884691");
var l = s("446674"),
  a = s("77078"),
  i = s("162848"),
  r = s("349133"),
  u = s("705820"),
  o = s("889554"),
  d = s("177998"),
  c = s("697218"),
  S = s("145131"),
  E = s("635357"),
  f = s("642906"),
  I = s("85336"),
  _ = s("650484"),
  p = s("646718"),
  T = s("782340"),
  C = s("645547");
let m = {
  key: I.Step.GIFT_CUSTOMIZATION,
  renderStep: e => (0, n.jsx)(N, {
    ...e
  }),
  options: {
    isLargeModal: !0,
    useBreadcrumbLabel: () => T.default.Messages.GIFT_CARD_SELECTION
  }
};

function A(e) {
  let {
    onStepChange: t,
    onBackClick: s,
    showBackButton: l = !1,
    disabled: i = !1,
    loading: r = !1
  } = e, {
    hasPaymentSources: u
  } = (0, f.usePaymentContext)(), o = u ? I.Step.REVIEW : I.Step.ADD_PAYMENT_STEPS;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(a.Button, {
      onClick: () => t(o),
      disabled: i,
      submitting: r,
      children: T.default.Messages.PAGINATION_NEXT
    }), l ? (0, n.jsx)(d.default, {
      onClick: s
    }) : null]
  })
}

function N(e) {
  let {
    handleStepChange: t,
    handleClose: s
  } = e, {
    customGiftMessage: d = "",
    setCustomGiftMessage: I,
    giftRecipientError: m,
    validatingGiftRecipient: N,
    giftRecipient: h
  } = (0, E.useGiftContext)(), {
    selectedSkuId: P,
    selectedSkuPricePreview: g
  } = (0, f.usePaymentContext)(), O = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser());
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(_.PaymentPortalBody, {
      children: (0, n.jsxs)("div", {
        className: C.stepBody,
        children: [(0, n.jsx)("div", {
          className: C.bodyColumnMiddle,
          children: (0, n.jsx)(o.GiftAnimationOptions, {
            isShopGift: !0
          })
        }), (0, n.jsxs)("div", {
          className: C.bodyColumnRight,
          children: [(0, n.jsx)(r.default, {
            selectedSkuId: P,
            className: C.sendTo
          }), (0, n.jsx)(u.default, {
            sectionTitle: T.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => null == I ? void 0 : I(e),
            pendingText: d,
            currentText: d,
            disableThemedBackground: !0,
            className: C.customGiftMessageWrapper,
            innerClassName: C.customGiftMessage
          }), (0, n.jsx)(i.default, {
            selectedSkuId: P,
            selectedSkuPricePreview: g,
            className: C.giftPreview
          })]
        })]
      })
    }), (0, n.jsx)(_.PaymentPortalFooter, {
      children: (0, n.jsx)(a.ModalFooter, {
        justify: S.default.Justify.BETWEEN,
        align: S.default.Align.CENTER,
        children: (0, n.jsx)(A, {
          onStepChange: t,
          onBackClick: s,
          disabled: null != m || null == h || h.id === (null == O ? void 0 : O.id) || d.length > p.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
          loading: N
        })
      })
    })]
  })
}