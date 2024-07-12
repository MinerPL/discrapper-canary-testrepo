n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(143927),
  l = n(28546),
  u = n(401227),
  c = n(957825),
  d = n(497471);
t.Z = i.memo(i.forwardRef(function(e, t) {
  let {
disabled: n,
type: a
  } = e, [_, E, f] = (0, l.Iu)(e => [
e.activeView,
e.activeViewType,
e.pickerId
  ], s.Z), h = i.useCallback(() => {
(0, l.RO)(c.X1.EMOJI, a);
  }, [a]);
  return n ? null : (0, r.jsx)('div', {
className: o()(c.CT, d.buttonContainer),
ref: t,
children: (0, r.jsx)(u.Z, {
  className: d.emojiButton,
  onClick: h,
  active: _ === c.X1.EMOJI && E === a,
  'aria-controls': f,
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
  });
}));