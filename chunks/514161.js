t.d(a, {
  Ux: function() {
return o;
  },
  pT: function() {
return l;
  },
  yC: function() {
return c;
  }
});
var n = t(735250);
t(470079);
var r = t(481060),
  s = t(191364);

function o(e) {
  let {
text: a,
children: t
  } = e;
  return (0, n.jsxs)('div', {
className: s.valueProp,
children: [
  (0, n.jsx)('div', {
    className: s.valuePropIconContainer,
    children: t
  }),
  (0, n.jsx)(r.Text, {
    variant: 'text-sm/medium',
    children: a
  })
]
  });
}

function l(e) {
  let {
title: a,
bulletPoints: t,
icon: o
  } = e;
  return (0, n.jsxs)('div', {
className: s.bulletedValueProp,
children: [
  (0, n.jsx)('div', {
    className: s.valuePropIconContainer,
    children: o
  }),
  (0, n.jsxs)('div', {
    className: s.bulletPointsContainer,
    children: [
      (0, n.jsx)(r.Text, {
        variant: 'text-md/bold',
        color: 'header-primary',
        children: a
      }),
      (0, n.jsx)('div', {
        className: s.bulletPoints,
        children: t.map(e => (0, n.jsxs)('div', {
          className: s.bulletPoint,
          children: [
            (0, n.jsx)(r.Text, {
              variant: 'text-sm/medium',
              color: 'header-secondary',
              children: '\u2022'
            }),
            (0, n.jsx)(r.Text, {
              variant: 'text-sm/medium',
              color: 'header-secondary',
              className: s.bulletPointText,
              children: e
            })
          ]
        }, e))
      })
    ]
  })
]
  });
}

function c(e) {
  let {
children: a
  } = e;
  return (0, n.jsx)('div', {
className: s.valuePropContainer,
children: a
  });
}