n.d(t, {
  O: function() {
return o;
  },
  h: function() {
return l;
  }
}), n(47120);
var i = n(470079),
  s = n(481060),
  a = n(393238),
  r = n(87894);

function l() {
  let e = i.useRef(null),
[t, n] = i.useState('lg'),
[s, l] = i.useState(void 0);
  return (0, a.P)(e, e => {
let {
  width: t,
  scrollHeight: i
} = e;
return (l(i), null == t || t > r.j2) ? n('lg') : t > r.Z0 ? n('sm') : n('xs');
  }), {
containerRef: e,
size: t,
height: s
  };
}

function o(e) {
  let {
initiallyExpanded: t
  } = e, [n, a] = i.useState(t), [r, l] = i.useState(!1), o = i.useCallback(() => {
a(e => !e), l(!0);
  }, []), {
expansionSpring: c
  } = (0, s.useSpring)({
expansionSpring: n ? 1 : 0,
config: {
  tension: 450,
  friction: 45
},
onRest: () => l(!1)
  });
  return {
expansionSpring: c,
isAnimating: r,
isExpanded: n,
toggleExpanded: o
  };
}