"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("481060"),
  o = n("442970");
t.default = s.memo(function(e) {
  let {
    onClick: t,
    children: n,
    className: s
  } = e;
  return (0, a.jsx)(r.Button, {
    className: i()(o.button, s),
    wrapperClassName: o.buttonWrapper,
    look: r.Button.Looks.FILLED,
    color: r.Button.Colors.BRAND_NEW,
    onClick: t,
    children: n
  })
})