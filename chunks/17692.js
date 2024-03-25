"use strict";
A.r(t), A.d(t, {
  default: function() {
    return u
  }
});
var a = A("37983"),
  l = A("884691"),
  n = A("414456"),
  r = A.n(n),
  s = A("77078"),
  i = A("931164"),
  o = A("667060"),
  d = A("919163");

function u(e) {
  let {
    color: t,
    className: A,
    variant: n,
    text: u,
    lineClamp: c
  } = e, f = (0, s.usePrivateHeadingLevel)(), g = l.useMemo(() => null == u ? null : (0, i.default)(u, !0, {
    allowHeading: null == c,
    allowList: null == c,
    initialHeaderLevel: f
  }), [u, c, f]);
  return (0, a.jsx)(s.Text, {
    className: r(A, d.markup, {
      [o.lineClamp2Plus]: null != c && c > 1,
      [o.lineClamp1]: 1 === c
    }),
    color: t,
    variant: n,
    lineClamp: c,
    children: g
  })
}