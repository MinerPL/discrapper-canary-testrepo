"use strict";
a.r(s), a.d(s, {
  default: function() {
    return h
  }
});
var t = a("735250");
a("470079");
var l = a("780384"),
  o = a("481060"),
  n = a("410030"),
  r = a("153124"),
  i = a("689938"),
  c = a("921758"),
  d = a("167969"),
  u = a("557256");

function h(e) {
  let {
    onClose: s,
    transitionState: a
  } = e, h = (0, r.useUID)(), m = (0, l.isThemeDark)((0, n.default)());
  return (0, t.jsxs)(o.ModalRoot, {
    transitionState: a,
    "aria-labelledby": h,
    size: o.ModalSize.SMALL,
    children: [(0, t.jsxs)(o.ModalContent, {
      className: c.content,
      children: [(0, t.jsx)(o.ModalCloseButton, {
        className: c.closeButton,
        onClick: s
      }), (0, t.jsx)("img", {
        className: c.image,
        src: m ? d : u,
        alt: ""
      }), (0, t.jsx)(o.Text, {
        variant: "text-lg/semibold",
        color: "header-primary",
        className: c.title,
        children: i.default.Messages.GUILD_PRODUCT_NOT_AVAILABLE_TITLE
      }), (0, t.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: c.body,
        children: i.default.Messages.GUILD_PRODUCT_NOT_AVAILABLE_BODY
      })]
    }), (0, t.jsx)(o.ModalFooter, {
      children: (0, t.jsx)(o.Button, {
        className: c.button,
        color: o.Button.Colors.BRAND,
        onClick: s,
        size: o.Button.Sizes.LARGE,
        children: i.default.Messages.OKAY
      })
    })]
  })
}