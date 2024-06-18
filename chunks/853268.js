"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var r = n(120356),
  i = n.n(r),
  a = n(481060),
  l = n(285952),
  o = n(819570),
  u = n(222127),
  c = n(611273);

function d(e) {
  let {
    value: t,
    onChange: n,
    subText: r,
    muted: d,
    marginTopStyle: h
  } = e;
  return (0, s.jsx)(l.Z, {
    className: null != h ? h : c.marginTop20,
    align: l.Z.Align.CENTER,
    children: (0, s.jsx)(a.Checkbox, {
      value: t,
      type: a.Checkbox.Types.INVERTED,
      onChange: (e, t) => n(t),
      className: u.checkbox,
      children: (0, s.jsx)(o.i_, {
        className: i()({
          [u.subText]: !d
        }),
        children: r
      })
    })
  })
}