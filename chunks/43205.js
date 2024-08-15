n.d(t, {
  f: function() {
return d;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(410030),
  u = n(689938),
  c = n(487596);

function d(e) {
  let {
src: t,
size: n,
constrain: a = 'height',
className: d,
alt: _,
fallbackSrc: E,
showTooltip: f = !1
  } = e, h = (0, l.ZP)(), p = ''.concat(n, 'px'), [m, I] = i.useState(!1), [T, g] = i.useState(!1), S = null == E || T;
  if (null == t || m && S)
return (0, r.jsx)(o.UnknownGameIcon, {
  size: 'custom',
  width: '100%',
  height: '100%',
  color: 'dark' === h ? 'white' : 'black',
  style: {
    maxWidth: p
  },
  className: s()(c.contentImage, d)
});
  let A = 'height' === a ? {
maxWidth: p,
height: p
  } : {
maxWidth: p,
minHeight: p
  };
  return (0, r.jsx)(o.Tooltip, {
'aria-label': _,
text: _,
shouldShow: f,
children: e => (0, r.jsx)('img', {
  ...e,
  style: A,
  className: s()(c.contentImage, d),
  src: m && null != E ? E : t,
  alt: null != _ ? _ : u.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
  onError: e => m ? g(!0) : I(!0)
})
  }, 'voice-preview');
}