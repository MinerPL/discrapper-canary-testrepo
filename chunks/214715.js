"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(993123);
let u = r.memo(function(e) {
  let {
    text: t,
    variant: n = "text-xs/medium",
    color: s = "text-normal",
    icon: u,
    className: _,
    selected: d,
    onMouseEnter: c,
    onMouseLeave: E,
    onClick: I
  } = e, T = r.useMemo(() => {
    if (null != I) return () => I(t)
  }, [I, t]);
  return (0, i.jsxs)(a.Clickable, {
    className: o()(l.trait, {
      [l.selected]: d,
      [l.selectable]: null != T,
      [l.clickable]: null != T
    }, _),
    onMouseEnter: c,
    onMouseLeave: E,
    onClick: T,
    children: [null != u && (0, i.jsx)(u, {
      height: 16,
      width: 16
    }), (0, i.jsx)(a.Text, {
      variant: n,
      color: s,
      lineClamp: 1,
      children: t
    })]
  })
});
t.Z = u