var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(338545),
  i = n(481060),
  c = n(569379),
  d = n(642145),
  u = n(689938),
  p = n(448288);
t.Z = o.forwardRef((e, t) => {
  let {
quest: n,
percentComplete: o,
size: r = 42,
strokeWidth: m = 3,
glowBlur: x = 0.4,
showProgressText: g = !1,
children: f
  } = e, C = (0, c.EK)(n, o > 0), _ = r / 2, E = r / 2 - m / 2, h = 2 * Math.PI * E, S = h - o * h, T = {
strokeDasharray: ''.concat(h, ' ').concat(h),
strokeDashoffset: S
  }, N = {
strokeDasharray: ''.concat(h, ' ').concat(h),
strokeDashoffset: -o * h
  }, v = {
boxShadow: '0 0 30px 0px '.concat(C.glow)
  }, {
progressTextAnimation: j
  } = (0, i.useSpring)({
progressTextAnimation: g && 1 !== o ? 1 : 0,
config: d.Y
  }), A = Math.floor(100 * o);
  return (0, s.jsxs)('div', {
className: p.outer,
ref: t,
children: [
  (0, s.jsxs)('div', {
    className: p.inner,
    style: v,
    children: [
      f,
      (0, s.jsxs)(l.animated.div, {
        style: {
          opacity: j
        },
        className: a()(p.coverContent, p.progressTextWrapper),
        children: [
          (0, s.jsx)('div', {
            className: a()(p.coverContent, p.progressTextOverlay)
          }),
          (0, s.jsx)(i.Text, {
            variant: 'text-lg/medium',
            color: 'text-primary',
            className: p.progressText,
            children: u.Z.Messages.QUESTS_PROGRESS.format({
              percent: A.toString()
            })
          })
        ]
      })
    ]
  }),
  (0, s.jsxs)('svg', {
    className: p.progressBar,
    height: r,
    width: r,
    children: [
      (0, s.jsxs)('defs', {
        children: [
          (0, s.jsxs)('filter', {
            id: 'glow',
            children: [
              (0, s.jsx)('feGaussianBlur', {
                result: 'coloredBlur',
                stdDeviation: x
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
                stopColor: C.backgroundTop
              }),
              (0, s.jsx)('stop', {
                offset: '100%',
                stopColor: C.backgroundBottom
              })
            ]
          })
        ]
      }),
      (0, s.jsx)('circle', {
        className: p.progress,
        strokeWidth: m,
        fill: 'transparent',
        r: E,
        cx: _,
        cy: _,
        stroke: 'url(#linear)',
        style: N
      }),
      (0, s.jsx)('circle', {
        className: p.progress,
        strokeWidth: m,
        fill: 'transparent',
        r: E,
        cx: _,
        cy: _,
        stroke: C.foreground,
        style: T
      })
    ]
  })
]
  });
});