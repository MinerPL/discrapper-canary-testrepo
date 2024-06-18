"use strict";
n.d(t, {
  f: function() {
    return r
  }
});
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(920906),
  _ = n(481060),
  d = n(110924),
  c = n(447874);
(i = r || (r = {})).SUBTLE = "SUBTLE", i.DARK = "DARK", i.BLUR = "BLUR";
let E = o.forwardRef(function(e, t) {
  let {
    backdropStyle: n = "SUBTLE",
    backdropInstant: i = !1,
    zIndexBoost: r = 0,
    LayerComponent: o,
    isVisible: a,
    onClose: E
  } = e, I = function() {
    let e = (0, _.useToken)(_.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
        opacity: .25
      }),
      t = (0, _.useToken)(_.tokens.colors.BG_BACKDROP).spring();
    return {
      SUBTLE: e,
      DARK: t,
      BLUR: t
    }
  }()[n], T = (0, _.useToken)(_.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
    opacity: 0
  }), h = {
    background: T,
    backdropFilter: "blur(0px)"
  }, S = (0, d.Z)(i), f = (0, u.useTransition)(a, {
    keys: e => e ? "backdrop" : "empty",
    config: {
      duration: i || S ? 0 : 300
    },
    from: h,
    enter: {
      background: I,
      backdropFilter: "blur(".concat("BLUR" === n ? 8 : 0, "px)")
    },
    leave: h
  });
  if (null == o) {
    let e = {
      zIndex: 1e3 + r
    };
    return f((t, n) => n ? (0, s.jsx)(u.animated.div, {
      className: c.backdrop,
      style: {
        ...t,
        ...e
      },
      onClick: E
    }) : null)
  }
  return (0, s.jsx)(o, {
    children: f((e, t) => t ? (0, s.jsx)(u.animated.div, {
      className: l()(c.backdrop, c.withLayer),
      style: e,
      onClick: E
    }) : null)
  })
});
t.Z = E