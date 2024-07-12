var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(338545),
  l = n(759853),
  c = n(95985),
  d = n(743294),
  u = n(985444);
let p = o.forwardRef(function(e, t) {
  var n;
  let {
className: r,
expansionSpring: p,
isExpanded: x,
isExpansionAnimationComplete: m,
quest: g,
taskDetails: C
  } = e, f = o.useRef(null), _ = (null === (n = g.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null;
  return (0, s.jsxs)(i.animated.div, {
ref: t,
'aria-hidden': x && m,
className: a()(r, u.contentCollapsed, {
  [u.contentCollapsedExpanded]: x,
  [u.contentCollapsedAccepted]: _
}),
style: {
  opacity: p.to({
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
children: [
  _ ? (0, s.jsx)('div', {
    className: u.postEnrollmentBackground,
    style: {
      backgroundImage: 'linear-gradient(90deg, '.concat(d.aY, ', ').concat(d.v6, ')')
    }
  }) : null,
  (0, s.jsx)(l.Z, {
    progressBarRef: f,
    quest: g,
    isExpanded: x
  }),
  (0, s.jsx)('div', {
    className: u.contentCollapsedWrapper,
    children: _ ? (0, s.jsx)(c.Z, {
      quest: g,
      progressBarRef: f,
      isExpanded: !1,
      taskDetails: C
    }) : null
  })
]
  });
});
t.Z = p;