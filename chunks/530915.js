"use strict";
t.d(s, {
  U: function() {
    return N
  }
}), t(47120);
var n, a, i = t(735250),
  l = t(470079),
  r = t(120356),
  o = t.n(r),
  c = t(954955),
  u = t.n(c),
  d = t(717888),
  C = t.n(d),
  E = t(82923),
  f = t(442837),
  m = t(481060),
  p = t(451478),
  g = t(259580),
  h = t(305271),
  x = t(689938),
  _ = t(816124);
let I = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: E.ZP.Easing.bezier(.15, 0, .25, 1),
  duration: 1e3
};
(a = n || (n = {})).GO_TO_SLIDE = "GO_TO_SLIDE", a.NEXT = "NEXT", a.PREVIOUS = "PREVIOUS";
let T = e => {
    let {
      currentSlideIndex: s,
      numSlides: t,
      onNext: n,
      onPrevious: a,
      onIndicatorClick: l,
      className: r,
      paginationButtonClassName: c
    } = e, u = o()(_.paginationButton, c);
    return (0, i.jsxs)("div", {
      className: o()(_.controls, r),
      children: [(0, i.jsx)(m.Button, {
        look: m.Button.Looks.FILLED,
        color: m.Button.Colors.PRIMARY,
        className: u,
        onClick: a,
        "aria-label": x.Z.Messages.PAGINATION_PREVIOUS,
        children: (0, i.jsx)(g.Z, {
          direction: g.Z.Directions.LEFT
        })
      }), (0, i.jsx)("div", {
        className: _.paginationIndicatorContainer,
        children: C()(t, e => (0, i.jsx)(m.Button, {
          look: m.Button.Looks.BLANK,
          size: m.Button.Sizes.NONE,
          onClick: () => l(e),
          className: o()(_.paginationIndicatorButton, {
            [_.selected]: e === s
          }),
          "aria-label": x.Z.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: e + 1
          }),
          children: (0, i.jsx)("div", {
            className: o()(_.paginationIndicator, {
              [_.selected]: e === s
            })
          })
        }, "slide-indicator-".concat(e)))
      }), (0, i.jsx)(m.Button, {
        look: m.Button.Looks.FILLED,
        color: m.Button.Colors.PRIMARY,
        className: u,
        onClick: n,
        "aria-label": x.Z.Messages.PAGINATION_NEXT,
        children: (0, i.jsx)(g.Z, {
          direction: g.Z.Directions.RIGHT
        })
      })]
    })
  },
  N = e => {
    let {
      carouselId: s,
      items: t = [],
      renderItem: n,
      getItemId: a,
      onIntentionalChange: r,
      onChangeItem: c,
      className: d,
      controlsClassName: C,
      paginationButtonClassName: E,
      springConfig: g,
      delay: x,
      initialPaused: N = !1,
      unidirectional: S = !1,
      analyticsLocations: L
    } = e, {
      trackSlideView: b,
      trackPagination: v
    } = (0, h.X)(s, L), [O, Z] = (0, l.useState)(0), [A, R] = (0, l.useState)(!1), [j, P] = (0, l.useState)(!1), M = l.useCallback(() => P(!0), []), k = l.useCallback(() => P(!1), []), B = (0, f.e7)([p.Z], () => p.Z.isFocused()), y = null != x && !N && !j && B, F = l.useCallback(e => (t.length + O + e) % t.length, [t, O]), D = l.useCallback(u()((e, s, n) => {
      null != n && (null == r || r(t[e], s, e, n), v(e, O, a(e), a(s))), R("GO_TO_SLIDE" === n), null == c || c(t[e], s, e), Z(e)
    }, 200), [t, r, c]);
    return (0, l.useEffect)(() => {
      b(O, a(O))
    }, [b, O, a]), (0, l.useEffect)(() => {
      if (y) {
        let e = F(1),
          s = setInterval(() => D(e, O), x);
        return () => clearInterval(s)
      }
    }, [y, x, O, F, D]), (0, i.jsxs)("div", {
      className: o()(_.carouselContainer, d),
      onMouseEnter: M,
      onMouseLeave: k,
      children: [(0, i.jsx)(m.Slides, {
        activeSlide: String(O),
        springConfig: null != g ? g : I,
        directionOverride: S && !A ? "forwards" : void 0,
        fadeInOut: !0,
        children: t.map((e, s) => (0, i.jsx)(m.Slide, {
          id: String(s),
          children: (0, i.jsx)("div", {
            className: o()(_.carousel),
            children: n(e, s)
          })
        }, String(s)))
      }), t.length > 1 && (0, i.jsx)(T, {
        className: C,
        paginationButtonClassName: E,
        currentSlideIndex: O,
        numSlides: t.length,
        onNext: () => {
          D(F(1), O, "NEXT")
        },
        onPrevious: () => {
          D(F(-1), O, "PREVIOUS")
        },
        onIndicatorClick: e => {
          D(e, O, "GO_TO_SLIDE")
        }
      })]
    })
  }