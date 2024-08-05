n.d(t, {
  Mn: function() {
return o;
  },
  WM: function() {
return u;
  },
  _2: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(481060),
  r = n(347099);
let o = 16;

function c(e) {
  let {
description: t,
name: n,
icon: a,
onNavigate: c,
className: u,
missingNavIcon: d
  } = e;
  return (0, i.jsxs)(l.Clickable, {
onClick: c,
className: s()(r.modInfoItem, null != c && r.modInfoAction, u),
children: [
  null != a && (0, i.jsx)('div', {
    className: r.modInfoItemIcon,
    children: a
  }),
  null != n && (0, i.jsx)('div', {
    className: r.modInfoItemName,
    children: n
  }),
  (0, i.jsx)('div', {
    className: r.modInfoItemDescription,
    children: t
  }),
  null != c && (0, i.jsx)('div', {
    className: r.modInfoItemActionIcon,
    children: (0, i.jsx)(l.ChevronLargeRightIcon, {
      size: 'custom',
      width: o,
      height: o
    })
  }),
  null == c && null != d && (0, i.jsx)('div', {
    className: r.modInfoItemActionIcon,
    children: d
  })
]
  });
}

function u(e) {
  let {
children: t
  } = e;
  return (0, i.jsx)('div', {
className: r.modInfoItemContainer,
children: t
  });
}