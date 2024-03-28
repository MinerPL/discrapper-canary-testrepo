"use strict";
s.r(e), s.d(e, {
  default: function() {
    return o
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  r = s("338690"),
  d = s("689938"),
  i = s("540039");

function o(t) {
  let {
    transitionState: e,
    onClose: s
  } = t;
  return (0, n.jsxs)(a.ModalRoot, {
    transitionState: e,
    children: [(0, n.jsx)(a.ModalHeader, {
      separator: !1,
      children: (0, n.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: d.default.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_HEADER
      })
    }), (0, n.jsxs)(a.ModalContent, {
      children: [(0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        children: d.default.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_BODY
      }), (0, n.jsx)("div", {
        className: i.art
      })]
    }), (0, n.jsx)(a.ModalFooter, {
      children: (0, n.jsx)(a.Button, {
        type: "submit",
        color: a.Button.Colors.BRAND,
        onClick: () => {
          (0, r.default)(), s()
        },
        children: d.default.Messages.OKAY
      })
    })]
  })
}