"use strict";
n.d(t, {
  v: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(1561),
  a = n(590471);

function l(e) {
  let {
    as: t,
    muted: n = !1,
    selected: r = !1,
    className: l,
    ...u
  } = e, _ = null != t ? t : o.P;
  return (0, i.jsx)(_, {
    ...u,
    className: s()(a.interactive, l, {
      [a.muted]: n,
      [a.selected]: r
    })
  })
}