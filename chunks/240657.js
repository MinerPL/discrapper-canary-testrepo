"use strict";
A.r(t), A.d(t, {
  default: function() {
    return u
  }
});
var a = A("735250"),
  l = A("470079"),
  s = A("803997"),
  n = A.n(s),
  r = A("481060"),
  i = A("741914"),
  o = A("495705"),
  d = A("931093");

function u(e) {
  let {
    color: t,
    className: A,
    variant: s,
    text: u,
    lineClamp: c
  } = e, f = (0, r.usePrivateHeadingLevel)(), g = l.useMemo(() => null == u ? null : (0, i.default)(u, !0, {
    allowHeading: null == c,
    allowList: null == c,
    initialHeaderLevel: f
  }), [u, c, f]);
  return (0, a.jsx)(r.Text, {
    className: n()(A, d.markup, {
      [o.lineClamp2Plus]: null != c && c > 1,
      [o.lineClamp1]: 1 === c
    }),
    color: t,
    variant: s,
    lineClamp: c,
    children: g
  })
}