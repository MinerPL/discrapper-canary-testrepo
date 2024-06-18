"use strict";
n.d(t, {
  Z: function() {
    return _
  },
  z: function() {
    return s
  }
});
var l, s, a = n(735250);
n(470079);
var i = n(120356),
  r = n.n(i),
  o = n(481060),
  u = n(507893),
  c = n(759231),
  d = n(239260);
(l = s || (s = {})).INFO = "info", l.WARNING = "warning";
let m = {
    info: d.info,
    warning: d.warning
  },
  E = {
    info: u.Z,
    warning: c.Z
  };

function _(e) {
  let {
    children: t,
    className: n,
    look: l = "info"
  } = e, s = E[l];
  return (0, a.jsxs)("div", {
    className: r()(d.root, n, m[l]),
    children: [(0, a.jsx)(s, {
      className: d.icon
    }), (0, a.jsx)(o.Text, {
      className: d.text,
      variant: "text-sm/medium",
      color: "text-normal",
      children: t
    })]
  })
}