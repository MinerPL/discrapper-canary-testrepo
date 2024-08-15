n.d(t, {
  H: function() {
return l;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  E = n(572004),
  u = n(689938),
  c = n(205962);

function l(e) {
  let {
chunks: t,
className: n,
onCopy: a,
...l
  } = e, d = i.useMemo(() => null == t ? void 0 : t.join(' '), [t]), [_, f] = i.useState(!1), I = i.useCallback(() => {
f(!0), (0, E.JG)(d), null == a || a();
  }, [
a,
d
  ]), S = _ ? o.CircleCheckIcon : o.CopyIcon;
  return (0, r.jsx)(o.Clickable, {
className: s()(c.container, n),
onClick: I,
children: (0, r.jsx)(o.Tooltip, {
  text: _ ? u.Z.Messages.COPIED : u.Z.Messages.COPY,
  children: e => (0, r.jsx)(S, {
    ...l,
    ...e,
    size: 'xxs',
    color: _ ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.INTERACTIVE_NORMAL
  })
})
  });
}