n.d(t, {
  Cg: function() {
return i;
  },
  Y0: function() {
return R;
  },
  YA: function() {
return b;
  },
  hz: function() {
return y;
  },
  mz: function() {
return D;
  },
  ol: function() {
return L;
  },
  xB: function() {
return C;
  }
});
var r, i, a = n(735250),
  o = n(470079),
  s = n(120356),
  l = n.n(s),
  u = n(338545),
  c = n(990547),
  d = n(748780),
  _ = n(186325),
  E = n(693789),
  f = n(507274),
  h = n(84735),
  p = n(337033),
  m = n(788698),
  I = n(742746),
  T = n(147479),
  g = n(285952),
  S = n(602091),
  A = n(231338),
  N = n(689938),
  v = n(564606);
(r = i || (i = {})).SMALL = 'small', r.MEDIUM = 'medium', r.LARGE = 'large', r.DYNAMIC = 'dynamic';
let O = Object.freeze({
  small: v.small,
  medium: v.medium,
  large: v.large,
  dynamic: null
});

function R(e) {
  var t;
  let {
transitionState: n,
children: r,
size: i = 'small',
role: s = 'dialog',
className: E,
fullscreenOnMobile: p = !0,
hideShadow: m = !1,
onAnimationEnd: I = A.dG,
returnRef: T,
...g
  } = e, N = n === S.Dv.ENTERING || n === S.Dv.ENTERED, {
reducedMotion: R
  } = o.useContext(_.S), C = (0, u.useSpring)({
opacity: N ? 1 : 0,
transform: N || R.enabled ? 'scale(1)' : 'scale(0.7)',
config: {
  duration: N ? 300 : 100,
  easing: N ? d.Z.Easing.inOut(d.Z.Easing.back()) : d.Z.Easing.quad,
  clamp: !0
},
onRest: I
  }), y = o.useRef(null), D = null != g['aria-label'], L = null != g['aria-labelledby'], b = o.useId(), M = null !== (t = g['aria-labelledby']) && void 0 !== t ? t : b, P = o.useMemo(() => ({
headerId: M,
headerIdIsManaged: L
  }), [
M,
L
  ]);
  return (0, a.jsx)(S.zM.Provider, {
value: P,
children: (0, a.jsx)(f.V, {
  className: v.focusLock,
  role: s,
  returnRef: T,
  impressionType: c.ImpressionTypes.MODAL,
  'aria-labelledby': D ? void 0 : P.headerId,
  ...g,
  children: (0, a.jsx)(u.animated.div, {
    className: l()(E, v.root, O[i], {
      [v.fullscreenOnMobile]: p,
      [v.rootWithShadow]: !m
    }),
    ref: y,
    style: C,
    children: (0, a.jsx)(h.J, {
      containerRef: y,
      children: r
    })
  })
})
  });
}

function C(e) {
  var t, n, r, i, s;
  let {
headerId: u,
headerIdIsManaged: c
  } = o.useContext(S.zM);
  return (0, a.jsx)(g.Z, {
grow: 0,
shrink: 0,
direction: null !== (t = e.direction) && void 0 !== t ? t : g.Z.Direction.HORIZONTAL,
justify: null !== (n = e.justify) && void 0 !== n ? n : g.Z.Justify.START,
align: null !== (r = e.align) && void 0 !== r ? r : g.Z.Align.CENTER,
wrap: null !== (i = e.wrap) && void 0 !== i ? i : g.Z.Wrap.NO_WRAP,
className: l()(v.header, e.className, {
  [v.separator]: null === (s = e.separator) || void 0 === s || s
}),
id: c ? void 0 : u,
children: e.children
  });
}

function y(e) {
  let {
className: t,
children: n,
scrollerRef: r,
scrollbarType: i,
...o
  } = e, s = function(e) {
switch (null != e ? e : 'thin') {
  case 'auto':
    return T.yW;
  case 'none':
    return T.xV;
  default:
    return T.h2;
}
  }(i);
  return (0, a.jsx)(s, {
className: l()(v.content, t),
ref: r,
...o,
children: (0, a.jsx)(p.y, {
  children: n
})
  });
}

function D(e) {
  var t, n, r, i, o;
  return (0, a.jsx)(g.Z, {
grow: 0,
shrink: 0,
direction: null !== (t = e.direction) && void 0 !== t ? t : g.Z.Direction.HORIZONTAL_REVERSE,
justify: null !== (n = e.justify) && void 0 !== n ? n : g.Z.Justify.START,
align: null !== (r = e.align) && void 0 !== r ? r : g.Z.Align.STRETCH,
wrap: null !== (i = e.wrap) && void 0 !== i ? i : g.Z.Wrap.NO_WRAP,
className: l()(v.footer, e.className, {
  [v.footerSeparator]: null === (o = e.separator) || void 0 === o || o
}),
children: (0, a.jsx)(p.y, {
  children: e.children
})
  });
}

function L(e) {
  return (0, a.jsx)(E.zx, {
focusProps: e.focusProps,
'aria-label': N.Z.Messages.CLOSE,
look: E.zx.Looks.BLANK,
size: E.zx.Sizes.NONE,
onClick: e.onClick,
innerClassName: l()({
  [v.closeWithCircleBackground]: e.withCircleBackground
}),
className: l()(e.className, {
  [v.hideOnFullscreen]: e.hideOnFullscreen,
  [v.close]: !e.withCircleBackground
}),
children: (0, a.jsx)(m.F, {
  size: 'md',
  color: 'currentColor',
  className: v.closeIcon
})
  });
}

function b(e) {
  let {
className: t,
scrollerRef: n,
...r
  } = e;
  return (0, a.jsx)(I.Tv, {
className: t,
ref: n,
...r
  });
}