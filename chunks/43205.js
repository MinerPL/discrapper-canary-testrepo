t.d(n, {
  f: function() {
return c;
  }
}), t(47120);
var l = t(735250),
  r = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(481060),
  u = t(410030),
  s = t(906044);

function c(e) {
  let {
src: n,
size: t,
constrain: a = 'height',
className: c,
alt: d = 'icon',
fallbackSrc: E
  } = e, _ = (0, u.ZP)(), [f, T] = r.useState(!1), [v, m] = r.useState(!1), N = null == E || v;
  if (null == n || f && N)
return (0, l.jsx)(i.UnknownGameIcon, {
  size: 'custom',
  width: t,
  height: t,
  color: 'dark' === _ ? 'white' : 'black',
  className: o()(s.contentImage, c)
});
  let x = 'height' === a ? {
maxWidth: ''.concat(t, 'px'),
height: ''.concat(t, 'px')
  } : {
maxWidth: ''.concat(t, 'px'),
minHeight: ''.concat(t, 'px')
  };
  return (0, l.jsx)('img', {
style: x,
className: o()(s.contentImage, c),
src: f && null != E ? E : n,
alt: d,
onError: e => f ? m(!0) : T(!0)
  });
}