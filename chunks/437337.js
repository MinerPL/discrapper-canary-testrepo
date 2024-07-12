n.d(t, {
  r: function() {
return h;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(338545),
  l = n(692547),
  u = n(186325),
  c = n(84735),
  d = n(180035),
  _ = n(43296);
let E = {
mass: 1,
tension: 250
  },
  f = {
X: {
  TOP: 'M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z',
  BOTTOM: 'M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z'
},
BAR: {
  TOP: 'M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z',
  BOTTOM: 'M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z'
},
CHECK: {
  TOP: 'M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z',
  BOTTOM: 'M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z'
}
  },
  h = function(e) {
let {
  id: t,
  onChange: n,
  checked: a,
  disabled: h,
  className: p,
  focusProps: m,
  innerRef: I
} = e, {
  reducedMotion: T
} = i.useContext(u.S), g = i.useRef(null), [S, A] = i.useState(!1), N = (0, d.d)(l.Z.unsafe_rawColors.PRIMARY_400).spring(), v = (0, d.d)(l.Z.unsafe_rawColors.GREEN_360).spring(), {
  state: O,
  opacity: R
} = (0, s.useSpring)({
  config: E,
  opacity: h ? 0.3 : 1,
  state: S ? a ? 0.7 : 0.3 : a ? 1 : 0
});
return (0, r.jsx)(c.t, {
  ...m,
  within: !0,
  offset: -2,
  children: (0, r.jsxs)(s.animated.div, {
    className: o()(_.container, p, {
      [_.checked]: a,
      [_.disabled]: h
    }),
    onMouseDown: () => !h && A(!0),
    onMouseUp: () => A(!1),
    onMouseLeave: () => A(!1),
    style: {
      opacity: R,
      backgroundColor: O.to({
        output: [
          N,
          v
        ]
      })
    },
    children: [
      (0, r.jsxs)(s.animated.svg, {
        className: _.slider,
        viewBox: '0 0 28 20',
        preserveAspectRatio: 'xMinYMid meet',
        style: {
          left: O.to({
            range: [
              0,
              0.3,
              0.7,
              1
            ],
            output: [
              -3,
              1,
              8,
              12
            ]
          })
        },
        'aria-hidden': !0,
        children: [
          (0, r.jsx)(s.animated.rect, {
            fill: 'white',
            x: O.to({
              range: [
                0,
                0.3,
                0.7,
                1
              ],
              output: [
                4,
                0,
                0,
                4
              ]
            }),
            y: O.to({
              range: [
                0,
                0.3,
                0.7,
                1
              ],
              output: [
                0,
                1,
                1,
                0
              ]
            }),
            height: O.to({
              range: [
                0,
                0.3,
                0.7,
                1
              ],
              output: [
                20,
                18,
                18,
                20
              ]
            }),
            width: O.to({
              range: [
                0,
                0.3,
                0.7,
                1
              ],
              output: [
                20,
                28,
                28,
                20
              ]
            }),
            rx: '10'
          }),
          function(e, t, n, i) {
            let a = e.to({
                output: [
                  t,
                  n
                ]
              }),
              o = i ? [
                f.X.TOP,
                f.X.TOP,
                f.CHECK.TOP,
                f.CHECK.TOP
              ] : [
                f.X.TOP,
                f.BAR.TOP,
                f.BAR.TOP,
                f.CHECK.TOP
              ],
              l = i ? [
                f.X.BOTTOM,
                f.X.BOTTOM,
                f.CHECK.BOTTOM,
                f.CHECK.BOTTOM
              ] : [
                f.X.BOTTOM,
                f.BAR.BOTTOM,
                f.BAR.BOTTOM,
                f.CHECK.BOTTOM
              ];
            return (0, r.jsxs)('svg', {
              viewBox: '0 0 20 20',
              fill: 'none',
              children: [
                (0, r.jsx)(s.animated.path, {
                  fill: a,
                  d: e.to({
                    range: [
                      0,
                      0.3,
                      0.7,
                      1
                    ],
                    output: o
                  })
                }),
                (0, r.jsx)(s.animated.path, {
                  fill: a,
                  d: e.to({
                    range: [
                      0,
                      0.3,
                      0.7,
                      1
                    ],
                    output: l
                  })
                })
              ]
            });
          }(O, N, v, T.enabled)
        ]
      }),
      (0, r.jsx)('input', {
        id: t,
        type: 'checkbox',
        ref: e => {
          g.current = e, null != I && (I.current = e);
        },
        className: _.input,
        tabIndex: h ? -1 : 0,
        onKeyDown: function(e) {
          if (!h && !e.repeat)
            (' ' === e.key || 'Enter' === e.key) && A(!0);
        },
        onKeyUp: function(e) {
          var t;
          if (!h && !!S && !e.repeat)
            A(!1), 'Enter' === e.key && (null === (t = g.current) || void 0 === t || t.click());
        },
        onChange: function(e) {
          A(!1), null == n || n(e.currentTarget.checked, e);
        },
        checked: a,
        disabled: h
      })
    ]
  })
});
  };