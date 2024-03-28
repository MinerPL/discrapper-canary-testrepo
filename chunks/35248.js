"use strict";
n.r(t), n.d(t, {
  AwaitingBrowserCheckoutStepBody: function() {
    return u
  },
  AwaitingBrowserCheckoutStepFooter: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var r = n("481060"),
  i = n("311821"),
  l = n("285952"),
  a = n("409813"),
  o = n("689938");
let u = () => (0, s.jsx)("div", {
    children: (0, s.jsx)(r.Heading, {
      variant: "heading-xl/bold",
      children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
    })
  }),
  d = e => {
    let {
      onStepChange: t,
      onBackClick: n
    } = e;
    return (0, s.jsx)("div", {
      children: (0, s.jsxs)(r.ModalFooter, {
        justify: l.default.Justify.BETWEEN,
        align: l.default.Align.CENTER,
        children: [(0, s.jsx)(r.Button, {
          color: r.Button.Colors.BRAND,
          onClick: () => {
            t(a.Step.ADD_PAYMENT_STEPS)
          },
          children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
        }), (0, s.jsx)(i.default, {
          onClick: n
        })]
      })
    })
  }