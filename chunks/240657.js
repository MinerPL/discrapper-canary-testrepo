"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("481060"),
  o = n("741914"),
  u = n("96442"),
  d = n("946278");

function c(e) {
  let {
    color: t,
    className: n,
    variant: l,
    text: c,
    lineClamp: f
  } = e, E = (0, r.usePrivateHeadingLevel)(), _ = a.useMemo(() => null == c ? null : (0, o.default)(c, !0, {
    allowHeading: null == f,
    allowList: null == f,
    initialHeaderLevel: E
  }), [c, f, E]);
  return (0, s.jsx)(r.Text, {
    className: i()(n, d.markup, {
      [u.lineClamp2Plus]: null != f && f > 1,
      [u.lineClamp1]: 1 === f
    }),
    color: t,
    variant: l,
    lineClamp: f,
    children: _
  })
}