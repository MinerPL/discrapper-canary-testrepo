"use strict";
t.r(s), t.d(s, {
  default: function() {
    return d
  }
});
var a = t("735250");
t("470079");
var l = t("481060"),
  o = t("153124"),
  n = t("154921"),
  i = t("689938"),
  c = t("465853"),
  r = t("462991");

function d(e) {
  let {
    onClose: s,
    transitionState: t
  } = e, d = (0, o.useUID)();
  return (0, a.jsxs)(l.ModalRoot, {
    transitionState: t,
    "aria-labelledby": d,
    size: l.ModalSize.SMALL,
    children: [(0, a.jsxs)(l.ModalContent, {
      className: c.content,
      children: [(0, a.jsx)(l.ModalCloseButton, {
        className: c.closeButton,
        onClick: s
      }), (0, a.jsx)("img", {
        className: c.image,
        src: r,
        alt: ""
      }), (0, a.jsx)(n.default, {
        className: c.title,
        id: d,
        size: n.default.Sizes.SIZE_24,
        color: n.default.Colors.HEADER_PRIMARY,
        children: i.default.Messages.INACCESSIBLE_CHANNEL_LINK_TITLE
      }), (0, a.jsx)(l.Text, {
        className: c.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: i.default.Messages.INACCESSIBLE_CHANNEL_LINK_SUBTITLE
      })]
    }), (0, a.jsx)(l.ModalFooter, {
      children: (0, a.jsx)(l.Button, {
        className: c.button,
        color: l.Button.Colors.BRAND,
        onClick: s,
        size: l.Button.Sizes.LARGE,
        children: i.default.Messages.OKAY
      })
    })]
  })
}