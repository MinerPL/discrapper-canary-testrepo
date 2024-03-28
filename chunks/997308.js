"use strict";
a.r(s), a.d(s, {
  default: function() {
    return r
  }
});
var t = a("735250");
a("470079");
var d = a("481060"),
  i = a("285952"),
  n = a("689938"),
  l = a("478614");

function r(e) {
  let {
    transitionState: s,
    onClose: a
  } = e;
  return (0, t.jsxs)(d.ModalRoot, {
    size: d.ModalSize.DYNAMIC,
    transitionState: s,
    "aria-label": n.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER,
    children: [(0, t.jsxs)(d.ModalHeader, {
      justify: i.default.Justify.BETWEEN,
      separator: !1,
      children: [(0, t.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        className: l.header,
        children: n.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER
      }), (0, t.jsx)(d.ModalCloseButton, {
        onClick: a
      })]
    }), (0, t.jsxs)(d.ModalContent, {
      children: [(0, t.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: n.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_BODY
      }), (0, t.jsx)("div", {
        className: l.fullArt
      })]
    }), (0, t.jsx)(d.ModalFooter, {
      children: (0, t.jsx)(d.Button, {
        onClick: a,
        children: n.default.Messages.OKAY
      })
    })]
  })
}