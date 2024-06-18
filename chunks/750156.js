"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(346656),
  a = n(227356),
  l = n(816184);
t.Z = function(e) {
  let {
    guild: t,
    children: n
  } = e, r = null != t ? (0, i.jsx)(o.Z, {
    guild: t,
    size: o.Z.Sizes.MEDIUM,
    className: s()(l.icon, null == t.icon ? l.textIcon : l.imageIcon),
    active: !0
  }) : null;
  return (0, i.jsxs)("span", {
    children: [(0, i.jsx)(a.Z, {
      children: r
    }), (0, i.jsx)("span", {
      className: l.name,
      children: n
    })]
  })
}