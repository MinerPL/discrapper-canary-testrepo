n.d(t, {
  O: function() {
return l;
  },
  W: function() {
return u;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(134432),
  s = n(413107),
  o = n(242493);

function l() {
  (0, a.po)(''.concat(o, '?query=true'));
}

function u(e) {
  let {
onPlayed: t,
played: n
  } = e, [a, l] = i.useState(n), u = i.useRef(0);
  if (i.useEffect(() => (clearTimeout(u.current), u.current = setTimeout(() => {
  t();
}, 3000), () => {
  clearTimeout(u.current), t();
}), [t]), i.useEffect(() => {
  l(e => !e);
}, [n]), n)
return null;
  let c = ''.concat(o, '?query=').concat(a);
  return (0, r.jsx)('div', {
className: s.demoEffectOverlay,
children: (0, r.jsx)('img', {
  alt: '',
  className: s.demoEffectImg,
  src: c
})
  });
}