"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(825303);
let l = e => {
  let {
    data: t,
    disabled: n
  } = e, {
    content: r,
    className: l,
    onClick: u,
    disabled: _
  } = t;
  return (0, i.jsx)(o.FocusRing, {
    children: (0, i.jsx)("button", {
      type: "button",
      className: s()(a.item, l),
      onClick: u,
      disabled: n || _,
      children: r
    })
  })
};
t.Z = e => {
  let {
    buttons: t,
    disabled: n,
    className: r
  } = e;
  return (0, i.jsx)("div", {
    role: "group",
    className: s()(a.group, r),
    children: t.map((e, t) => (0, i.jsx)(l, {
      data: e,
      disabled: n
    }, t))
  })
}