n.d(t, {
  H: function() {
return d;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(481060),
  o = n(572004),
  c = n(689938),
  u = n(942955);

function d(e) {
  let {
chunks: t,
className: n,
onCopy: r,
...d
  } = e, h = l.useMemo(() => null == t ? void 0 : t.join(' '), [t]), [p, _] = l.useState(!1), f = l.useCallback(() => {
_(!0), (0, o.JG)(h), null == r || r();
  }, [
r,
h
  ]), m = p ? s.CircleCheckIcon : s.CopyIcon;
  return (0, i.jsx)(s.Clickable, {
className: a()(u.container, n),
onClick: f,
children: (0, i.jsx)(s.Tooltip, {
  text: p ? c.Z.Messages.COPIED : c.Z.Messages.COPY,
  children: e => (0, i.jsx)(m, {
    ...d,
    ...e,
    size: 'xxs',
    color: p ? s.tokens.colors.TEXT_POSITIVE : s.tokens.colors.INTERACTIVE_NORMAL
  })
})
  });
}