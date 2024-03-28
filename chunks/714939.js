"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("259580"),
  i = s("158010"),
  r = s("689938"),
  o = s("116677");

function d(e) {
  let {
    role: t,
    onClick: s
  } = e;
  return (0, a.jsxs)(l.Clickable, {
    className: o.container,
    onClick: s,
    children: [(0, a.jsx)("div", {
      className: o.icon,
      children: (0, a.jsx)(i.default, {
        width: 20,
        height: 20
      })
    }), (0, a.jsxs)("div", {
      className: o.description,
      children: [(0, a.jsx)(l.Text, {
        className: o.label,
        color: "none",
        variant: "text-md/bold",
        children: r.default.Messages.ROLE_EVERYONE_LABEL
      }), (0, a.jsxs)(l.Text, {
        color: "none",
        variant: "text-xs/normal",
        children: [t.name, " • ", r.default.Messages.ROLE_EVERYONE_DESCRIPTION]
      })]
    }), (0, a.jsx)(n.default, {
      className: o.arrow,
      direction: n.default.Directions.RIGHT
    })]
  })
}