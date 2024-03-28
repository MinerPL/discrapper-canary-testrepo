"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("627341");
var l = s("735250");
s("470079");
var n = s("803997"),
  a = s.n(n),
  i = s("278074"),
  r = s("481060"),
  u = s("409813"),
  d = s("689938"),
  o = s("686613");

function c(e) {
  let {
    step: t,
    onClose: s
  } = e, n = (0, i.match)(t).with(u.Step.REVIEW, () => d.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER).with(u.Step.ADD_PAYMENT_STEPS, () => d.default.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE).with(u.Step.GIFT_CUSTOMIZATION, () => d.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER).with(u.Step.AWAITING_PURCHASE_TOKEN_AUTH, () => d.default.Messages.COLLECTIBLES_GIFT_COACHMARK_HEADING).with(u.Step.CONFIRM, () => "").otherwise(() => null);
  return null == n ? null : (0, l.jsxs)(r.ModalHeader, {
    className: a()(o.headerContainerGift),
    separator: t !== u.Step.CONFIRM,
    children: [(0, l.jsx)(r.Heading, {
      variant: "heading-lg/semibold",
      children: n
    }), (0, l.jsx)(r.ModalCloseButton, {
      onClick: s,
      className: o.closeButtonGift
    })]
  })
}