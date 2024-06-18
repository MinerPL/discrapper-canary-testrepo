"use strict";
n.d(t, {
  k: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(939350),
  a = n(768160);

function l(e) {
  let {
    contents: t,
    label: n,
    className: r,
    color: l = "default"
  } = e;
  return 0 === t.length ? null : (0, i.jsxs)("div", {
    "aria-label": n,
    role: "group",
    className: r,
    children: [null != n ? (0, i.jsx)("div", {
      className: s()(a.groupLabel, o._[l]),
      children: n
    }) : null, t]
  })
}