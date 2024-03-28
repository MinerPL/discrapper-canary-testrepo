"use strict";
n.r(t);
var l = n("735250"),
  u = n("470079"),
  s = n("481060"),
  a = n("703656"),
  r = n("981631");
t.default = u.forwardRef(function(e, t) {
  let {
    href: n,
    children: i,
    onClick: I,
    onKeyPress: o,
    focusProps: d,
    ..._
  } = e, T = u.useCallback(e => {
    !e.repeat && ((e.charCode === r.KeyboardKeys.SPACE || e.charCode === r.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, a.transitionTo)(n), null == I || I()), null == o || o(e))
  }, [n, o, I]), E = u.useCallback(e => {
    !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, a.transitionTo)(n), null == I || I())
  }, [n, I]), f = (0, l.jsx)("a", {
    ref: t,
    href: n,
    onClick: E,
    onKeyPress: T,
    ..._,
    children: i
  });
  return (0, l.jsx)(s.FocusRing, {
    ...d,
    children: f
  })
})