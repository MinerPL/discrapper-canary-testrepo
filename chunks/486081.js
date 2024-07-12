n.d(t, {
  m: function() {
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
color: c = i.Z.colors.STATUS_DANGER,
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
  d: 'M2 13a1 1 0 0 1 1-1 9 9 0 0 1 9 9 1 1 0 1 1-2 0 7 7 0 0 0-7-7 1 1 0 0 1-1-1ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z',
  className: d
})
  });
};