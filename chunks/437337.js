"use strict";
n.d(t, {
  r: function() {
    return T
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(692547),
  u = n(186325),
  _ = n(84735),
  d = n(180035),
  c = n(235949);
let E = {
    mass: 1,
    tension: 250
  },
  I = {
    X: {
      TOP: "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
      BOTTOM: "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"
    },
    BAR: {
      TOP: "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
      BOTTOM: "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z"
    },
    CHECK: {
      TOP: "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
      BOTTOM: "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"
    }
  },
  T = function(e) {
    let {
      id: t,
      onChange: n,
      checked: s,
      disabled: T,
      className: h,
      focusProps: S,
      innerRef: f
    } = e, {
      reducedMotion: N
    } = r.useContext(u.S), A = r.useRef(null), [m, O] = r.useState(!1), R = (0, d.d)(l.Z.unsafe_rawColors.PRIMARY_400).spring(), C = (0, d.d)(l.Z.unsafe_rawColors.GREEN_360).spring(), {
      state: p,
      opacity: g
    } = (0, a.useSpring)({
      config: E,
      opacity: T ? .3 : 1,
      state: m ? s ? .7 : .3 : s ? 1 : 0
    });
    return (0, i.jsx)(_.t, {
      ...S,
      within: !0,
      offset: -2,
      children: (0, i.jsxs)(a.animated.div, {
        className: o()(c.container, h, {
          [c.checked]: s,
          [c.disabled]: T
        }),
        onMouseDown: () => !T && O(!0),
        onMouseUp: () => O(!1),
        onMouseLeave: () => O(!1),
        style: {
          opacity: g,
          backgroundColor: p.to({
            output: [R, C]
          })
        },
        children: [(0, i.jsxs)(a.animated.svg, {
          className: c.slider,
          viewBox: "0 0 28 20",
          preserveAspectRatio: "xMinYMid meet",
          style: {
            left: p.to({
              range: [0, .3, .7, 1],
              output: [-3, 1, 8, 12]
            })
          },
          "aria-hidden": !0,
          children: [(0, i.jsx)(a.animated.rect, {
            fill: "white",
            x: p.to({
              range: [0, .3, .7, 1],
              output: [4, 0, 0, 4]
            }),
            y: p.to({
              range: [0, .3, .7, 1],
              output: [0, 1, 1, 0]
            }),
            height: p.to({
              range: [0, .3, .7, 1],
              output: [20, 18, 18, 20]
            }),
            width: p.to({
              range: [0, .3, .7, 1],
              output: [20, 28, 28, 20]
            }),
            rx: "10"
          }), function(e, t, n, r) {
            let s = e.to({
                output: [t, n]
              }),
              o = r ? [I.X.TOP, I.X.TOP, I.CHECK.TOP, I.CHECK.TOP] : [I.X.TOP, I.BAR.TOP, I.BAR.TOP, I.CHECK.TOP],
              l = r ? [I.X.BOTTOM, I.X.BOTTOM, I.CHECK.BOTTOM, I.CHECK.BOTTOM] : [I.X.BOTTOM, I.BAR.BOTTOM, I.BAR.BOTTOM, I.CHECK.BOTTOM];
            return (0, i.jsxs)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              children: [(0, i.jsx)(a.animated.path, {
                fill: s,
                d: e.to({
                  range: [0, .3, .7, 1],
                  output: o
                })
              }), (0, i.jsx)(a.animated.path, {
                fill: s,
                d: e.to({
                  range: [0, .3, .7, 1],
                  output: l
                })
              })]
            })
          }(p, R, C, N.enabled)]
        }), (0, i.jsx)("input", {
          id: t,
          type: "checkbox",
          ref: e => {
            A.current = e, null != f && (f.current = e)
          },
          className: c.input,
          tabIndex: T ? -1 : 0,
          onKeyDown: function(e) {
            if (!T && !e.repeat)(" " === e.key || "Enter" === e.key) && O(!0)
          },
          onKeyUp: function(e) {
            var t;
            if (!T && !!m && !e.repeat) O(!1), "Enter" === e.key && (null === (t = A.current) || void 0 === t || t.click())
          },
          onChange: function(e) {
            O(!1), null == n || n(e.currentTarget.checked, e)
          },
          checked: s,
          disabled: T
        })]
      })
    })
  }