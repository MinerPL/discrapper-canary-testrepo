"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var s = a("735250");
a("470079");
var l = a("481060"),
  r = a("499033"),
  n = a("934458"),
  u = a("665906"),
  d = a("689938"),
  i = a("253949");

function o(e) {
  let {
    channel: t,
    header: a,
    startThread: o
  } = e, c = (0, u.useCanStartPublicThread)(t), f = (0, u.useCanStartPrivateThread)(t);
  return (0, s.jsxs)("div", {
    className: i.container,
    children: [(0, s.jsxs)("div", {
      className: i.iconContainer,
      children: [(0, s.jsx)("div", {
        className: i.icon,
        children: (0, s.jsx)(n.default, {
          width: 36,
          height: 36
        })
      }), (0, s.jsx)(r.default, {
        className: i.stars
      })]
    }), (0, s.jsx)(l.Heading, {
      className: i.header,
      variant: "heading-xl/semibold",
      children: a
    }), (0, s.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      children: d.default.Messages.THREAD_BROWSER_EMPTY_STATE_SUBTEXT_REDESIGN
    }), c || f ? (0, s.jsx)(l.Button, {
      className: i.cta,
      onClick: o,
      children: d.default.Messages.CREATE_THREAD
    }) : null]
  })
}