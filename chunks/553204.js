n.d(t, {
  Z: function() {
return m;
  }
});
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(477690),
  o = n(481060),
  c = n(91218),
  d = n(518738),
  u = n(208567),
  _ = n(624138),
  I = n(689938),
  E = n(455658);
let T = (0, _.Mg)(l.Z.ROLE_ICON_UPLOADER_ICON_SIZE);

function m(e) {
  let {
role: t,
'aria-label': n = I.Z.Messages.UPLOAD_IMAGE,
className: i,
onClick: l,
disabled: _ = !1
  } = e, m = a.useRef(null), N = a.useMemo(() => null != t ? (0, d.Kz)(t, T) : null, [t]), S = null != N ? (0, s.jsx)(c.Z, {
enableTooltip: !1,
className: E.icon,
...N
  }) : (0, s.jsx)(o.ImagePlusIcon, {
size: 'md',
color: 'currentColor',
className: E.icon
  });
  return (0, s.jsx)(o.FocusRing, {
ringTarget: m,
children: (0, s.jsxs)(o.Clickable, {
  'aria-label': n,
  className: r()(E.container, i, {
    [E.disabled]: _
  }),
  onClick: _ ? void 0 : l,
  'aria-disabled': _,
  children: [
    (0, s.jsx)('div', {
      ref: m,
      className: E.preview,
      children: S
    }),
    null != N ? (0, s.jsx)(u.S, {
      className: E.uploaderIcon
    }) : null
  ]
})
  });
}