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
  fill: 'string' == typeof c ? c : c.css,
  fillRule: 'evenodd',
  d: 'M12 22a9 9 0 0 0 7.03-14.62l.68-.67a1 1 0 0 0-1.42-1.42l-.67.68A8.96 8.96 0 0 0 13 4.05V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h2v1.05c-1.74.2-3.32.88-4.62 1.92l-.67-.68a1 1 0 0 0-1.42 1.42l.68.67A9 9 0 0 0 12 22Zm3.7-11.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3Z',
  clipRule: 'evenodd',
  className: d
})
  });
};