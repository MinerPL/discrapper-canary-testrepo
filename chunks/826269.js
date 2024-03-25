"use strict";
r.r(n), r.d(n, {
  default: function() {
    return u
  }
});
var e = r("37983");
r("884691");
var i = r("77078"),
  a = r("476765"),
  o = r("782340"),
  s = r("606077"),
  u = t => {
    let {
      onClose: n
    } = t, r = (0, a.useUID)();
    return (0, e.jsxs)(i.ModalRoot, {
      ...t,
      "aria-labelledby": r,
      children: [(0, e.jsxs)(i.ModalHeader, {
        separator: !1,
        className: s.modalHeader,
        children: [(0, e.jsx)(i.Heading, {
          id: r,
          variant: "heading-xl/extrabold",
          children: o.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING
        }), (0, e.jsx)(i.ModalCloseButton, {
          className: s.closeButton,
          onClick: n
        })]
      }), (0, e.jsx)(i.ModalContent, {
        className: s.modalContent,
        children: (0, e.jsx)(i.Text, {
          variant: "text-md/normal",
          className: s.contentText,
          children: o.default.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_V2
        })
      }), (0, e.jsx)(i.ModalFooter, {
        children: (0, e.jsx)(i.Button, {
          className: s.button,
          size: i.Button.Sizes.MIN,
          onClick: n,
          children: o.default.Messages.OKAY
        })
      })]
    })
  }