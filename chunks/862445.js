n.d(t, {
  A: function() {
return o;
  }
});
var r = n(735250);
n(470079);
var i = n(692547),
  a = n(331595),
  s = n(267843);
let o = e => {
  var t, n;
  let {
size: o = 'md',
width: l,
height: u,
color: c = i.Z.colors.INTERACTIVE_NORMAL,
colorClass: d = '',
..._
  } = e, E = (0, s.m)(o), f = null !== (t = null == E ? void 0 : E.width) && void 0 !== t ? t : l, h = null !== (n = null == E ? void 0 : E.height) && void 0 !== n ? n : u;
  return (0, r.jsx)('svg', {
...(0, a.Z)(_),
xmlns: 'http://www.w3.org/2000/svg',
width: f,
height: h,
fill: 'none',
viewBox: '0 0 24 24',
children: (0, r.jsx)('path', {
  d: 'M19 16a3 3 0 1 0 1.98 5.25 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h1.24A3 3 0 0 0 19 16ZM1.23 21.13a1 1 0 0 1 0-1.41l7.48-7.48c.2-.2.5-.2.7 0l2.13 2.12c.2.2.2.52 0 .71l-7.48 7.48a1 1 0 0 1-1.41 0l-1.42-1.42ZM23.12 11.84a.24.24 0 0 1-.23.17c-.43.02-.87.13-1.24.31a.59.59 0 0 1-.44.04 7 7 0 0 0-6.8 1.35.53.53 0 0 1-.71-.01L7.76 7.76a2 2 0 0 1 0-2.83l3.53-3.54a2 2 0 0 1 2.83 0l2.72 2.72.66-.66a1 1 0 0 1 1.41 0l1.41 1.42a1 1 0 0 1 0 1.41l-.65.66 2.94 2.94a2 2 0 0 1 .5 1.96Z',
  fill: 'string' == typeof c ? c : c.css,
  className: d
})
  });
};