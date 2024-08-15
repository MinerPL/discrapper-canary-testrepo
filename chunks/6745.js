n.d(t, {
  D: function() {
return c;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(507274),
  l = n(838331),
  u = n(563972);

function c(e) {
  let {
children: t,
placeholder: n,
value: a,
onChange: c,
onClose: d,
showScrollbar: _,
className: E,
multiSelect: f,
...h
  } = e, p = i.useCallback(e => {
c(e), !f && (null == d || d());
  }, [
c,
d,
f
  ]);
  return (0, r.jsx)(o.V, {
className: s()(u.container, E, {
  [u.scroller]: _
}),
children: (0, r.jsx)(l.hQ, {
  ...h,
  showScrollbar: _,
  value: a,
  multiSelect: f,
  onChange: p,
  placeholder: n,
  children: t,
  listClassName: u.list
})
  });
}