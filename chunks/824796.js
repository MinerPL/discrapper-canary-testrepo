n.d(t, {
  u: function() {
return s;
  }
});
var r = n(735250);
n(470079);
var i = n(692547),
  a = n(331595),
  o = n(267843);
let s = e => {
  var t, n;
  let {
size: s = 'md',
width: l,
height: u,
color: c = i.Z.colors.INTERACTIVE_NORMAL,
colorClass: d = '',
..._
  } = e, E = (0, o.m)(s), f = null !== (t = null == E ? void 0 : E.width) && void 0 !== t ? t : l, h = null !== (n = null == E ? void 0 : E.height) && void 0 !== n ? n : u;
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
  d: 'M3 4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3Zm9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 7a1 1 0 0 1 1-1h1.25c.41 0 .75.34.75.75C6 7.99 5 9 3.75 9A.75.75 0 0 1 3 8.25V7Zm1 11a1 1 0 0 1-1-1v-1.25c0-.41.34-.75.75-.75C4.99 15 6 16 6 17.25c0 .41-.34.75-.75.75H4ZM21 7a1 1 0 0 0-1-1h-1.25a.75.75 0 0 0-.75.75C18 7.99 19 9 20.25 9c.41 0 .75-.34.75-.75V7Zm-1 11a1 1 0 0 0 1-1v-1.25a.75.75 0 0 0-.75-.75C19.01 15 18 16 18 17.25c0 .41.34.75.75.75H20Z',
  clipRule: 'evenodd',
  className: d
})
  });
};