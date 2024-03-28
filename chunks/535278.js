"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var s = a("735250");
a("470079");
var r = a("481060"),
  n = a("153124"),
  i = a("689938"),
  d = a("8742"),
  l = a("365627");

function o(e) {
  let {
    transitionState: t,
    onClose: a,
    listing: o,
    subscription: c
  } = e, I = (0, n.useUID)();
  return (0, s.jsxs)(r.ModalRoot, {
    transitionState: t,
    "aria-labelledby": I,
    children: [(0, s.jsxs)(r.ModalContent, {
      className: d.contentContainer,
      children: [(0, s.jsx)("img", {
        src: l,
        alt: ""
      }), (0, s.jsx)(r.Heading, {
        className: d.title,
        variant: "heading-xl/bold",
        color: "header-primary",
        id: I,
        children: i.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
          tier: o.name
        })
      }), (0, s.jsx)(r.Text, {
        className: d.subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: i.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
          timestamp: null == c ? void 0 : c.currentPeriodEnd
        })
      })]
    }), (0, s.jsx)(r.ModalFooter, {
      children: (0, s.jsx)(r.Button, {
        size: r.Button.Sizes.MEDIUM,
        grow: !1,
        onClick: a,
        children: i.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })
    })]
  })
}