t.d(n, {
  Z: function() {
return c;
  }
});
var i = t(735250);
t(470079);
var l = t(120356),
  r = t.n(l),
  s = t(481060),
  o = t(766168);

function c(e) {
  let {
loading: n,
children: t
  } = e;
  return (0, i.jsxs)('div', {
className: o.container,
children: [
  n ? (0, i.jsx)('div', {
    className: o.spinnerContainer,
    children: (0, i.jsx)(s.Spinner, {
      className: o.spinner,
      type: s.Spinner.Type.SPINNING_CIRCLE
    })
  }) : null,
  (0, i.jsx)('div', {
    className: r()({
      [o.loading]: n
    }),
    children: t
  })
]
  });
}