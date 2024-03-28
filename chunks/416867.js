"use strict";
s.r(t), s.d(t, {
  openActionCompleteSuccessModal: function() {
    return d
  }
});
var n = s("735250");
s("470079");
var l = s("481060"),
  a = s("682864"),
  o = s("22238"),
  i = s("153124"),
  r = s("689938"),
  u = s("309332");

function c(e) {
  let {
    transitionState: t,
    Icon: s,
    title: c,
    body: d,
    onClose: E
  } = e, f = (0, i.useUID)();
  return (0, n.jsxs)(l.ModalRoot, {
    className: u.container,
    transitionState: t,
    "aria-labelledby": f,
    children: [(0, n.jsxs)(l.ModalContent, {
      children: [(0, n.jsx)(o.default, {
        Icon: s
      }), (0, n.jsx)(a.default, {
        size: 24
      }), (0, n.jsx)(l.Heading, {
        id: f,
        className: u.__invalid_title,
        variant: "heading-xl/semibold",
        children: c
      }), (0, n.jsx)(a.default, {
        size: 8
      }), (0, n.jsx)(l.Text, {
        className: u.body,
        variant: "text-sm/normal",
        children: d
      })]
    }), (0, n.jsx)(a.default, {
      size: 24
    }), (0, n.jsx)(l.Button, {
      size: l.Button.Sizes.MEDIUM,
      grow: !1,
      onClick: E,
      children: r.default.Messages.GOT_IT
    })]
  })
}

function d(e) {
  (0, l.openModal)(t => (0, n.jsx)(c, {
    ...t,
    ...e
  }))
}