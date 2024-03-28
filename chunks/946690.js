"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("481060"),
  r = n("343735");
t.default = e => {
  let {
    icon: t,
    iconClassName: n,
    header: s,
    description: o
  } = e;
  return (0, a.jsxs)("div", {
    className: r.container,
    children: [(0, a.jsx)("div", {
      className: r.circle,
      children: (0, a.jsx)(t, {
        className: l()(r.icon, n),
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-md/bold",
        className: r.header,
        children: (0, a.jsx)(i.HeadingLevel, {
          children: s
        })
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: o
      })]
    })]
  })
}