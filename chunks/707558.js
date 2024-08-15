t.d(s, {
  Z: function() {
return c;
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  r = t(600164),
  o = t(526097),
  l = t(224499);

function c(e) {
  let {
features: s
  } = e;
  return (0, n.jsx)(n.Fragment, {
children: s.map((e, s) => (0, n.jsxs)(r.Z, {
  align: r.Z.Align.CENTER,
  className: i()(l.marginTop20, o.feature, {
    [o.featureBorder]: 0 !== s
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
}, s))
  });
}