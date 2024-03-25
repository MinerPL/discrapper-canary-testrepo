"use strict";
n.r(t), n.d(t, {
  AwaitingPurchaseTokenAuthStepBody: function() {
    return u
  },
  AwaitingPurchaseTokenAuthStepFooter: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var r = n("77078"),
  a = n("145131"),
  i = n("782340"),
  l = n("25764");
let u = e => {
    let {
      className: t,
      isEmailResent: n,
      resendEmail: a
    } = e;
    return (0, s.jsx)("div", {
      className: t,
      children: (0, s.jsxs)("div", {
        className: l.awaitingWrapper,
        children: [(0, s.jsx)(r.Heading, {
          variant: "heading-xl/bold",
          children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
        }), (0, s.jsxs)("p", {
          children: [(0, s.jsx)(r.Text, {
            variant: "text-md/normal",
            children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
          }), (0, s.jsx)("br", {}), (0, s.jsx)(r.Text, {
            variant: "text-md/normal",
            children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
          }), (0, s.jsx)("br", {}), (0, s.jsxs)(r.Text, {
            variant: "text-md/normal",
            children: [i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, "\xa0", n ? i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, s.jsx)(r.Anchor, {
              onClick: a,
              children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
            })]
          })]
        })]
      })
    })
  },
  c = () => (0, s.jsx)("div", {
    children: (0, s.jsx)(r.ModalFooter, {
      justify: a.default.Justify.BETWEEN,
      align: a.default.Align.CENTER,
      children: (0, s.jsx)(r.Button, {
        "data-testid": "continue",
        color: r.Button.Colors.BRAND,
        disabled: !0,
        children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
      })
    })
  })