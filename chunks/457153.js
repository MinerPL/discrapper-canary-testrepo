var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(338545),
  i = n(95985),
  c = n(985444);
let d = o.forwardRef(function(e, t) {
  var n;
  let {
className: r,
expansionSpring: d,
isExpanded: u,
isExpansionAnimationComplete: p,
quest: m,
taskDetails: x
  } = e, g = o.useRef(null), f = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null;
  return (0, s.jsx)(l.animated.div, {
ref: t,
'aria-hidden': u && p,
className: a()(r, c.contentCollapsed, {
  [c.contentCollapsedExpanded]: u,
  [c.contentCollapsedAccepted]: f
}),
style: {
  opacity: d.to({
    range: [
      0,
      1
    ],
    output: [
      1,
      0
    ]
  })
},
children: (0, s.jsx)('div', {
  className: c.contentCollapsedWrapper,
  children: f ? (0, s.jsx)(i.Z, {
    quest: m,
    progressBarRef: g,
    isExpanded: !1,
    taskDetails: x
  }) : null
})
  });
});
t.Z = d;