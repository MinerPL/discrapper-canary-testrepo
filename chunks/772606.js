t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250),
  l = t(470079),
  a = t(120356),
  r = t.n(a),
  s = t(481060),
  o = t(695676),
  c = t(689938),
  u = t(581565);

function d(e) {
  let {
className: n
  } = e, {
goBack: t
  } = (0, o.hH)(), a = l.useCallback(() => {
t();
  }, [t]);
  return (0, i.jsx)(s.Clickable, {
onClick: a,
className: r()(u.clickable, n),
'aria-label': c.Z.Messages.BACK_ACCESSIBILITY_HINT,
children: (0, i.jsx)(s.ArrowLargeLeftIcon, {
  size: 'sm',
  color: s.tokens.colors.INTERACTIVE_ACTIVE
})
  });
}