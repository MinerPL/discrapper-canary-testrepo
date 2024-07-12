n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var s = n(886364),
  a = n(325767);

function r(e) {
  return 'CloudDone-'.concat(e);
}

function l(e) {
  let {
width: t = 24,
height: n = 24,
color: l = 'currentColor',
foreground: o,
gradientConfig: c,
...d
  } = e, u = null;
  return null != c && (u = (0, i.jsx)(s.Z, {
...c,
color: l,
id: r(c.id)
  })), (0, i.jsxs)('svg', {
...(0, a.Z)(d),
width: t,
height: n,
viewBox: '0 0 24 24',
children: [
  (0, i.jsx)('defs', {
    children: u
  }),
  (0, i.jsx)('path', {
    d: 'M0 0h24v24H0z',
    fill: 'none'
  }),
  (0, i.jsx)('path', {
    fill: null != c ? 'url(#'.concat(r(c.id), ')') : l,
    className: o,
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z'
  })
]
  });
}