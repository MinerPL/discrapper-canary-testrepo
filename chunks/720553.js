"use strict";
a.r(e), a.d(e, {
  default: function() {
    return c
  }
}), a("757143");
var o = a("735250");
a("470079");
var s = a("481060"),
  n = a("153124"),
  l = a("988158"),
  r = a("689938"),
  i = a("313987");

function c(t) {
  let {
    url: e,
    trustUrl: a,
    isProtocol: c,
    onConfirm: d,
    onClose: u,
    transitionState: _
  } = t, x = (0, n.useUID)(), {
    protocol: m,
    hostname: M,
    theRestOfTheUrl: h,
    shouldTrustUrl: E,
    setShouldTrustUrl: T,
    handleConfirm: R
  } = (0, l.useModalState)({
    url: e,
    trustUrl: a,
    onConfirm: d,
    onClose: u
  });
  return (0, o.jsxs)(s.ModalRoot, {
    size: s.ModalSize.DYNAMIC,
    transitionState: _,
    "aria-labelledby": x,
    children: [(0, o.jsxs)(s.ModalContent, {
      children: [(0, o.jsx)(s.Heading, {
        id: x,
        variant: "heading-xl/bold",
        className: i.title,
        children: r.default.Messages.MASKED_LINK_ALERT_V2_HEADER
      }), (0, o.jsx)(s.Text, {
        className: i.warningText,
        variant: "text-md/normal",
        children: c ? r.default.Messages.MASKED_LINK_ALERT_V2_WARNING_PROTOCOL.format({}) : r.default.Messages.MASKED_LINK_ALERT_V2_WARNING_WEBSITE
      }), (0, o.jsxs)(s.Scroller, {
        className: i.linkCalloutContainer,
        children: [(0, o.jsxs)(s.Text, {
          tag: "span",
          variant: c ? "text-md/semibold" : "text-md/normal",
          color: c ? "text-normal" : "text-muted",
          children: [m, "//"]
        }), (0, o.jsx)(s.Text, {
          tag: "span",
          variant: c ? "text-md/normal" : "text-md/semibold",
          color: c ? "text-muted" : "text-normal",
          children: M
        }), (0, o.jsx)(s.Text, {
          tag: "span",
          variant: "text-md/normal",
          color: "text-muted",
          children: h
        })]
      }), (0, o.jsx)(s.Checkbox, {
        className: i.checkbox,
        type: s.Checkbox.Types.INVERTED,
        value: E,
        onChange: (t, e) => T(e),
        children: (0, o.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: c ? r.default.Messages.MASKED_LINK_ALERT_V2_TRUST_PROTOCOL.format({
            protocol: m.replace(":", "")
          }) : r.default.Messages.MASKED_LINK_ALERT_V2_TRUST_WEBSITE.format({
            domain: M
          })
        })
      })]
    }), (0, o.jsxs)(s.ModalFooter, {
      children: [(0, o.jsx)(s.Button, {
        type: "button",
        size: s.Button.Sizes.MEDIUM,
        color: s.Button.Colors.BRAND,
        onClick: R,
        children: c ? r.default.Messages.MASKED_LINK_ALERT_V2_CONFIRM_PROTOCOL : r.default.Messages.MASKED_LINK_ALERT_V2_CONFIRM_WEBSITE
      }), (0, o.jsx)(s.Button, {
        type: "button",
        size: s.Button.Sizes.MEDIUM,
        color: s.Button.Colors.PRIMARY,
        onClick: u,
        look: s.ButtonLooks.LINK,
        children: r.default.Messages.GO_BACK
      })]
    })]
  })
}