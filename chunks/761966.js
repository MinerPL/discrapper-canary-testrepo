"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(549631),
  l = n(517039);

function u(e) {
  let {
    children: t,
    className: n,
    size: r = o.Button.Sizes.MEDIUM,
    onlyShineOnHover: u = !1,
    ..._
  } = e;
  return (0, i.jsx)(o.ShinyButton, {
    ..._,
    color: o.Button.Colors.CUSTOM,
    size: r,
    className: s()(l.button, n),
    onlyShineOnHover: u,
    children: (0, i.jsxs)("div", {
      className: l.buttonContents,
      children: [(0, i.jsx)(a.Z, {
        className: l.icon
      }), t]
    })
  })
}