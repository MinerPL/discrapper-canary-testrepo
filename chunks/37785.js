"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var n = l("37983"),
  o = l("884691"),
  a = l("77078"),
  r = l("393414"),
  s = l("49111"),
  i = o.forwardRef(function(e, t) {
    let {
      href: l,
      children: i,
      onClick: u,
      onKeyPress: d,
      focusProps: c,
      ...p
    } = e, f = o.useCallback(e => {
      !e.repeat && ((e.charCode === s.KeyboardKeys.SPACE || e.charCode === s.KeyboardKeys.ENTER) && (e.preventDefault(), null != l && (0, r.transitionTo)(l), null == u || u()), null == d || d(e))
    }, [l, d, u]), h = o.useCallback(e => {
      !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != l && (0, r.transitionTo)(l), null == u || u())
    }, [l, u]), b = (0, n.jsx)("a", {
      ref: t,
      href: l,
      onClick: h,
      onKeyPress: f,
      ...p,
      children: i
    });
    return (0, n.jsx)(a.FocusRing, {
      ...c,
      children: b
    })
  })