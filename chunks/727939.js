n(47120);
var r = n(735250),
  i = n(470079),
  a = n(112724),
  s = n(241915),
  o = n(981631);
let l = 48,
  u = 32,
  c = 32,
  d = 32;
t.Z = (0, a.Z)(function(e) {
  let {
className: t,
defaultPosition: n = o.VD2.BOTTOM_RIGHT,
children: a,
width: _,
height: E
  } = e, [f, h] = i.useState(n);
  return (0, r.jsx)(s._, {
className: t,
position: f,
id: 0,
onMove: (e, t) => h(t),
maxX: _,
maxY: E,
edgeOffsetTop: l,
edgeOffsetBottom: u,
edgeOffsetLeft: c,
edgeOffsetRight: d,
children: a
  });
});