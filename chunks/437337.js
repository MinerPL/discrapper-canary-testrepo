n.d(t, {
  r: function() {
return p;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(338545),
  l = n(692547),
  u = n(186325),
  c = n(84735),
  d = n(180035),
  _ = n(481060),
  E = n(77003);
let f = {
mass: 1,
tension: 250
  },
  h = {
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
  p = function(e) {
let {
  id: t,
  onChange: n,
  checked: a,
  disabled: p,
  className: m,
  focusProps: I,
  innerRef: T
} = e, {
  reducedMotion: g
} = i.useContext(u.S), S = i.useRef(null), [A, N] = i.useState(!1), v = (0, d.d)(l.Z.unsafe_rawColors.PRIMARY_400).spring(), O = (0, d.d)(l.Z.unsafe_rawColors.GREEN_360).spring(), {
  state: R,
  opacity: C
} = (0, _.useSpring)({
  config: f,
  opacity: p ? 0.3 : 1,
  state: A ? a ? 0.7 : 0.3 : a ? 1 : 0
}, 'animate-always');
return (0, r.jsx)(c.t, {
  ...I,
  within: !0,
  offset: -2,
  children: (0, r.jsxs)(o.animated.div, {
    className: s()(E.container, m, {
      [E.checked]: a,
      [E.disabled]: p
    }),
    onMouseDown: () => !p && N(!0),
    onMouseUp: () => N(!1),
    onMouseLeave: () => N(!1),
    style: {
      opacity: C,
      backgroundColor: R.to({
        output: [
          v,
          O
        ]
      })
    },
    children: [
      (0, r.jsxs)(o.animated.svg, {
        className: E.slider,
        viewBox: '0 0 28 20',
        preserveAspectRatio: 'xMinYMid meet',
        style: {
          left: R.to({
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
          (0, r.jsx)(o.animated.rect, {
            fill: 'white',
            x: R.to({
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
            y: R.to({
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
            height: R.to({
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
            width: R.to({
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
              s = i ? [
                h.X.TOP,
                h.X.TOP,
                h.CHECK.TOP,
                h.CHECK.TOP
              ] : [
                h.X.TOP,
                h.BAR.TOP,
                h.BAR.TOP,
                h.CHECK.TOP
              ],
              l = i ? [
                h.X.BOTTOM,
                h.X.BOTTOM,
                h.CHECK.BOTTOM,
                h.CHECK.BOTTOM
              ] : [
                h.X.BOTTOM,
                h.BAR.BOTTOM,
                h.BAR.BOTTOM,
                h.CHECK.BOTTOM
              ];
            return (0, r.jsxs)('svg', {
              viewBox: '0 0 20 20',
              fill: 'none',
              children: [
                (0, r.jsx)(o.animated.path, {
                  fill: a,
                  d: e.to({
                    range: [
                      0,
                      0.3,
                      0.7,
                      1
                    ],
                    output: s
                  })
                }),
                (0, r.jsx)(o.animated.path, {
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
          }(R, v, O, g.enabled)
        ]
      }),
      (0, r.jsx)('input', {
        id: t,
        type: 'checkbox',
        ref: e => {
          S.current = e, null != T && (T.current = e);
        },
        className: E.input,
        tabIndex: p ? -1 : 0,
        onKeyDown: function(e) {
          if (!p && !e.repeat)
            (' ' === e.key || 'Enter' === e.key) && N(!0);
        },
        onKeyUp: function(e) {
          var t;
          if (!p && !!A && !e.repeat)
            N(!1), 'Enter' === e.key && (null === (t = S.current) || void 0 === t || t.click());
        },
        onChange: function(e) {
          N(!1), null == n || n(e.currentTarget.checked, e);
        },
        checked: a,
        disabled: p
      })
    ]
  })
});
  };