n.d(t, {
  Z: function() {
return s;
  }
});
var i = n(735250);
n(470079);
var l = n(120356),
  r = n.n(l),
  o = n(481060),
  a = n(766168);

function s(e) {
  let {
loading: t,
children: n
  } = e;
  return (0, i.jsxs)('div', {
className: a.container,
children: [
  t ? (0, i.jsx)('div', {
    className: a.spinnerContainer,
    children: (0, i.jsx)(o.Spinner, {
      className: a.spinner,
      type: o.Spinner.Type.SPINNING_CIRCLE
    })
  }) : null,
  (0, i.jsx)('div', {
    className: r()({
      [a.loading]: t
    }),
    children: n
  })
]
  });
}