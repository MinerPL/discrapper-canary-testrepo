n.d(t, {
  U: function() {
return v;
  }
}), n(47120);
var s, r, a = n(735250),
  o = n(470079),
  i = n(120356),
  c = n.n(i),
  l = n(954955),
  d = n.n(l),
  u = n(717888),
  f = n.n(u),
  p = n(82923),
  g = n(442837),
  C = n(481060),
  _ = n(451478),
  m = n(259580),
  b = n(305271),
  h = n(689938),
  x = n(692123);
let E = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: p.Z.Easing.bezier(0.15, 0, 0.25, 1),
  duration: 1000
};
(r = s || (s = {})).GO_TO_SLIDE = 'GO_TO_SLIDE', r.NEXT = 'NEXT', r.PREVIOUS = 'PREVIOUS';
let I = e => {
let {
  currentSlideIndex: t,
  numSlides: n,
  onNext: s,
  onPrevious: r,
  onIndicatorClick: o,
  className: i,
  paginationButtonClassName: l
} = e, d = c()(x.paginationButton, l);
return (0, a.jsxs)('div', {
  className: c()(x.controls, i),
  children: [
    (0, a.jsx)(C.Button, {
      look: C.Button.Looks.FILLED,
      color: C.Button.Colors.PRIMARY,
      className: d,
      onClick: r,
      'aria-label': h.Z.Messages.PAGINATION_PREVIOUS,
      children: (0, a.jsx)(m.Z, {
        direction: m.Z.Directions.LEFT
      })
    }),
    (0, a.jsx)('div', {
      className: x.paginationIndicatorContainer,
      children: f()(n, e => (0, a.jsx)(C.Button, {
        look: C.Button.Looks.BLANK,
        size: C.Button.Sizes.NONE,
        onClick: () => o(e),
        className: c()(x.paginationIndicatorButton, {
          [x.selected]: e === t
        }),
        'aria-label': h.Z.Messages.PAGINATION_SLIDE_LABEL.format({
          pageNumber: e + 1
        }),
        children: (0, a.jsx)('div', {
          className: c()(x.paginationIndicator, {
            [x.selected]: e === t
          })
        })
      }, 'slide-indicator-'.concat(e)))
    }),
    (0, a.jsx)(C.Button, {
      look: C.Button.Looks.FILLED,
      color: C.Button.Colors.PRIMARY,
      className: d,
      onClick: s,
      'aria-label': h.Z.Messages.PAGINATION_NEXT,
      children: (0, a.jsx)(m.Z, {
        direction: m.Z.Directions.RIGHT
      })
    })
  ]
});
  },
  v = e => {
let {
  carouselId: t,
  items: n = [],
  renderItem: s,
  getItemId: r,
  onIntentionalChange: i,
  onChangeItem: l,
  className: u,
  controlsClassName: f,
  paginationButtonClassName: p,
  springConfig: m,
  delay: h,
  initialPaused: v = !1,
  unidirectional: L = !1,
  analyticsLocations: S
} = e, {
  trackSlideView: T,
  trackPagination: N
} = (0, b.X)(t, S), [O, k] = (0, o.useState)(0), [j, P] = (0, o.useState)(!1), [A, B] = (0, o.useState)(!1), R = o.useCallback(() => B(!0), []), Z = o.useCallback(() => B(!1), []), M = (0, g.e7)([_.Z], () => _.Z.isFocused()), y = null != h && !v && !A && M, w = o.useCallback(e => (n.length + O + e) % n.length, [
  n,
  O
]), F = o.useCallback(d()((e, t, s) => {
  null != s && (null == i || i(n[e], t, e, s), N(e, O, r(e), r(t))), P('GO_TO_SLIDE' === s), null == l || l(n[e], t, e), k(e);
}, 200), [
  n,
  i,
  l
]);
return (0, o.useEffect)(() => {
  T(O, r(O));
}, [
  T,
  O,
  r
]), (0, o.useEffect)(() => {
  if (y) {
    let e = w(1),
      t = setInterval(() => F(e, O), h);
    return () => clearInterval(t);
  }
}, [
  y,
  h,
  O,
  w,
  F
]), (0, a.jsxs)('div', {
  className: c()(x.carouselContainer, u),
  onMouseEnter: R,
  onMouseLeave: Z,
  children: [
    (0, a.jsx)(C.Slides, {
      activeSlide: String(O),
      springConfig: null != m ? m : E,
      directionOverride: L && !j ? 'forwards' : void 0,
      fadeInOut: !0,
      children: n.map((e, t) => (0, a.jsx)(C.Slide, {
        id: String(t),
        children: (0, a.jsx)('div', {
          className: c()(x.carousel),
          children: s(e, t)
        })
      }, String(t)))
    }),
    n.length > 1 && (0, a.jsx)(I, {
      className: f,
      paginationButtonClassName: p,
      currentSlideIndex: O,
      numSlides: n.length,
      onNext: () => {
        F(w(1), O, 'NEXT');
      },
      onPrevious: () => {
        F(w(-1), O, 'PREVIOUS');
      },
      onIndicatorClick: e => {
        F(e, O, 'GO_TO_SLIDE');
      }
    })
  ]
});
  };