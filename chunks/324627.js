n.d(t, {
  P: function() {
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
secondaryColor: c = 'transparent',
secondaryColorClass: d = '',
color: _ = i.Z.colors.INTERACTIVE_NORMAL,
colorClass: E = '',
...f
  } = e, h = (0, s.m)(o), p = null !== (t = null == h ? void 0 : h.width) && void 0 !== t ? t : l, m = null !== (n = null == h ? void 0 : h.height) && void 0 !== n ? n : u;
  return (0, r.jsxs)('svg', {
...(0, a.Z)(f),
xmlns: 'http://www.w3.org/2000/svg',
width: p,
height: m,
fill: 'none',
viewBox: '0 0 24 24',
children: [
  (0, r.jsx)('circle', {
    cx: '12',
    cy: '12',
    r: '10',
    fill: 'string' == typeof c ? c : c.css,
    className: d
  }),
  (0, r.jsx)('path', {
    fill: 'string' == typeof _ ? _ : _.css,
    fillRule: 'evenodd',
    d: 'M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm1.44-15.94L13.06 14a1.06 1.06 0 0 1-2.12 0l-.38-6.94a1 1 0 0 1 1-1.06h.88a1 1 0 0 1 1 1.06Zm-.19 10.69a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z',
    clipRule: 'evenodd',
    className: E
  })
]
  });
};