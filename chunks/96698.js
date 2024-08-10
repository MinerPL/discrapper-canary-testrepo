l.d(n, {
  Z: function() {
return d;
  }
});
var s = l(735250);
l(470079);
var a = l(120356),
  t = l.n(a),
  i = l(481060),
  r = l(112831),
  o = l(365322);

function d(e) {
  let {
steps: n,
stepIndex: l,
onClick: a
  } = e;
  return (0, s.jsx)('div', {
className: o.container,
children: n.map((e, n) => {
  let d = l === n;
  return (0, s.jsxs)(i.Clickable, {
    onClick: () => a(n),
    className: o.stepContainer,
    children: [
      (0, s.jsx)('div', {
        className: t()(o.progressBar, {
          [o.selectedProgressBar]: d
        })
      }),
      (0, s.jsx)(r.Z, {
        color: d ? r.Z.Colors.BRAND : r.Z.Colors.MUTED,
        size: r.Z.Sizes.SIZE_12,
        children: e
      })
    ]
  }, e);
})
  });
}