"use strict";
s.r(t), s.d(t, {
  openActionCompleteSuccessModal: function() {
    return d
  }
});
var n = s("37983");
s("884691");
var l = s("77078"),
  o = s("191814"),
  a = s("430677"),
  r = s("476765"),
  i = s("782340"),
  u = s("440809");

function c(e) {
  let {
    transitionState: t,
    Icon: s,
    title: c,
    body: d,
    onClose: E
  } = e, f = (0, r.useUID)();
  return (0, n.jsxs)(l.ModalRoot, {
    className: u.container,
    transitionState: t,
    "aria-labelledby": f,
    children: [(0, n.jsxs)(l.ModalContent, {
      children: [(0, n.jsx)(a.default, {
        Icon: s
      }), (0, n.jsx)(o.default, {
        size: 24
      }), (0, n.jsx)(l.Heading, {
        id: f,
        className: u.title,
        variant: "heading-xl/semibold",
        children: c
      }), (0, n.jsx)(o.default, {
        size: 8
      }), (0, n.jsx)(l.Text, {
        className: u.body,
        variant: "text-sm/normal",
        children: d
      })]
    }), (0, n.jsx)(o.default, {
      size: 24
    }), (0, n.jsx)(l.Button, {
      size: l.Button.Sizes.MEDIUM,
      grow: !1,
      onClick: E,
      children: i.default.Messages.GOT_IT
    })]
  })
}

function d(e) {
  (0, l.openModal)(t => (0, n.jsx)(c, {
    ...t,
    ...e
  }))
}