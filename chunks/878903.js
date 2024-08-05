n.d(t, {
  V: function() {
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
  fill: 'string' == typeof c ? c : c.css,
  fillRule: 'evenodd',
  d: 'M19 16h-5a2 2 0 0 0-2 2v2c0 1.66-1.37 3.04-2.96 2.6A11 11 0 1 1 23 12c0 2.2-2 4-4 4ZM13.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17.25 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-3.75 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  clipRule: 'evenodd',
  className: d
})
  });
};