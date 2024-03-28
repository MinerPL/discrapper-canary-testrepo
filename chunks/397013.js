"use strict";
s.r(a);
var t = s("735250");
s("470079");
var l = s("481060"),
  d = s("153124"),
  n = s("689938"),
  o = s("422052");
a.default = e => {
  let {
    onClose: a
  } = e, s = (0, d.useUID)();
  return (0, t.jsxs)(l.ModalRoot, {
    ...e,
    "aria-labelledby": s,
    children: [(0, t.jsxs)(l.ModalHeader, {
      separator: !1,
      className: o.modalHeader,
      children: [(0, t.jsx)(l.Heading, {
        id: s,
        variant: "heading-xl/extrabold",
        children: n.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING
      }), (0, t.jsx)(l.ModalCloseButton, {
        className: o.closeButton,
        onClick: a
      })]
    }), (0, t.jsx)(l.ModalContent, {
      className: o.modalContent,
      children: (0, t.jsx)(l.Text, {
        variant: "text-md/normal",
        className: o.contentText,
        children: n.default.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_V2
      })
    }), (0, t.jsx)(l.ModalFooter, {
      children: (0, t.jsx)(l.Button, {
        className: o.button,
        size: l.Button.Sizes.MIN,
        onClick: a,
        children: n.default.Messages.OKAY
      })
    })]
  })
}