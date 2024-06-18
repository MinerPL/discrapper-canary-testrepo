"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(143927),
  l = n(28546),
  u = n(401227),
  _ = n(957825),
  d = n(838329);
t.Z = r.memo(r.forwardRef(function(e, t) {
  let {
    disabled: n,
    type: s
  } = e, [c, E, I] = (0, l.Iu)(e => [e.activeView, e.activeViewType, e.pickerId], a.Z), T = r.useCallback(() => {
    (0, l.RO)(_.X1.EMOJI, s)
  }, [s]);
  return n ? null : (0, i.jsx)("div", {
    className: o()(_.CT, d.buttonContainer),
    ref: t,
    children: (0, i.jsx)(u.Z, {
      className: d.emojiButton,
      onClick: T,
      active: c === _.X1.EMOJI && E === s,
      "aria-controls": I,
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