n.d(t, {
  O: function() {
return d;
  },
  h: function() {
return c;
  }
}), n(47120);
var i = n(470079),
  a = n(338545),
  s = n(442837),
  r = n(393238),
  l = n(607070),
  o = n(87894);

function c(e) {
  let t = i.useRef(null),
[n, a] = i.useState('lg'),
[s, l] = i.useState(void 0);
  return (0, r.P)(t, e => {
let {
  width: t,
  scrollHeight: n
} = e;
return (l(n), null == t || t > o.j2) ? a('lg') : t > o.Z0 ? a('sm') : a('xs');
  }, null != e ? e : []), {
containerRef: t,
size: n,
height: s
  };
}

function d(e) {
  let {
initiallyExpanded: t
  } = e, [n, r] = i.useState(t), [o, c] = i.useState(!1), d = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), u = i.useCallback(() => {
r(e => !e), c(!0);
  }, []), {
expansionSpring: _
  } = (0, a.useSpring)({
expansionSpring: n ? 1 : 0,
config: {
  tension: 450,
  friction: 45
},
immediate: d,
onRest: () => c(!1)
  });
  return {
expansionSpring: _,
isAnimating: o,
isExpanded: n,
toggleExpanded: u
  };
}