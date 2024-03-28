"use strict";
t.r(s), t.d(s, {
  default: function() {
    return c
  }
});
var a = t("735250");
t("470079");
var i = t("481060"),
  n = t("285952"),
  o = t("153124"),
  d = t("952164"),
  l = t("689938"),
  r = t("202070");

function c(e) {
  let {
    transitionState: s,
    onClose: t
  } = e, c = (0, o.useUID)();
  return (0, a.jsxs)(i.ModalRoot, {
    "aria-labelledby": c,
    transitionState: s,
    size: i.ModalSize.SMALL,
    children: [(0, a.jsx)(i.ModalHeader, {
      separator: !1,
      children: (0, a.jsx)(i.Heading, {
        id: c,
        variant: "heading-lg/semibold",
        children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER
      })
    }), (0, a.jsxs)(i.ModalContent, {
      children: [(0, a.jsx)(n.default, {
        justify: n.default.Justify.CENTER,
        children: (0, a.jsx)("div", {
          className: r.image
        })
      }), (0, a.jsx)(i.Text, {
        className: r.text,
        variant: "text-sm/normal",
        children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY
      })]
    }), (0, a.jsxs)(i.ModalFooter, {
      children: [(0, a.jsx)(i.Button, {
        onClick: function() {
          (0, d.openPremiumSite)(), t()
        },
        children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON
      }), (0, a.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.PRIMARY,
        onClick: t,
        children: l.default.Messages.CANCEL
      })]
    })]
  })
}