n.d(t, {
  f: function() {
return c;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(410030),
  u = n(906044);

function c(e) {
  let {
src: t,
size: n,
constrain: a = 'height',
className: c,
alt: d = 'icon',
fallbackSrc: _
  } = e, E = (0, l.ZP)(), f = ''.concat(n, 'px'), [h, p] = i.useState(!1), [m, I] = i.useState(!1), T = null == _ || m;
  if (null == t || h && T)
return (0, r.jsx)(o.UnknownGameIcon, {
  size: 'custom',
  width: '100%',
  height: '100%',
  color: 'dark' === E ? 'white' : 'black',
  style: {
    maxWidth: f
  },
  className: s()(u.contentImage, c)
});
  let g = 'height' === a ? {
maxWidth: f,
height: f
  } : {
maxWidth: f,
minHeight: f
  };
  return (0, r.jsx)('img', {
style: g,
className: s()(u.contentImage, c),
src: h && null != _ ? _ : t,
alt: d,
onError: e => h ? I(!0) : p(!0)
  });
}