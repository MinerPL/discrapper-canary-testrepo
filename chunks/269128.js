var r = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  l = n(772848),
  s = n(235532);
let o = (0, l.Z)();
t.Z = e => {
  let {
open: t,
className: n,
withHighlight: a = !1
  } = e;
  return (0, r.jsxs)('svg', {
width: '18',
height: '18',
className: i()(s.button, n, {
  [s.open]: t,
  [s.withHighlight]: a
}),
children: [
  a && (0, r.jsx)('defs', {
    children: (0, r.jsxs)('linearGradient', {
      id: o,
      x1: '0',
      y1: '0',
      x2: '0',
      y2: '18',
      gradientUnits: 'userSpaceOnUse',
      children: [
        (0, r.jsx)('stop', {
          offset: '0',
          stopColor: '#B473F5'
        }),
        (0, r.jsx)('stop', {
          offset: '1',
          stopColor: '#E292AA'
        })
      ]
    })
  }),
  (0, r.jsxs)('g', {
    fill: 'none',
    fillRule: 'evenodd',
    children: [
      (0, r.jsx)('path', {
        d: 'M0 0h18v18H0'
      }),
      (0, r.jsx)('path', {
        stroke: a ? 'url(#'.concat(o, ')') : 'currentColor',
        d: 'M4.5 4.5l9 9',
        strokeLinecap: 'round'
      }),
      (0, r.jsx)('path', {
        stroke: a ? 'url(#'.concat(o, ')') : 'currentColor',
        d: 'M13.5 4.5l-9 9',
        strokeLinecap: 'round'
      })
    ]
  })
]
  });
};