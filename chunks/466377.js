"use strict";
n.d(t, {
  Cg: function() {
    return r
  },
  Y0: function() {
    return g
  },
  YA: function() {
    return P
  },
  hz: function() {
    return v
  },
  mz: function() {
    return D
  },
  ol: function() {
    return M
  },
  xB: function() {
    return L
  }
});
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(920906),
  _ = n(990547),
  d = n(748780),
  c = n(186325),
  E = n(693789),
  I = n(507274),
  T = n(84735),
  h = n(337033),
  S = n(742746),
  f = n(147479),
  N = n(285952),
  A = n(465670),
  m = n(602091),
  O = n(231338),
  R = n(689938),
  C = n(721790);
(i = r || (r = {})).SMALL = "small", i.MEDIUM = "medium", i.LARGE = "large", i.DYNAMIC = "dynamic";
let p = Object.freeze({
  small: C.small,
  medium: C.medium,
  large: C.large,
  dynamic: null
});

function g(e) {
  var t;
  let {
    transitionState: n,
    children: i,
    size: r = "small",
    role: a = "dialog",
    className: E,
    fullscreenOnMobile: h = !0,
    hideShadow: S = !1,
    onAnimationEnd: f = O.dG,
    returnRef: N,
    ...A
  } = e, R = n === m.Dv.ENTERING || n === m.Dv.ENTERED, {
    reducedMotion: g
  } = o.useContext(c.S), L = (0, u.useSpring)({
    opacity: R ? 1 : 0,
    transform: R || g.enabled ? "scale(1)" : "scale(0.7)",
    config: {
      duration: R ? 300 : 100,
      easing: R ? d.Z.Easing.inOut(d.Z.Easing.back()) : d.Z.Easing.quad,
      clamp: !0
    },
    onRest: f
  }), v = o.useRef(null), D = null != A["aria-label"], M = null != A["aria-labelledby"], P = o.useId(), y = null !== (t = A["aria-labelledby"]) && void 0 !== t ? t : P, U = o.useMemo(() => ({
    headerId: y,
    headerIdIsManaged: M
  }), [y, M]);
  return (0, s.jsx)(m.zM.Provider, {
    value: U,
    children: (0, s.jsx)(I.V, {
      className: C.focusLock,
      role: a,
      returnRef: N,
      impressionType: _.ImpressionTypes.MODAL,
      "aria-labelledby": D ? void 0 : U.headerId,
      ...A,
      children: (0, s.jsx)(u.animated.div, {
        className: l()(E, C.root, p[r], {
          [C.fullscreenOnMobile]: h,
          [C.rootWithShadow]: !S
        }),
        ref: v,
        style: L,
        children: (0, s.jsx)(T.J, {
          containerRef: v,
          children: i
        })
      })
    })
  })
}

function L(e) {
  var t, n, i, r, a;
  let {
    headerId: u,
    headerIdIsManaged: _
  } = o.useContext(m.zM);
  return (0, s.jsx)(N.Z, {
    grow: 0,
    shrink: 0,
    direction: null !== (t = e.direction) && void 0 !== t ? t : N.Z.Direction.HORIZONTAL,
    justify: null !== (n = e.justify) && void 0 !== n ? n : N.Z.Justify.START,
    align: null !== (i = e.align) && void 0 !== i ? i : N.Z.Align.CENTER,
    wrap: null !== (r = e.wrap) && void 0 !== r ? r : N.Z.Wrap.NO_WRAP,
    className: l()(C.header, e.className, {
      [C.separator]: null === (a = e.separator) || void 0 === a || a
    }),
    id: _ ? void 0 : u,
    children: e.children
  })
}

function v(e) {
  let {
    className: t,
    children: n,
    scrollerRef: i,
    scrollbarType: r,
    ...o
  } = e, a = function(e) {
    switch (null != e ? e : "thin") {
      case "auto":
        return f.yW;
      case "none":
        return f.xV;
      default:
        return f.h2
    }
  }(r);
  return (0, s.jsx)(a, {
    className: l()(C.content, t),
    ref: i,
    ...o,
    children: (0, s.jsx)(h.y, {
      children: n
    })
  })
}

function D(e) {
  var t, n, i, r, o;
  return (0, s.jsx)(N.Z, {
    grow: 0,
    shrink: 0,
    direction: null !== (t = e.direction) && void 0 !== t ? t : N.Z.Direction.HORIZONTAL_REVERSE,
    justify: null !== (n = e.justify) && void 0 !== n ? n : N.Z.Justify.START,
    align: null !== (i = e.align) && void 0 !== i ? i : N.Z.Align.STRETCH,
    wrap: null !== (r = e.wrap) && void 0 !== r ? r : N.Z.Wrap.NO_WRAP,
    className: l()(C.footer, e.className, {
      [C.footerSeparator]: null === (o = e.separator) || void 0 === o || o
    }),
    children: (0, s.jsx)(h.y, {
      children: e.children
    })
  })
}

function M(e) {
  return (0, s.jsx)(E.zx, {
    focusProps: e.focusProps,
    "aria-label": R.Z.Messages.CLOSE,
    look: E.zx.Looks.BLANK,
    size: E.zx.Sizes.NONE,
    onClick: e.onClick,
    innerClassName: l()({
      [C.closeWithCircleBackground]: e.withCircleBackground
    }),
    className: l()(e.className, {
      [C.hideOnFullscreen]: e.hideOnFullscreen,
      [C.close]: !e.withCircleBackground
    }),
    children: (0, s.jsx)(A.Z, {
      width: 24,
      height: 24,
      className: C.closeIcon
    })
  })
}

function P(e) {
  let {
    className: t,
    scrollerRef: n,
    ...i
  } = e;
  return (0, s.jsx)(S.Tv, {
    className: t,
    ref: n,
    ...i
  })
}