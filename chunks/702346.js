var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(481060),
  l = n(318713),
  o = n(104642);

function c(e) {
  let {
icon: t,
iconNode: n,
timestamp: s,
className: r,
children: c,
contentClassName: u,
iconClassName: d,
iconContainerClassName: _,
compact: E = !1
  } = e;
  return (0, i.jsxs)('div', {
className: a()(r, {
  [o.container]: !0,
  [o.compact]: E,
  [o.cozy]: !E
}),
children: [
  null != n && (0, i.jsx)('div', {
    className: a()(o.iconContainer, _),
    children: n
  }),
  null != t && (0, i.jsx)('div', {
    className: o.iconContainer,
    children: (0, i.jsx)('div', {
      'data-accessibility': 'desaturate',
      className: a()(o.icon, o.iconSize, d),
      style: {
        backgroundImage: 'url(\''.concat(t, '\')')
      }
    })
  }),
  (0, i.jsxs)('div', {
    className: a()(u, o.content),
    children: [
      c,
      null != s && (0, i.jsx)(l.Z, {
        timestamp: s
      })
    ]
  })
]
  });
}
c.Action = e => {
  let {
onClick: t,
children: n
  } = e;
  return (0, i.jsxs)('span', {
className: o.action,
children: [
  '\u2014',
  (0, i.jsx)(r.Anchor, {
    onClick: t,
    className: o.actionAnchor,
    children: n
  })
]
  });
}, t.Z = c;