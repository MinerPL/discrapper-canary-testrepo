"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(377617),
  a = n(855693),
  l = n(689079),
  u = n(977202);
let _ = e => {
  switch (e.id) {
    case l.bi.BUILT_IN:
      return o.Z;
    case l.bi.FRECENCY:
      return a.Z;
    default:
      return
  }
};

function d(e) {
  let {
    section: t,
    className: n,
    width: r,
    height: o,
    padding: a,
    isSelected: l,
    selectable: d = !1,
    ...c
  } = e, E = _(t);
  return (0, i.jsx)("div", {
    className: s()(u.wrapper, n, {
      [u.selectable]: d,
      [u.selected]: d && l
    }),
    style: {
      width: r,
      height: o,
      padding: null != a ? a : 0
    },
    children: null != E ? (0, i.jsx)(E, {
      className: u.icon,
      width: r,
      height: o,
      ...c
    }) : null
  })
}