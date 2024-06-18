"use strict";
n.d(t, {
  Z0: function() {
    return l
  },
  zx: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(949058);

function l(e) {
  let {
    className: t
  } = e;
  return (0, i.jsx)("div", {
    className: s()(t, a.separator)
  })
}

function u(e) {
  let {
    onClick: t,
    onContextMenu: n,
    className: r,
    selected: l = !1,
    children: u,
    disabled: _ = !1,
    dangerous: d,
    ...c
  } = e;
  return (0, i.jsx)(o.Clickable, {
    onClick: _ ? void 0 : t,
    onContextMenu: _ ? void 0 : n,
    className: s()(r, {
      [a.button]: !0,
      [a.selected]: l,
      [a.disabled]: _,
      [a.dangerous]: d
    }),
    ...c,
    children: u
  })
}
t.ZP = function(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsx)("div", {
    className: s()(t, a.wrapper),
    children: n
  })
}