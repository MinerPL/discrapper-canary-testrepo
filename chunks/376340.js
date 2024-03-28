"use strict";
t.r(a), t.d(a, {
  TwoWayLinkSuccess: function() {
    return i
  }
});
var l = t("735250");
t("470079");
var n = t("481060"),
  s = t("285952"),
  r = t("689938"),
  o = t("837537");

function i(e) {
  let {
    onClose: a,
    img: t,
    title: i,
    body: c,
    content: d
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(n.ModalHeader, {
      direction: s.default.Direction.VERTICAL,
      className: o.header,
      separator: !1,
      children: [(0, l.jsx)("div", {
        className: o.illustration,
        children: t
      }), (0, l.jsx)(n.Heading, {
        className: o.title,
        variant: "heading-xl/extrabold",
        children: i
      }), (0, l.jsx)(n.ModalCloseButton, {
        className: o.closeButton,
        onClick: a
      })]
    }), (0, l.jsxs)(n.ModalContent, {
      className: o.body,
      paddingFix: !1,
      children: [(0, l.jsx)(n.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: c
      }), d]
    }), (0, l.jsx)(n.ModalFooter, {
      className: o.footer,
      children: (0, l.jsx)(n.Button, {
        className: o.footerButton,
        color: n.Button.Colors.BRAND,
        onClick: a,
        children: r.default.Messages.DONE
      })
    })]
  })
}