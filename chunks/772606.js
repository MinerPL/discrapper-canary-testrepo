t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(120356),
  o = t.n(l),
  r = t(481060),
  s = t(695676),
  c = t(689938),
  u = t(581565);

function d(e) {
  let {
className: n
  } = e, {
goBack: t
  } = (0, s.hH)(), l = a.useCallback(() => {
t();
  }, [t]);
  return (0, i.jsx)(r.Clickable, {
onClick: l,
className: o()(u.clickable, n),
'aria-label': c.Z.Messages.BACK_ACCESSIBILITY_HINT,
children: (0, i.jsx)(r.ArrowLargeLeftIcon, {
  size: 'sm',
  color: r.tokens.colors.INTERACTIVE_ACTIVE
})
  });
}