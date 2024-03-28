"use strict";
n.r(t), n.d(t, {
  AwaitingPurchaseTokenAuthStepBody: function() {
    return u
  },
  AwaitingPurchaseTokenAuthStepFooter: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var s = n("481060"),
  a = n("285952"),
  l = n("689938"),
  r = n("806233");
let u = e => {
    let {
      className: t,
      isEmailResent: n,
      resendEmail: a
    } = e;
    return (0, i.jsx)("div", {
      className: t,
      children: (0, i.jsxs)("div", {
        className: r.awaitingWrapper,
        children: [(0, i.jsx)(s.Heading, {
          variant: "heading-xl/bold",
          children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
        }), (0, i.jsxs)("p", {
          children: [(0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
          }), (0, i.jsx)("br", {}), (0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
          }), (0, i.jsx)("br", {}), (0, i.jsxs)(s.Text, {
            variant: "text-md/normal",
            children: [l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, "\xa0", n ? l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, i.jsx)(s.Anchor, {
              onClick: a,
              children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
            })]
          })]
        })]
      })
    })
  },
  o = () => (0, i.jsx)("div", {
    children: (0, i.jsx)(s.ModalFooter, {
      justify: a.default.Justify.BETWEEN,
      align: a.default.Align.CENTER,
      children: (0, i.jsx)(s.Button, {
        "data-testid": "continue",
        color: s.Button.Colors.BRAND,
        disabled: !0,
        children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
      })
    })
  })