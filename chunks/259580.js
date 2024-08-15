var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(325767),
  l = n(543175);
let u = {
UP: l.directionUp,
RIGHT: l.directionRight,
DOWN: l.directionDown,
LEFT: l.directionLeft
  },
  c = e => {
let {
  direction: t = u.DOWN,
  width: n = 24,
  height: i = 24,
  color: c = 'currentColor',
  transition: d = l.transition,
  className: _,
  foreground: E,
  expanded: f,
  ...h
} = e, {
  enabled: p
} = (0, s.useRedesignIconContext)(), m = t;
if (!0 === f ? m = u.DOWN : !1 === f && (m = u.RIGHT), p) {
  let e = {
    [u.UP]: s.ChevronSmallUpIcon,
    [u.DOWN]: s.ChevronSmallDownIcon,
    [u.LEFT]: s.ChevronSmallLeftIcon,
    [u.RIGHT]: s.ChevronSmallRightIcon
  } [m];
  return (0, r.jsx)(e, {
    ...h,
    className: _,
    size: 'custom',
    width: n,
    height: i,
    color: null != c ? c : 'currentColor',
    colorClass: E
  });
}
return (0, r.jsx)('svg', {
  className: a()(_, d, m),
  width: n,
  height: i,
  viewBox: '0 0 24 24',
  ...(0, o.Z)(h),
  children: (0, r.jsx)('path', {
    className: E,
    fill: 'none',
    stroke: c,
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M7 10L12 15 17 10',
    'aria-hidden': !0
  })
});
  };
c.Directions = u, t.Z = c;