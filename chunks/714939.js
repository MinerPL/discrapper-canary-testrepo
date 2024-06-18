"use strict";
t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(259580),
  a = t(158010),
  r = t(689938),
  o = t(837773);

function c(e) {
  let {
    role: s,
    onClick: t
  } = e;
  return (0, n.jsxs)(i.Clickable, {
    className: o.container,
    onClick: t,
    children: [(0, n.jsx)("div", {
      className: o.icon,
      children: (0, n.jsx)(a.Z, {
        width: 20,
        height: 20
      })
    }), (0, n.jsxs)("div", {
      className: o.description,
      children: [(0, n.jsx)(i.Text, {
        className: o.label,
        color: "none",
        variant: "text-md/bold",
        children: r.Z.Messages.ROLE_EVERYONE_LABEL
      }), (0, n.jsxs)(i.Text, {
        color: "none",
        variant: "text-xs/normal",
        children: [s.name, " • ", r.Z.Messages.ROLE_EVERYONE_DESCRIPTION]
      })]
    }), (0, n.jsx)(l.Z, {
      className: o.arrow,
      direction: l.Z.Directions.RIGHT
    })]
  })
}