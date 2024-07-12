n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(481060),
  s = n(607070),
  l = n(887699);

function u(e) {
  let {
title: t,
children: n,
scrollIntoView: u = !1,
headingColor: c = 'header-secondary'
  } = e, d = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), _ = i.useRef(null);
  return i.useEffect(() => {
let e = _.current;
if (null == e)
  return;
let t = requestAnimationFrame(() => {
  e.scrollIntoView({
    behavior: d ? 'auto' : 'smooth'
  });
});
return () => cancelAnimationFrame(t);
  }, [d]), (0, r.jsxs)('section', {
ref: u ? _ : void 0,
className: l.section,
children: [
  (0, r.jsx)(o.Heading, {
    variant: 'text-xs/semibold',
    color: c,
    className: l.heading,
    children: t
  }),
  n
]
  });
}