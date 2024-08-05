n.d(t, {
  Z: function() {
return c;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(404975),
  u = n(576379);

function c(e) {
  let {
onClick: t,
children: n,
tooltip: a,
dangerous: c = !1,
className: d,
'aria-label': _
  } = e;
  return (0, r.jsx)(o.Tooltip, {
text: a,
hideOnClick: !0,
children: e => {
  let {
    onMouseEnter: o,
    onMouseLeave: E,
    onClick: f
  } = e;
  return (0, r.jsx)(l.zx, {
    onMouseEnter: o,
    onMouseLeave: E,
    onClick: e => {
      e.stopPropagation(), null == f || f(), t(e);
    },
    dangerous: c,
    'aria-label': null != _ ? _ : a,
    className: d,
    children: i.Children.map(n, e => i.isValidElement(e) ? i.cloneElement(e, {
      className: s()(e.props.className, u.actionBarIcon)
    }) : e)
  });
}
  });
}