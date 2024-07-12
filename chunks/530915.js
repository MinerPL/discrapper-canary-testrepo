n.d(t, {
  U: function() {
return L;
  }
}), n(47120);
var r, s, a = n(735250),
  o = n(470079),
  i = n(120356),
  l = n.n(i),
  c = n(954955),
  d = n.n(c),
  u = n(717888),
  p = n.n(u),
  g = n(82923),
  f = n(442837),
  C = n(481060),
  m = n(451478),
  h = n(259580),
  _ = n(305271),
  b = n(689938),
  x = n(692123);
let I = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: g.Z.Easing.bezier(0.15, 0, 0.25, 1),
  duration: 1000
};
(s = r || (r = {})).GO_TO_SLIDE = 'GO_TO_SLIDE', s.NEXT = 'NEXT', s.PREVIOUS = 'PREVIOUS';
let E = e => {
let {
  currentSlideIndex: t,
  numSlides: n,
  onNext: r,
  onPrevious: s,
  onIndicatorClick: o,
  className: i,
  paginationButtonClassName: c
} = e, d = l()(x.paginationButton, c);
return (0, a.jsxs)('div', {
  className: l()(x.controls, i),
  children: [
    (0, a.jsx)(C.Button, {
      look: C.Button.Looks.FILLED,
      color: C.Button.Colors.PRIMARY,
      className: d,
      onClick: s,
      'aria-label': b.Z.Messages.PAGINATION_PREVIOUS,
      children: (0, a.jsx)(h.Z, {
        direction: h.Z.Directions.LEFT
      })
    }),
    (0, a.jsx)('div', {
      className: x.paginationIndicatorContainer,
      children: p()(n, e => (0, a.jsx)(C.Button, {
        look: C.Button.Looks.BLANK,
        size: C.Button.Sizes.NONE,
        onClick: () => o(e),
        className: l()(x.paginationIndicatorButton, {
          [x.selected]: e === t
        }),
        'aria-label': b.Z.Messages.PAGINATION_SLIDE_LABEL.format({
          pageNumber: e + 1
        }),
        children: (0, a.jsx)('div', {
          className: l()(x.paginationIndicator, {
            [x.selected]: e === t
          })
        })
      }, 'slide-indicator-'.concat(e)))
    }),
    (0, a.jsx)(C.Button, {
      look: C.Button.Looks.FILLED,
      color: C.Button.Colors.PRIMARY,
      className: d,
      onClick: r,
      'aria-label': b.Z.Messages.PAGINATION_NEXT,
      children: (0, a.jsx)(h.Z, {
        direction: h.Z.Directions.RIGHT
      })
    })
  ]
});
  },
  L = e => {
let {
  carouselId: t,
  items: n = [],
  renderItem: r,
  getItemId: s,
  onIntentionalChange: i,
  onChangeItem: c,
  className: u,
  controlsClassName: p,
  paginationButtonClassName: g,
  springConfig: h,
  delay: b,
  initialPaused: L = !1,
  unidirectional: S = !1,
  analyticsLocations: v
} = e, {
  trackSlideView: T,
  trackPagination: N
} = (0, _.X)(t, v), [O, j] = (0, o.useState)(0), [Z, k] = (0, o.useState)(!1), [R, A] = (0, o.useState)(!1), P = o.useCallback(() => A(!0), []), B = o.useCallback(() => A(!1), []), M = (0, f.e7)([m.Z], () => m.Z.isFocused()), y = null != b && !L && !R && M, w = o.useCallback(e => (n.length + O + e) % n.length, [
  n,
  O
]), F = o.useCallback(d()((e, t, r) => {
  null != r && (null == i || i(n[e], t, e, r), N(e, O, s(e), s(t))), k('GO_TO_SLIDE' === r), null == c || c(n[e], t, e), j(e);
}, 200), [
  n,
  i,
  c
]);
return (0, o.useEffect)(() => {
  T(O, s(O));
}, [
  T,
  O,
  s
]), (0, o.useEffect)(() => {
  if (y) {
    let e = w(1),
      t = setInterval(() => F(e, O), b);
    return () => clearInterval(t);
  }
}, [
  y,
  b,
  O,
  w,
  F
]), (0, a.jsxs)('div', {
  className: l()(x.carouselContainer, u),
  onMouseEnter: P,
  onMouseLeave: B,
  children: [
    (0, a.jsx)(C.Slides, {
      activeSlide: String(O),
      springConfig: null != h ? h : I,
      directionOverride: S && !Z ? 'forwards' : void 0,
      fadeInOut: !0,
      children: n.map((e, t) => (0, a.jsx)(C.Slide, {
        id: String(t),
        children: (0, a.jsx)('div', {
          className: l()(x.carousel),
          children: r(e, t)
        })
      }, String(t)))
    }),
    n.length > 1 && (0, a.jsx)(E, {
      className: p,
      paginationButtonClassName: g,
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