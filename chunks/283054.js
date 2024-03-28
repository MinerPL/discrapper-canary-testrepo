"use strict";
t.r(s), t.d(s, {
  default: function() {
    return i
  }
});
var a = t("735250");
t("470079");
var o = t("481060"),
  n = t("153124"),
  l = t("266983"),
  r = t("689938"),
  d = t("291095");

function i(e) {
  let {
    transitionState: s,
    onClose: t
  } = e, i = (0, n.useUID)();
  return (0, a.jsxs)(o.ModalRoot, {
    transitionState: s,
    "aria-labelledby": i,
    children: [(0, a.jsxs)(o.ModalContent, {
      className: d.content,
      children: [(0, a.jsx)(l.default, {
        className: d.image,
        color: o.tokens.colors.TEXT_PRIMARY
      }), (0, a.jsx)(o.Heading, {
        className: d.title,
        variant: "heading-xl/extrabold",
        children: r.default.Messages.PACKAGES_CLAIM_HEADER
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: r.default.Messages.PACKAGES_CLAIM_BODY
      })]
    }), (0, a.jsxs)(o.ModalFooter, {
      children: [(0, a.jsx)(o.Button, {
        onClick: () => {
          t()
        },
        children: r.default.Messages.PACKAGES_CLAIM_CONTINUE
      }), (0, a.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: t,
        children: r.default.Messages.PACKAGES_CLAIM_CANCEL
      })]
    })]
  })
}