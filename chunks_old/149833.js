"use strict";
n.r(t), n.d(t, {
  AwaitingBrowserCheckoutStepBody: function() {
    return u
  },
  AwaitingBrowserCheckoutStepFooter: function() {
    return d
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  s = n("177998"),
  l = n("145131"),
  a = n("85336"),
  o = n("782340");
let u = () => (0, r.jsx)("div", {
    children: (0, r.jsx)(i.Heading, {
      variant: "heading-xl/bold",
      children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
    })
  }),
  d = e => {
    let {
      onStepChange: t,
      onBackClick: n
    } = e;
    return (0, r.jsx)("div", {
      children: (0, r.jsxs)(i.ModalFooter, {
        justify: l.default.Justify.BETWEEN,
        align: l.default.Align.CENTER,
        children: [(0, r.jsx)(i.Button, {
          color: i.Button.Colors.BRAND,
          onClick: () => {
            t(a.Step.ADD_PAYMENT_STEPS)
          },
          children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
        }), (0, r.jsx)(s.default, {
          onClick: n
        })]
      })
    })
  }