"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(380451);
let o = e => {
  let {
    title: t,
    subtitle: n,
    icon: o
  } = e;
  return (0, i.jsxs)("div", {
    className: s.wrapper,
    children: [null != o && (0, i.jsx)(o, {
      width: 16,
      height: 16,
      className: s.icon
    }), (0, i.jsx)(r.Text, {
      variant: "text-md/normal",
      className: s.title,
      children: t
    }), null != n && "" !== n ? (0, i.jsx)(r.Text, {
      variant: "text-xs/semibold",
      className: s.subtitle,
      children: n
    }) : null]
  })
}