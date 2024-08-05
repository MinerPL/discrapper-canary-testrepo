var s = n(735250),
  o = n(470079),
  r = n(569379),
  a = n(448288);
t.Z = o.forwardRef((e, t) => {
  let {
quest: n,
percentComplete: o,
size: l = 42,
strokeWidth: i = 3,
glowBlur: c = 0.4,
children: d
  } = e, u = (0, r.EK)(n, o > 0), p = l / 2, m = l / 2 - i / 2, x = 2 * Math.PI * m, g = x - o * x, f = {
strokeDasharray: ''.concat(x, ' ').concat(x),
strokeDashoffset: g
  }, C = {
strokeDasharray: ''.concat(x, ' ').concat(x),
strokeDashoffset: -o * x
  }, _ = {
boxShadow: '0 0 30px 0px '.concat(u.glow)
  };
  return (0, s.jsxs)('div', {
className: a.outer,
ref: t,
children: [
  (0, s.jsx)('div', {
    className: a.inner,
    style: _,
    children: d
  }),
  (0, s.jsxs)('svg', {
    className: a.progressBar,
    height: l,
    width: l,
    children: [
      (0, s.jsxs)('defs', {
        children: [
          (0, s.jsxs)('filter', {
            id: 'glow',
            children: [
              (0, s.jsx)('feGaussianBlur', {
                result: 'coloredBlur',
                stdDeviation: c
              }),
              (0, s.jsxs)('feMerge', {
                children: [
                  (0, s.jsx)('feMergeNode', {
                    in: 'coloredBlur'
                  }),
                  (0, s.jsx)('feMergeNode', {
                    in: 'coloredBlur'
                  }),
                  (0, s.jsx)('feMergeNode', {
                    in: 'coloredBlur'
                  }),
                  (0, s.jsx)('feMergeNode', {
                    in: 'SourceGraphic'
                  })
                ]
              })
            ]
          }),
          (0, s.jsxs)('linearGradient', {
            id: 'linear',
            x1: '100%',
            y1: '0%',
            x2: '0%',
            y2: '0%',
            children: [
              (0, s.jsx)('stop', {
                offset: '0%',
                stopColor: u.backgroundTop
              }),
              (0, s.jsx)('stop', {
                offset: '100%',
                stopColor: u.backgroundBottom
              })
            ]
          })
        ]
      }),
      (0, s.jsx)('circle', {
        className: a.progress,
        strokeWidth: i,
        fill: 'transparent',
        r: m,
        cx: p,
        cy: p,
        stroke: 'url(#linear)',
        style: C
      }),
      (0, s.jsx)('circle', {
        className: a.progress,
        strokeWidth: i,
        fill: 'transparent',
        r: m,
        cx: p,
        cy: p,
        stroke: u.foreground,
        style: f
      })
    ]
  })
]
  });
});