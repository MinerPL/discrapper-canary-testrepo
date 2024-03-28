"use strict";
t.r(a), t.d(a, {
  TwoWayLinkError: function() {
    return d
  }
});
var l = t("735250");
t("470079");
var n = t("481060"),
  s = t("285952"),
  r = t("441957"),
  o = t("689938"),
  i = t("837537"),
  c = t("387852");

function d(e) {
  let {
    onContinue: a,
    onClose: t,
    title: d,
    body: u
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(n.ModalHeader, {
      direction: s.default.Direction.VERTICAL,
      className: i.header,
      separator: !1,
      children: [(0, l.jsx)("img", {
        src: c,
        className: i.illustration,
        width: "254",
        height: "127",
        alt: ""
      }), (0, l.jsx)(n.Heading, {
        className: i.title,
        variant: "heading-xl/extrabold",
        children: d
      }), null != t && (0, l.jsx)(n.ModalCloseButton, {
        className: i.closeButton,
        onClick: t
      })]
    }), (0, l.jsx)(n.ModalContent, {
      className: i.body,
      paddingFix: !1,
      children: (0, l.jsx)(n.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: u
      })
    }), (0, l.jsx)(n.ModalFooter, {
      className: i.footer,
      children: (0, l.jsxs)(n.Button, {
        className: i.footerButton,
        color: n.Button.Colors.BRAND,
        onClick: a,
        children: [o.default.Messages.TRY_AGAIN, (0, l.jsx)(r.default, {
          className: i.launchIcon,
          width: "16",
          height: "16"
        })]
      })
    })]
  })
}