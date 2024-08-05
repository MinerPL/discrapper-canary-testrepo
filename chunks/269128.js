var c = o(735250);
o(470079);
var n = o(120356),
  a = o.n(n),
  t = o(772848),
  i = o(209956);
let d = (0, t.Z)();
r.Z = e => {
  let {
open: r,
className: o,
withHighlight: n = !1
  } = e;
  return (0, c.jsxs)('svg', {
width: '18',
height: '18',
className: a()(i.button, o, {
  [i.open]: r,
  [i.withHighlight]: n
}),
children: [
  n && (0, c.jsx)('defs', {
    children: (0, c.jsxs)('linearGradient', {
      id: d,
      x1: '0',
      y1: '0',
      x2: '0',
      y2: '18',
      gradientUnits: 'userSpaceOnUse',
      children: [
        (0, c.jsx)('stop', {
          offset: '0',
          stopColor: '#B473F5'
        }),
        (0, c.jsx)('stop', {
          offset: '1',
          stopColor: '#E292AA'
        })
      ]
    })
  }),
  (0, c.jsxs)('g', {
    fill: 'none',
    fillRule: 'evenodd',
    children: [
      (0, c.jsx)('path', {
        d: 'M0 0h18v18H0'
      }),
      (0, c.jsx)('path', {
        stroke: n ? 'url(#'.concat(d, ')') : 'currentColor',
        d: 'M4.5 4.5l9 9',
        strokeLinecap: 'round'
      }),
      (0, c.jsx)('path', {
        stroke: n ? 'url(#'.concat(d, ')') : 'currentColor',
        d: 'M13.5 4.5l-9 9',
        strokeLinecap: 'round'
      })
    ]
  })
]
  });
};