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
  s = r("782340"),
  o = r("677029"),
  u = t => {
    let {
      onClose: n
    } = t, r = (0, a.useUID)();
    return (0, e.jsxs)(i.ModalRoot, {
      ...t,
      "aria-labelledby": r,
      children: [(0, e.jsxs)(i.ModalHeader, {
        separator: !1,
        className: o.modalHeader,
        children: [(0, e.jsx)(i.Heading, {
          id: r,
          variant: "heading-xl/extrabold",
          children: s.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING
        }), (0, e.jsx)(i.ModalCloseButton, {
          className: o.closeButton,
          onClick: n
        })]
      }), (0, e.jsx)(i.ModalContent, {
        className: o.modalContent,
        children: (0, e.jsx)(i.Text, {
          variant: "text-md/normal",
          className: o.contentText,
          children: s.default.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_V2
        })
      }), (0, e.jsx)(i.ModalFooter, {
        children: (0, e.jsx)(i.Button, {
          className: o.button,
          size: i.Button.Sizes.MIN,
          onClick: n,
          children: s.default.Messages.OKAY
        })
      })]
    })
  }