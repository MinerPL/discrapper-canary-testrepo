s.d(t, {
  Z: function() {
return c;
  }
});
var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(285952),
  o = s(607254),
  l = s(549856);

function c(e) {
  let {
features: t
  } = e;
  return (0, n.jsx)(n.Fragment, {
children: t.map((e, t) => (0, n.jsxs)(r.Z, {
  align: r.Z.Align.CENTER,
  className: i()(l.marginTop20, o.feature, {
    [o.featureBorder]: 0 !== t
  }),
  children: [
    null != e.icon ? (0, n.jsx)('div', {
      className: i()(o.icon, e.icon)
    }) : null,
    (0, n.jsxs)('div', {
      children: [
        null != e.title ? (0, n.jsx)('div', {
          className: i()(l.marginBottom8, o.title),
          children: e.title
        }) : null,
        (0, n.jsx)('div', {
          className: o.description,
          children: e.description
        })
      ]
    })
  ]
}, t))
  });
}