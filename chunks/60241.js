n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(43205),
  l = n(689938),
  u = n(692184);
let c = {
  small: 24,
  large: 60
};

function d(e) {
  let {
src: t,
size: n,
alt: i,
tooltipText: d,
onClick: _
  } = e, E = c[null != n ? n : 'large'], f = 'function' == typeof t ? t(E) : t, h = 'small' === n ? u.smallImage : void 0;
  return null == _ ? (0, r.jsx)(s.Tooltip, {
text: d,
children: e => (0, r.jsx)(o.f, {
  ...e,
  src: f,
  alt: null != i ? i : l.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
  size: E,
  className: a()(h, u.imagePosition),
  constrain: 'width'
})
  }) : (0, r.jsx)(s.Tooltip, {
text: d,
children: e => (0, r.jsx)(s.Clickable, {
  ...e,
  className: a()(u.clickable, u.imagePosition),
  onClick: _,
  children: (0, r.jsx)(o.f, {
    src: f,
    alt: null != i ? i : l.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
    size: E,
    className: h,
    constrain: 'width'
  })
})
  });
}