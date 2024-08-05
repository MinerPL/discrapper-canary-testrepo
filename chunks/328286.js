n.d(t, {
  w: function() {
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
  d: 'M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z',
  className: d
})
  });
};