"use strict";
n(47120);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(143927),
  o = n(28546),
  c = n(401227),
  d = n(957825),
  u = n(838329);
t.Z = l.memo(l.forwardRef(function(e, t) {
  let {
    disabled: n,
    type: a,
    className: h,
    onClick: m
  } = e, [g, x] = (0, o.Iu)(e => [e.activeView, e.activeViewType], r.Z), _ = l.useCallback(() => {
    (0, o.j9)(a), null == m || m()
  }, [a, m]);
  return n ? null : (0, s.jsx)("div", {
    className: i()(d.CT, u.buttonContainer),
    ref: t,
    children: (0, s.jsx)(c.Z, {
      className: i()(u.emojiButton, h),
      onClick: _,
      active: (g === d.X1.GIF || g === d.X1.EMOJI || g === d.X1.STICKER) && x === a,
      tabIndex: 0,
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: -4,
          right: -4
        }
      }
    })
  })
}))