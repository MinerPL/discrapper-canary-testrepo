"use strict";
r.r(e), r.d(e, {
  default: function() {
    return i
  }
});
var n = r("735250");
r("470079");
var s = r("481060"),
  a = r("689938"),
  o = r("574112");

function i(t) {
  let {
    onClose: e,
    transitionState: r,
    body: i
  } = t;
  return (0, n.jsxs)(s.ModalRoot, {
    transitionState: r,
    children: [(0, n.jsx)(s.ModalHeader, {
      separator: !1,
      children: (0, n.jsx)(s.FormTitle, {
        tag: "h2",
        className: o.title,
        children: a.default.Messages.STREAM_REPORTED
      })
    }), (0, n.jsx)(s.ModalContent, {
      children: "string" == typeof i ? (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: i
      }) : i
    }), (0, n.jsx)(s.ModalFooter, {
      children: (0, n.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        onClick: e,
        children: a.default.Messages.DONE
      })
    })]
  })
}